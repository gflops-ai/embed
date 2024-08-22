import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#f03bf6';
export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="19px" style={{ fill: props.color ?? defaultButtonColor }} {...props}>
    <path d="M16 8a8 8 0 1 1-16 0 8 8 0 0 1 16 0zM8 4a.5.5 0 0 0-.5.5v4.793l-2.146-2.147a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.293V4.5A.5.5 0 0 0 8 4z" />
  </svg>
);
