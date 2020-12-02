import React, { Component } from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went horribly wrong 😢</h1>
          <p>But here's a picture of a cat</p>
          <img src="https://media1.tenor.com/images/48f68e5d4031eb204a18879f094d9413/tenor.gif?itemid=12701965" />
        </div>
      );
    }

    return this.props.children;
  }
}
