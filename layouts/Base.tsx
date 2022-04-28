import { useState } from "react";
import BaseHead from "components/BaseHead";
import MenuIcon from "components/Icons/MenuIcon";
import CloseIcon from "components/Icons/CloseIcon";

function MenuButton() {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);
  return (
    <button type="button" onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );
}

export default function Base({ children }) {
  return (
    <>
      <MenuButton />
      <BaseHead />
      <main>{children}</main>
    </>
  );
}
