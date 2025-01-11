# Sahil

❤️ Redirect url need to be setup in google cloud console as "http://localhost:5173/login/google/callback"

Forked from: [https://github.com/lucia-auth/example-sveltekit-google-oauth](https://github.com/lucia-auth/example-sveltekit-google-oauth).

# Google OAuth example in SvelteKit

Uses SQLite. Rate limiting is implemented using JavaScript `Map`.

## Initialize project

Register an OAuth client on the Google API Console. Paste the client ID and secret to a `.env` file.

```bash
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET="
```

Create `sqlite.db` and run `setup.sql`.

```bash
# Run the setup.sql in your db file (file will be created if not present)
sqlite3 sqlite.db < setup.sql

# Opens the SQLite database file `sqlite.db` in the SQLite command-line interface for querying and managing the database
sqlite3 sqlite.db
```

Run the application:

```bash
pnpm i
pnpm dev
```
