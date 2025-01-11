import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [sveltekit()],
	preview: {
		port: 10000 // to run on port 10000 on render environment because render's environment exposes 10000 port. Docs - https://render.com/docs/web-services#port-binding
	}
});
