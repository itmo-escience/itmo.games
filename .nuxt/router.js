import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2d95ad27 = () => interopDefault(import('..\\pages\\game.vue' /* webpackChunkName: "pages_game" */))
const _2a4ce668 = () => interopDefault(import('..\\pages\\lab.vue' /* webpackChunkName: "pages_lab" */))
const _1bf21e6d = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _2d95ad27,
    name: "game"
  }, {
    path: "/lab",
    component: _2a4ce668,
    name: "lab"
  }, {
    path: "/",
    component: _1bf21e6d,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
