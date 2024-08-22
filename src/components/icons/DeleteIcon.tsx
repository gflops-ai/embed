import { JSX } from 'solid-js/jsx-runtime';
const defaultButtonColor = '#3B81F6';
export const DeleteIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill={props.color ?? defaultButtonColor} {...props}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8 3C10.7614 3 13 5.23857 13 8C13 10.7614 10.7614 13 8 13C5.23858 13 3 10.7614 3 8C3 7.25457 3.1628 6.54852 3.45431 5.91433C3.56963 5.66343 3.45973 5.36654 3.20882 5.25121C2.95792 5.13588 2.66102 5.24578 2.54569 5.49669C2.19519 6.25923 2 7.1075 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2V3Z"
    />
    <path d="M8 4.46624V0.533757C8 0.321798 7.75279 0.206009 7.58995 0.341702L5.23047 2.30794C5.11053 2.40789 5.11053 2.5921 5.23047 2.69205L7.58995 4.65829C7.75279 4.79399 8 4.6782 8 4.46624Z" />
  </svg>
);

// import { JSX } from 'solid-js/jsx-runtime';
// const defaultButtonColor = '#3B81F6';
// export const DeleteIcon = (props: JSX.SvgSVGAttributes<SVGSVGElement>) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     class="icon icon-tabler icon-tabler-refresh"
//     width="24"
//     height="24"
//     viewBox="0 0 24 24"
//     stroke-width="2"
//     stroke={props.color ?? defaultButtonColor}
//     fill="none"
//     stroke-linecap="round"
//     stroke-linejoin="round"
//   >
//     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//     <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
//     <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
//   </svg>
// );
