import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

const routes = [
  {
    path: "/",
    redirect: "/pokemon",
  },

  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /* webpackChunkName: "Pokemon"*/ "@/modules/pokemon/layouts/PokemonLayout"
      ),
    children: [
      {
        path: "home",
        name: "pokemon-home",
        component: () =>
          import(
            /* webpackChunkName: "ListPage"*/ "@/modules/pokemon/pages/ListPage"
          ),
      },
      {
        path: "about",
        name: "pokemon-about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage"*/ "@/modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: ":pokemonId",
        name: "pokemon-id",
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage"*/ "@/modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          const pokemonId = Number(route.params.pokemonId);
          return isNaN(pokemonId) ? { pokemonId: 1 } : { pokemonId };
        },
      },
      {
        path: "",
        redirect: { name: "pokemon-home" },
      },
    ],
  },
  {
    path: "/dbz",
    name: "dbz",
    beforeEnter: [ isAuthenticatedGuard ],
    component: () =>
      import(/* webpackChunkName: "DBZLayout"*/ "@/modules/dbz/layouts/DBZLayout"),
    children: [
      {
        path: "characters",
        name: "dbz-characters",
        component: () =>
          import(
            /* webpackChunkName: "CharactersPage"*/ "@/modules/dbz/pages/CharactersPage"
          ),
      },
      {
        path: "about",
        name: "dbz-about",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage"*/ "@/modules/dbz/pages/AboutPage"
          ),
      },
      {
        path: "",
        redirect: { name: "dbz-characters" },
      },
    ],
  },
  // cualquier otro path
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () =>
      import(
        /* webpackChunkName: "NotFoundPage"*/ "@/modules/shared/pages/NoPageFound"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
