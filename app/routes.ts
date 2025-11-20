import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("text-studio", "text-studio/text-studio.tsx"),
] satisfies RouteConfig;
