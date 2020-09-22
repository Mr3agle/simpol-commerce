import go from "./route_name";

export default {
    mode: "history",
    routes: [
        {
            path: "/",
            name: "Home",
            component: go.Home
        },
        {
            path: "/about",
            name: "About",
            component: go.About
        },
        {
            path: "*",
            name: "NotFound",
            component: go.NotFound
        }
    ]
};
