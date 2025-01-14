# Sahil

[Learn Cookies](https://docs.google.com/document/d/1yOVBrqZAN5lstXzeIgN5wUq857dV92RU7RKBp8DXD1E/edit?tab=t.0)

Lucia:

- Docs: [https://lucia-auth.com/tutorials/google-oauth/sveltekit](https://lucia-auth.com/tutorials/google-oauth/sveltekit)
- Github: [lucia-auth/example-sveltekit-google-oauth](https://github.com/lucia-auth/example-sveltekit-google-oauth)

Deployed at:

_Last tested on 11 Jan 2025_

- [https://lucia-example-sveltekit-google-oauth.onrender.com/login](https://lucia-example-sveltekit-google-oauth.onrender.com) (works tested)
- [https://lucia-example-sveltekit-google-oauth.vercel.app/login](https://lucia-example-sveltekit-google-oauth.vercel.app) (works tested)

Please add following urls to GCC (Google Cloud Console):

- _(You can skip adding these because it works without them as well)_ Authorized JavaScript origins:
  - https://lucia-example-sveltekit-google-oauth.onrender.com
  - https://lucia-example-sveltekit-google-oauth.vercel.app
- ⭐ (MUST add these) **Authorized redirect URIs**:
  - http://localhost:5173/login/google/callback
  - https://lucia-example-sveltekit-google-oauth.onrender.com/login/google/callback
  - https://lucia-example-sveltekit-google-oauth.vercel.app/login/google/callback

❤️ Redirect url need to be setup in google cloud console and we in local .env file or deployment environment e.g., vercel or render as well. We use redirect url in file - `src/lib/server/oauth.ts`. You can also check `.env.example` file to see values to be used in deployment platforms (vercel or render).

Forked from: [https://github.com/lucia-auth/example-sveltekit-google-oauth](https://github.com/lucia-auth/example-sveltekit-google-oauth).

**Note:** _For render.com deployment: I am setting preview port as `10000` in `vite.config.ts` file. ([source](https://render.com/docs/web-services#port-binding))_

# Google OAuth example in SvelteKit

## Initialize project

Register an OAuth client on the Google API Console. Paste the client ID and secret to a `.env` file.

```bash
GOOGLE_CLIENT_ID=''
GOOGLE_CLIENT_SECRET=''
GOOGLE_REDIRECT_URI='http://localhost:5173/login/google/callback'

# You must add respective GOOGLE_REDIRECT_URI in the deployment environment (vercel/rener) AND
#       to GCC (Google Cloud Console) as well. It takes 5 mins to update in Google Cloud Console.

# vercel.com deployment
# GOOGLE_REDIRECT_URI = "https://lucia-example-sveltekit-google-oauth.vercel.app/login/google/callback"

# render.com deployment
# GOOGLE_REDIRECT_URI = "https://lucia-example-sveltekit-google-oauth.onrender.com/login/google/callback"


```

Run the application:

```bash
pnpm i
pnpm dev
```
