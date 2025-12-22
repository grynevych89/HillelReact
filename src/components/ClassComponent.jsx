import { Component } from 'react';

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isActive: false,
            message: '',
            logs: []
        };
    }

    componentDidMount() {
        this.addLog('Component mounted');
        this.setState({ message: 'Component is ready!' });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            this.addLog(`Count changed: ${prevState.count} → ${this.state.count}`);
        }
        if (prevState.isActive !== this.state.isActive) {
            this.addLog(`Status changed to: ${this.state.isActive ? 'Active' : 'Inactive'}`);
        }
    }

    componentWillUnmount() {
        console.log('Component will unmount');
    }

    addLog = (message) => {
        const timestamp = new Date().toLocaleTimeString();
        this.setState(prevState => ({
            logs: [`[${timestamp}] ${message}`, ...prevState.logs]
        }));
    };

    handleIncrement = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    handleDecrement = () => {
        this.setState(prevState => ({ count: prevState.count - 1 }));
    };

    handleReset = () => {
        this.setState({ count: 0 });
    };

    toggleActive = () => {
        this.setState(prevState => ({ isActive: !prevState.isActive }));
    };

    clearLogs = () => {
        this.setState({ logs: [] });
    };

    render() {
        const { count, isActive, message, logs } = this.state;

        return (
            <div className="class-component">
                <h2>Class Component (with lifecycle methods)</h2>

                <div className="class-content">
                    <div className="message-box">
                        <p className="message">{message}</p>
                    </div>

                    <div className="counter-section">
                        <h3>Counter</h3>
                        <div className="counter-display">
                            <span className="count-number">{count}</span>
                        </div>
                        <div className="counter-buttons">
                            <button className="btn btn-small" onClick={this.handleDecrement}>-</button>
                            <button className="btn btn-small btn-reset" onClick={this.handleReset}>Reset</button>
                            <button className="btn btn-small" onClick={this.handleIncrement}>+</button>
                        </div>
                    </div>

                    <div className="toggle-section">
                        <h3>Toggle Status</h3>
                        <button
                            className={`btn ${isActive ? 'btn-active' : 'btn-inactive'}`}
                            onClick={this.toggleActive}
                        >
                            {isActive ? '🟢 Active' : '🔴 Inactive'}
                        </button>
                    </div>

                    <div className="lifecycle-logs">
                        <div className="logs-header">
                            <h4>Lifecycle Logs ({logs.length})</h4>
                            {logs.length > 0 && (
                                <button className="btn-clear-logs" onClick={this.clearLogs}>
                                    Clear
                                </button>
                            )}
                        </div>
                        <div className="logs-container">
                            {logs.length === 0 ? (
                                <p className="no-logs">No logs yet...</p>
                            ) : (
                                logs.map((log, index) => (
                                    <div key={index} className="log-entry">{log}</div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="info-box">
                        <h4>Lifecycle Methods:</h4>
                        <ul>
                            <li>✓ <code>componentDidMount()</code> - initialization</li>
                            <li>✓ <code>componentDidUpdate()</code> - tracking changes</li>
                            <li>✓ <code>componentWillUnmount()</code> - cleanup</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ClassComponent;