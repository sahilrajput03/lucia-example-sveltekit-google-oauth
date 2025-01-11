import { json, redirect } from "@sveltejs/kit";
import { deleteSessionTokenCookie, invalidateSession } from "$lib/server/session";
import type { RequestEvent } from "../$types";

export async function POST(event: RequestEvent): Promise<Response> {
    console.log('API /logout POST API')
    if (event.locals.session === null) {
        return new Response(null, { status: 401 });
    }
    invalidateSession(event.locals.session.id);
    deleteSessionTokenCookie(event);

    return json({ message: 'logout successful' }, { status: 200 })
    // return redirect(302, "/abc"); // << this doesn't auto redirect thus we need to redirect manually from frontend.
}

