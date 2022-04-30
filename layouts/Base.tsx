import { useState } from "react";
import MenuButton from "components/MenuButton/MenuButton";
import BaseHead from "components/BaseHead";

export default function Base({ children }) {
  return (
    <>
      <MenuButton />
      <BaseHead />
      <main>{children}</main>
    </>
  );
}
