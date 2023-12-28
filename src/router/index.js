import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Typography from "@/views/Typography.vue";
import Button from "@/views/Button.vue";
import Checkbox from "@/views/Checkbox.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index,
        },
        {
            path: "/typography",
            name: "typography",
            component: Typography,
        },
        {
            path: "/button",
            name: "button",
            component: Button,
        },

        {
            path: "/checkbox",
            name: "checkbox",
            component: Checkbox,
        },
    ],
});
export default router;