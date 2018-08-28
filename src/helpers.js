import { css } from "styled-components";
import { utils } from "@tetrahedron/core";

export const drawDebug = () => [
  "background: rgba(0, 255, 255, 0.1);",
  "border: 1px dashed rgba(255, 0, 255, 1);",
];

export const breakpoints = props => {
  if (!props.breakpoints) return null;

  return Object.keys(props.breakpoints).map(
    id =>
      props[id] && [
        css`
          @media (min-width: ${props.breakpoints[
              id
            ][0]}px) and (max-width: ${props.breakpoints[id][1]}px) {
            ${utils.generateStyles(props[id])};
          }
        `,
      ]
  );
};

const translations = {
  direction: {
    horizontal: "row",
    vertical: "column",
  },
  wrap: {
    true: "wrap",
    1: "wrap",
    false: "nowrap",
    0: "nowrap",
  },
  align: {
    top: "flex-start",
    left: "flex-start",
    bottom: "flex-end",
    right: "flex-end",
    center: "center",
    middle: "center",
  },
};

export const flex = ({
  flex,
  fill,
  direction,
  wrap,
  valign,
  halign,
  shiftLeft,
  shiftRight,
  shiftUp,
  shiftDown,
}) => {
  const props = [];
  if (flex) props.push(`flex: ${flex};`);
  if (fill) props.push(`flex: 1 1 auto;`);
  if (direction)
    props.push(`flex-direction: ${translations.direction[direction]};`);
  if (wrap) props.push(`flex-wrap: ${translations.wrap[wrap]};`);

  if (halign) {
    if (direction === "horizontal")
      props.push(`justify-content: ${translations.align[halign]};`);
    else props.push(`align-items: ${translations.align[halign]};`);
  }

  if (valign) {
    if (direction === "horizontal")
      props.push(`align-items: ${translations.align[valign]};`);
    else props.push(`justify-content: ${translations.align[valign]};`);
  }

  if (shiftLeft) props.push("margin-right: auto;");
  if (shiftRight) props.push("margin-left: auto;");
  if (shiftUp) props.push("margin-bottom: auto;");
  if (shiftDown) props.push("margin-top: auto;");

  return props;
};
