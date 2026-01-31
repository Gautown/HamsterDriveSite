# create-bearnie

Create a new Astro project with Bearnie UI components pre-configured.

## Usage

```bash
npm create bearnie
# or
npx create-bearnie
# or with a project name
npm create bearnie my-app
```

## Custom Theme

Create your own theme at [bearnie.dev/create-bearnie-theme](https://bearnie.dev/create-bearnie-theme), then use the generated command:

```bash
npm create bearnie my-app --theme=https://bearnie.dev/create-bearnie-theme#YOUR_THEME_HASH
```

This applies your custom colors, radius, and font to the project's CSS.

## What's included

- Astro 5 with TypeScript
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- Bearnie CSS variables and theme
- Simple landing page to get started
- Ready for components via `npx bearnie add`

## After creating your project

```bash
cd my-app
npm install
npx bearnie add button card dialog
npm run dev
```

## Learn more

- [Bearnie Documentation](https://bearnie.dev/docs)
- [Theme Builder](https://bearnie.dev/create-bearnie-theme)
- [Browse Components](https://bearnie.dev/docs/components)
- [GitHub](https://github.com/michael-andreuzza/bearnie)
