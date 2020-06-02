import React from 'react';
import { Box, Grid, useThemeUI } from 'theme-ui';

export function RawJSON() {
  const context = useThemeUI();
  const { theme } = context;
  return (
    <pre>
      <code>{JSON.stringify(theme, null, 2)}</code>
    </pre>
  );
}

export function ColorTile({ children, bg, border = false }) {
  const context = useThemeUI();
  const { theme } = context;
  return (
    <Box>
      <Box
        sx={{
          bg,
          width: 128,
          height: 128,
          border: border ? `1px solid ${theme.colors.gray.core}` : 'none',
        }}
      />
      <Box as="span">{children}</Box>
    </Box>
  );
}

export function Primitives() {
  const context = useThemeUI();
  const { theme } = context;
  return (
    <Grid columns={4}>
      <ColorTile bg={theme.colors.white.core} border>
        white.core
      </ColorTile>
      <ColorTile bg={theme.colors.black.core}>black.core</ColorTile>
      <ColorTile bg={theme.colors.black.transparent}>
        black.transparent
      </ColorTile>
      <ColorTile bg={theme.colors.blue.core}>blue.core</ColorTile>
      <ColorTile bg={theme.colors.gray.core}>gray.core</ColorTile>
      <ColorTile bg={theme.colors.purple.core}>purple.core</ColorTile>
      <ColorTile bg={theme.colors.purple.light}>purple.light</ColorTile>
      <ColorTile bg={theme.colors.turquoise.core}>turquoise.core</ColorTile>
      <ColorTile bg={theme.colors.turquoise.light}>turquoise.light</ColorTile>
      <ColorTile bg={theme.colors.salmon.core}>salmon.core</ColorTile>
      <ColorTile bg={theme.colors.salmon.light}>salmon.light</ColorTile>
      <ColorTile bg={theme.colors.salmon.transparent}>
        salmon.transparent
      </ColorTile>
      <ColorTile bg={theme.colors.shadows.core}>shadows.core</ColorTile>
    </Grid>
  );
}

export function Semantics() {
  const context = useThemeUI();
  const { theme } = context;
  return (
    <Grid columns={4}>
      <ColorTile bg={theme.colors.background.body} border>
        background.body
      </ColorTile>
      <ColorTile bg={theme.colors.text.body} border>
        text.body
      </ColorTile>
    </Grid>
  );
}

export const Colors = {
  Semantics,
  Primitives,
};
