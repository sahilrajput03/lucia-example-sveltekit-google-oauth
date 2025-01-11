# Sahil

❤️ Redirect url need to be setup in google cloud console as:

- "http://localhost:5173/login/google/callback"
- "https://lucia-example-sveltekit-google-oauth.onrender.com/login/google/callback"

In local code we specify it in file - `src/lib/server/oauth.ts`

Forked from: [https://github.com/lucia-auth/example-sveltekit-google-oauth](https://github.com/lucia-auth/example-sveltekit-google-oauth).

**Note:** _For render.com deployment: I am setting preview port as `10000` in `vite.config.ts` file. ([source](https://render.com/docs/web-services#port-binding))_

# Google OAuth example in SvelteKit

## Initialize project

Register an OAuth client on the Google API Console. Paste the client ID and secret to a `.env` file.

```bash
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET="
```

Run the application:

```bash
pnpm i
pnpm dev
```
