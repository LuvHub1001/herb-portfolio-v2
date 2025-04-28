import { Component } from "react";
import ErrorPage from "../../pages/ErrorPage";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(err) {
    return {
      hasError: true,
      error: err,
    };
  }

  componentDidCatch(err, errInfo) {
    console.log(`err :: ${err}`);
    console.log(`errInfo::${errInfo}`);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
