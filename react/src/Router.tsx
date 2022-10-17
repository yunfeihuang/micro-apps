import { LazyExoticComponent, Suspense } from "react"
import { RouteObject, useRoutes } from "react-router-dom"

export type RouteConfig = RouteObject & {component: LazyExoticComponent<any>}

export function getFileRoutes (): RouteConfig [] {
  let result: RouteConfig [] = []
  const routeFiles = import.meta.glob('./pages/**/route.ts', {eager: true})
  for (const path in routeFiles) {
    if (routeFiles[path]) {
      result = [
        ...result,
        ...(routeFiles[path] as {default: RouteConfig []}).default
      ]
    }
  }
  return result
}

function Routes () {
  return useRoutes(getFileRoutes().map((route) => {
    return {
      path: route.path,
      element: <Suspense fallback={<div>loading</div>}><route.component /></Suspense>
    }
  }))
}
Routes.displayName = "Routes"

export default Routes

