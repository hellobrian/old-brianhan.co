type Props = {
  width?: number | string;
  height?: number | string;
  strokeWidth?: number | string;
  children: JSX.Element;
};

export default function BaseIcon({
  width = 32,
  height = 32,
  strokeWidth = 2,
  children = null,
  ...props
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 24 24`}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      width={width}
      height={height}
      {...props}
    >
      {children}
    </svg>
  );
}
