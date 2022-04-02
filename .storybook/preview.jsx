import { DarkThemeProvider } from "@dtdot/lego";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <DarkThemeProvider>
      <Story />
    </DarkThemeProvider>
  ),
];
