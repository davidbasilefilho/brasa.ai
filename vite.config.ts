import netlify from "@netlify/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
	plugins: [
		react(),
		tailwindcss(),
		...(mode === "production" ? [netlify()] : []),
	],
}));
