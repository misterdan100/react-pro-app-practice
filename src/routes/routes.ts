import { lazy, LazyExoticComponent } from "react"
import NoLazy from "../01-lazyload/pages/NoLazy"

type JSXComponent = () => JSX.Element

interface Route {
    path: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string,
    children?: Route[]
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */'../01-lazyload/layout/LazyLayout'))


export const routes: Route[] = [
    {
        path: '/lazy',
        Component: LazyLayout,
        name: 'Lazy 1',
    },
    {
        path: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy',
    },

]