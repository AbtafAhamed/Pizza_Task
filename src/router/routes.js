const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("layouts/LoginLayout.vue"),
    children: [{ path: "", component: () => import("pages/Login.vue") }]
  },
  {
    path: "/Menu",
    name: "Menu",
    meta: { requiresAuth: true },
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "Home",
        name: "Home",
        meta: { requiresAuth: true },
        component: () => import("pages/Home.vue")
      },
      {
        path: "DisplayItems",
        name: "DisplayItems",
        meta: { requiresAuth: true },
        component: () => import("pages/DisplayItems.vue")
      },
      {
        path: "OrderStatus",
        name: "OrderStatus",
        meta: { requiresAuth: true },
        component: () => import("pages/OrderStatus.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
