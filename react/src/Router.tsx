import { LazyExoticComponent } from "react"
import { RouteObject } from "react-router-dom"

export type RouteConfig = RouteObject & {component: LazyExoticComponent<any>}

export function getRoutes (): RouteConfig [] {
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

