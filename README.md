# 🚀 Astro Typed Routes

This Astro integration helps you generating a typed ROUTES object that you can
use with [lunalink](https://github.com/BearStudio/lunalink) so you can enjoy
fully typed routes in all your Astro project, avoiding wrong parameters and 404
pages.

## Installation

### Automatic Integration Setup

You can install the integration through `astro add` command so it automatically
install the package and configure your `astro.config.mjs` for you.

```sh
pnpm astro add @bearstudio/astro-typed-routes
```

### Manual Installation

```sh
pnpm add @bearstudio/astro-typed-routes
```

```diff
import { defineConfig } from 'astro/config';
+import typedRoutes from "@bearstudio/astro-typed-routes";

export default defineConfig({
  integrations: [
+    typedRoutes(),
  ]
});
```

## Usage

This integration automatically generate a `./src/routes.gen.ts` file in your
project when you add or remove a file from the `./src/pages` folder.

Then, use the exported const `ROUTES` in your project with
[lunalink](https://github.com/BearStudio/lunalink) for path with params.

```index.astro
---
import {lunalink } from "@bearstudio/lunalink"
import { ROUTES } from "../routes.gen";
---

<a href={lunalink(ROUTES.about.__path, {})}>
  About
</a>

<a href={lunalink(ROUTES.projects[':id].__path, { id: 'my-project'})}>
 My project
</a>

```
