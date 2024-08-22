import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#f03bf6';
export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="19px" style={{ stroke: props.color ?? defaultButtonColor }} {...props}>
    <path d="M12 19V5m-7 7l7-7 7 7" />
  </svg>
);

//////////////////

// import { JSX } from 'solid-js/jsx-runtime';

// const defaultButtonColor = '#f03bf6';

// export const SendIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={props.width || '24'}
//     height={props.height || '24'}
//     viewBox="0 0 24 24"
//     // fill="none"
//     stroke={props.color || defaultButtonColor}
//     stroke-width="2"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//     {...props}
//   >
//     <path d="m5 12 7-7 7 7" />
//     <path d="M12 19V5" />
//   </svg>
// );
