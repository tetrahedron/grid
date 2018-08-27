import React, { Component, Children } from "react";
import PropTypes from "prop-types";

const defaultBreakpoints = {
  sm: [0, 500],
  md: [501, 768],
  lg: [769, 1100],
};

export default class Provider extends Component {
  static propTypes = {
    children: PropTypes.node,
    breakpoints: PropTypes.object,
    padding: PropTypes.string,
  };

  static contextTypes = {
    breakpoints: PropTypes.object,
    padding: PropTypes.string,
  };

  static childContextTypes = {
    breakpoints: PropTypes.object,
    padding: PropTypes.string,
  };

  getChildContext() {
    const {
      breakpoints: propsBreakpoints = {},
      padding: propsPadding,
    } = this.props;
    const {
      breakpoints: contextBreakpoints = {},
      padding: contextPadding,
    } = this.context;

    return {
      breakpoints: {
        ...defaultBreakpoints,
        ...contextBreakpoints,
        ...propsBreakpoints,
      },
      padding: propsPadding || contextPadding || "5px",
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export const withBreakpoints = WrappedComponent =>
  // eslint-disable-next-line react/no-multi-comp
  class GridProvider extends Component {
    // eslint-disable-line  react/prefer-stateless-function
    static contextTypes = {
      breakpoints: PropTypes.object,
      padding: PropTypes.string,
    };

    render() {
      const { breakpoints, padding } = this.context;

      return (
        <WrappedComponent
          {...this.props}
          breakpoints={breakpoints}
          padding={padding}
        />
      );
    }
  };
