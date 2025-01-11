import { db, type UserType } from "./db";

let userCount = 1

export function createUser(googleId: string, email: string, name: string, picture: string): UserType | undefined {
	let user: UserType | undefined = undefined;
	if (!db.userDb.find(u => u.googleId === googleId)) {
		user = {
			id: userCount++,
			googleId,
			email,
			name,
			picture
		};
		db.userDb.push(user);
	}

	return user;
}

export function getUserFromGoogleId(googleId: string): UserType | undefined {
	const user = db.userDb.find(u => u.googleId === googleId)
	return user;
}
