import * as React from "react";

export default function FancyButton() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);
  return (
    <button type="button" onClick={increment}>
      {count}
    </button>
  );
}
