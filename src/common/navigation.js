// @flow
import React from 'react';
import type { Component } from 'react';

/* eslint-disable react/no-multi-comp */

export const mapNavigationStateParamsToProps = (
  SomeComponent: Component<any, any, any>
) => {
  class WrappedComponent extends React.Component {
    static navigationOptions: any;
    render() {
      const { navigation: { state: { params } } } = this.props;
      return <SomeComponent {...params} {...this.props} />;
    }
  }

  WrappedComponent.navigationOptions = SomeComponent.navigationOptions;
  return WrappedComponent;
};

export const mapScreenPropsToProps = SomeComponent => {
  class WrappedComponent extends React.Component {
    render() {
      const { screenProps, ...otherProps } = this.props;
      return <SomeComponent {...screenProps} {...otherProps} />;
    }
  }

  WrappedComponent.navigationOptions = SomeComponent.navigationOptions;
  return WrappedComponent;
};

/* eslint-enable react/no-multi-comp */
