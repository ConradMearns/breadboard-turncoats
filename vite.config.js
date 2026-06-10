import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// Plugin to strip the file:// redirect script from the build output
function stripRedirectPlugin() {
  return {
    name: "strip-redirect",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(
          /<script id="file-redirect">[\s\S]*?<\/script>/,
          ""
        );
      },
    },
  };
}

export default defineConfig({
  base: "./",
  plugins: [stripRedirectPlugin(), svelte()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
