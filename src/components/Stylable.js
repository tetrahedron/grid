import PropTypes from "prop-types";
import styled from "styled-components";

import { generateStyles } from "../helpers";

const Stylable = element => styled(element)(generateStyles);

Stylable.propTypes = {
  // CSS Properties
  padding: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  visibility: PropTypes.string,
  display: PropTypes.string,
  opacity: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  // Convenience Properties
  hidden: PropTypes.bool,
};

export default Stylable;
