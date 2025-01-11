import { Google } from "arctic";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { isDevelopment } from "../../utils";

const productionRedirectURI = "https://lucia-example-sveltekit-google-oauth.onrender.com/login/google/callback"
const developmentRedirectURI = "http://localhost:5173/login/google/callback"


export const google = new Google(
    GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET,
    isDevelopment ? developmentRedirectURI : productionRedirectURI
);
