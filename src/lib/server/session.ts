import { db, type UserType } from "./db";
import { encodeBase32, encodeHexLowerCase } from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";

import type { RequestEvent } from "@sveltejs/kit";

export function validateSessionToken(token: string): SessionValidationResult {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const ssn = db.sessionDb.find(s => s.id === sessionId)
	if (!ssn) {
		return { session: null, user: null };
	}
	const session: Session = {
		id: ssn.id,
		userId: ssn.user_id,
		expiresAt: new Date(ssn.expires_at * 1000)
	};

	const user = db.userDb.find(u => u.id === ssn.user_id) || null;
	if (Date.now() >= session.expiresAt.getTime()) {
		db.sessionDb = db.sessionDb.filter(s => s.id === session.id);
		return { session: null, user: null };
	}
	if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
		session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
		const expires_at = Math.floor(session.expiresAt.getTime() / 1000)
		db.sessionDb.map(s => s.id === session.id ? { ...s, expires_at } : s);
	}
	return { session, user };
}

export function invalidateSession(sessionId: string): void {
	db.sessionDb = db.sessionDb.filter(s => s.id !== sessionId);
}

export function invalidateUserSessions(userId: number): void {
	db.userDb = db.userDb.filter(u => u.id === userId)
}

export function setSessionTokenCookie(event: RequestEvent, token: string, expiresAt: Date): void {
	event.cookies.set("session", token, {
		httpOnly: true,
		path: "/",
		secure: import.meta.env.PROD,
		sameSite: "lax",
		expires: expiresAt
	});
}

export function deleteSessionTokenCookie(event: RequestEvent): void {
	event.cookies.set("session", "", {
		httpOnly: true,
		path: "/",
		secure: import.meta.env.PROD,
		sameSite: "lax",
		maxAge: 0
	});
}

export function generateSessionToken(): string {
	const tokenBytes = new Uint8Array(20);
	crypto.getRandomValues(tokenBytes);
	const token = encodeBase32(tokenBytes).toLowerCase();
	return token;
}

export function createSession(token: string, userId: number): Session {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));
	const session: Session = {
		id: sessionId,
		userId,
		expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30)
	};
	db.sessionDb.push({
		id: session.id,
		user_id: session.userId,
		expires_at: Math.floor(session.expiresAt.getTime() / 1000)
	})
	return session;
}

export type Session = {
	id: string;
	expiresAt: Date;
	userId: number;
}

type SessionValidationResult = { session: Session | null; user: UserType | null }
