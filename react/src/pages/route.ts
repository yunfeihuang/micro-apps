import { lazy } from "react"
import { RouteConfig } from "../Router"

const routes: RouteConfig [] = [
  {
    path: '/',
    component: lazy(() => import('./Home'))
  }
]
export default routes