## Verisart Take Home Test

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- I used the Shadcn UI library to save time on building the UI components, but instead did a lot of experiementing with their new components and learning how to use them.
- Missing responsive Card components
- Missing toast notificaitons for adding and removing certificates
- BUG: zod form validation error, had to use a workaround to get the form to submit
- Resizable component, should be used to ilustrate user certificate images but also access them.

## Self Assessment

- Time mismanagement, I spent too much time on the UI and not enough on the functionality. Total time spent was circa 3 hours, but of that allocation I spent only about 45 minutes on the functionality.
- I would have simplifyed my workload by not using SSR and instead opted for a simple SPA. (clashes with the UI library)
- Was hesitant on the direction of the UX as I was not sure Users would have only a few or many certificates, this would impact the UI massively. I opted for the few certificates use case.
