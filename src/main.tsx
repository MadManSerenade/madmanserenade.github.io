import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./globals.css"
import "./utils.css"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { RouterProvider, createHashHistory, createRouter } from "@tanstack/react-router"
import { routeTree } from "./routeTree.gen"

const hashHistory = createHashHistory()

const router = createRouter({ routeTree, history: hashHistory })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")!
if (!rootElement.innerHTML) {
  createRoot(rootElement).render(
    <StrictMode>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StrictMode>
  )
}
