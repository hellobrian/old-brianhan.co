import BaseIcon from "./BaseIcon";

export default function MenuIcon({ width = 32, height = 32, ...props }) {
  return (
    <BaseIcon width={width} height={height} {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
    </BaseIcon>
  );
}
