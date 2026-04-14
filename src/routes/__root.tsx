import { Footer } from "@/components/footer"
import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const RootLayout = () => (
    <>
        {/* <nav>
            <Link to="/">
                Home
            </Link>
            <Link to="/projects">
                Projects
            </Link>
        </nav> */}
        {/* <hr /> */}
        <Outlet />
        <TanStackRouterDevtools />
        <Footer />
    </>
)

export const Route = createRootRoute({ component: RootLayout })