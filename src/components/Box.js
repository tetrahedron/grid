import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { Stylable } from "@tetrahedron/core";

import { flex, drawDebug, breakpoints } from "../helpers";
import { withBreakpoints } from "./GridProvider";

const Box = styled(Stylable("div"))`
  ${props => props.fluid && "padding: 0;"} box-sizing: border-box;
  ${props => props.debug && drawDebug()};
  ${props => flex(props)};
  ${props => breakpoints(props)};
`;

Box.propTypes = {
  // Debug Properties
  debug: PropTypes.bool,
  // Flex-specific Properties
  flex: PropTypes.bool,
  fill: PropTypes.bool,
  fluid: PropTypes.bool,
  shiftRight: PropTypes.bool,
  shiftLeft: PropTypes.bool,
  shiftUp: PropTypes.bool,
  shiftDown: PropTypes.bool,
};

Box.defaultProps = {
  debug: false,
  fill: false,
};

export default withBreakpoints(Box);
