import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import mdx from "@mdx-js/rollup"

// https://vite.dev/config/
export default defineConfig(async () => {
  

  return {
    plugins: [
      tanstackRouter({
        target: "react",
        autoCodeSplitting: true
      }),
      react(),
      tailwindcss(),
      mdx()
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
