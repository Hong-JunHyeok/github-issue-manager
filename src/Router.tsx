import {
  createRootRoute,
  createRouter,
  Outlet,
  createRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { PageLayoutComponent } from "./components/shared/page-layout";
import { Index } from "./pages";

const rootRoute = createRootRoute({
  component: () => (
    <>
      <PageLayoutComponent>
        <Outlet />
      </PageLayoutComponent>

      <TanStackRouterDevtools />
    </>
  ),
});

const routes = {
  indexRoute: createRoute({
    getParentRoute: () => rootRoute,
    path: "/",
    component: () => <Index />,
  }),
};

const routeTree = rootRoute.addChildren([...Object.values(routes)]);

const router = createRouter({ routeTree });

export default router;
