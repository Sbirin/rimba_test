import { createRouter, createWebHistory } from "vue-router";
import Sales from "../views/Sales.vue";
import Item from "../views/Item.vue";
import FormItem from "../views/FormItem.vue";
import Customers from "../views/Customers.vue";


const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sales",
  },
  {
    path: "/sales",
    name: "Sales",
    component: Sales,
  },
  {
    path: "/item",
    name: "Item",
    component: Item,
  },
  {
    path: "/form-item",
    name: "Form Item",
    component: FormItem,
  },
  {
    path: "/customers",
    name: "Customers",
    component: Customers,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
