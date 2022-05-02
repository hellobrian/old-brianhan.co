import { useState,  } from "react";

export default function useToggle(initialState = false) {
  const [isOpen, setOpen] = useState(initialState);
  const toggle = () => setOpen(!isOpen);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  const onOpen = (fn: () => {}) => {
    open()
    fn()
  }

  const onClose = (fn: () => {}) => {
    close()
    fn()
  }

  return { isOpen, toggle, open, close, onOpen, onClose };
}

