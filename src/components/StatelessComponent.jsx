const StatelessComponent = ({
    title = 'Default Title',
    description = 'No description provided',
    items = [],
    status = 'inactive',
    author = 'Anonymous',
    date = new Date().toLocaleDateString()
}) => {

    const getStatusColor = (status) => {
        const colors = {
            active: '#28a745',
            pending: '#ffc107',
            completed: '#17a2b8',
            inactive: '#6c757d'
        };
        return colors[status] || colors.inactive;
    };

    const getStatusIcon = (status) => {
        const icons = {
            active: '✓',
            pending: '⏳',
            completed: '✔',
            inactive: '○'
        };
        return icons[status] || icons.inactive;
    };

    return (
        <div className="stateless-component">
            <h2>Stateless Component (props only, no state)</h2>

            <div className="card">
                <div className="card-header">
                    <div>
                        <h3>{title}</h3>
                        <p className="card-meta">By {author} • {date}</p>
                    </div>
                    <span
                        className="status-badge"
                        style={{ backgroundColor: getStatusColor(status) }}
                    >
                        {getStatusIcon(status)} {status}
                    </span>
                </div>

                <div className="card-body">
                    <p className="description">{description}</p>

                    {items.length > 0 && (
                        <div className="items-list">
                            <h4>Features ({items.length}):</h4>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        <span className="item-icon">✓</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {items.length === 0 && (
                        <p className="no-items">No items to display</p>
                    )}
                </div>

                <div className="card-footer">
                    <small>This is a stateless component - it only displays data from props</small>
                </div>
            </div>
        </div>
    );
};

export default StatelessComponent;