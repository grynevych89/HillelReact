import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="status error">
          Error: {this.state.error?.message ?? 'Something went wrong'}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
