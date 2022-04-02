# Usage

### Preview

Storybook preview is available at https://dialogues.pages.dev

### Installation

- Install peer dependencies
  `npm i -S styled-components@^5.3.5` (and `npm i -D @types/styled-components` if using typescript)
- Install package
  `npm i -S @dtdot/dialogues`

### Dialogue Context

Dialogues uses a context provider to render modals when requested by components deeper within your application. It's recommended to place this near the root of your application.

```jsx
import { DialoguesProvider } from '@dtdot/dialogues';

export default function MyApp() {
  return (
    <DialoguesProvider>
      <AppImplementation />
    </DialoguesProvider>
  );
}
```

### Theme Context

Dialogues uses `@dtdot/lego` under the hood. Lego requires a `styled-components` theme context to function, this instructs lego whether to render in dark or default themes. It's recommended to place this near the root of your application.

```jsx
import { DarkThemeProvider } from '@dtdot/lego';

export default function MyApp() {
  return (
    <DarkThemeProvider>
      <DialoguesProvider>
        <AppImplementation />
      </DialoguesProvider>
    </DarkThemeProvider>
  );
}
```

### Usage

After the above steps have been completed you're ready to start using dialogues. Access the dialogues via the provided context and `await` the results.

```jsx
import { useContext } from 'react';
import { DialoguesContext } from '@dtdot/dialogues';

export default function Example() {
  const { requestConfirmation } = useContext(DialoguesContext);

  const handleDelete = async () => {
    const confirmed = await requestConfirmation('Delete?', 'Are you sure you want to delete this example?');

    if (confirmed) {
      await doDelete();
    }
  }

  return <button onClick={handleDelete}>Delete</button>;
}
```

### Documentation

Dialogues uses storybook for documentation. This documentation is hosted at https://dialogues.pages.dev

# Contributing

## Storybook

Storybook is used both for testing as you develop and as living documentation. After cloning the repository you can run `npm start` at the root directory to host the documentation locally on port `6006`. Changes to the source will hot reload the documentation as you develop.
