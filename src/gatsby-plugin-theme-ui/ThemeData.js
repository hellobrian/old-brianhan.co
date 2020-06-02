import React from 'react';
import { useThemeUI } from 'theme-ui';

export function ThemeData() {
  const context = useThemeUI();
  const { theme } = context;
  return (
    <pre>
      <code>{JSON.stringify(theme, null, 2)}</code>
    </pre>
  );
}
