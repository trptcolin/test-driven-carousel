import React from "react";

export default (Component, indexPropName) =>
  class ComponentWithIndex extends React.PureComponent {
    static displayName = `HasIndex(${Component.displayName || Component.name})`;

    state = {
      index: 0,
    };

    handleWrapping = (index, upperBound) => {
      if (upperBound) {
        return (index + upperBound) % upperBound;
      }
      return index;
    };

    handleDecrement = upperBound => {
      this.setState(({ index }) => ({
        index: this.handleWrapping(index - 1, upperBound),
      }));
    };

    handleIncrement = upperBound => {
      this.setState(({ index }) => ({
        index: this.handleWrapping(index + 1, upperBound),
      }));
    };

    render() {
      const indexProps = {
        [indexPropName]: this.state.index,
        [`${indexPropName}Decrement`]: this.handleDecrement,
        [`${indexPropName}Increment`]: this.handleIncrement,
      };
      return <Component {...this.props} {...indexProps} />;
    }
  };
