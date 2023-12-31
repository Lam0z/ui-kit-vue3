import { createRouter, createWebHistory } from "vue-router";
import Index from "@/views/index.vue";
import Typography from "@/views/Typography.vue";
import Button from "@/views/Button.vue";
import Checkbox from "@/views/Checkbox.vue";
import RadioButton from "@/views/RadioButton.vue";
import Progress from "@/views/Progress.vue";
import Input from "@/views/Input.vue";
import Tabs from "@/views/Tabs.vue";
import Table from "@/views/Table.vue";
import Accordion from "@/views/Accordion.vue";
import ShowMore from "@/views/ShowMore.vue";
import Modal from "@/views/Modal.vue";

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
        {
            path: "/radiobutton",
            name: "radiobutton",
            component: RadioButton,
        },
        {
            path: "/progress",
            name: "progress",
            component: Progress,
        },
        {
            path: "/input",
            name: "input",
            component: Input,
        },
        {
            path: "/tabs",
            name: "tabs",
            component: Tabs,
        },
        {
            path: "/table",
            name: "table",
            component: Table,
        },
        {
            path: "/accordion",
            name: "accordion",
            component: Accordion,
        },
        {
            path: "/showMore",
            name: "showMore",
            component: ShowMore,
        },
        {
            path: "/modal",
            name: "modal",
            component: Modal,
        },
    ],
});
export default router;
