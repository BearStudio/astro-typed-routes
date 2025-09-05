// @ts-check
import { defineConfig } from "astro/config";
import typedRoutes from "@bearstudio/astro-typed-routes";

// https://astro.build/config
export default defineConfig({ integrations: [typedRoutes()] });
