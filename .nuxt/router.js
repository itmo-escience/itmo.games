import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _f4b7a518 = () => interopDefault(import('..\\pages\\game.vue' /* webpackChunkName: "pages_game" */))
const _7776a87b = () => interopDefault(import('..\\pages\\lab.vue' /* webpackChunkName: "pages_lab" */))
const _7498b080 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/game",
    component: _f4b7a518,
    name: "game"
  }, {
    path: "/lab",
    component: _7776a87b,
    name: "lab"
  }, {
    path: "/",
    component: _7498b080,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
