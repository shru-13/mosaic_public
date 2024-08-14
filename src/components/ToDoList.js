import React, { useEffect, useState } from 'react';

const ResourceFetcher = () => {
    const [resourceType, setResourceType] = useState('todos');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, [resourceType]);

    const renderData = () => {
        if (!data) return null;

        return data.slice(0, 5).map((item) => (
            <div key={item.id} style={{ marginBottom: '10px' }}>
                <pre>{JSON.stringify(item, null, 2)}</pre>
            </div>
        ));
    };

    return (
        <div>
            <h1>Fetch Data from JSONPlaceholder</h1>
            <div style={{ marginBottom: '20px' }}>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
                <button onClick={() => setResourceType('albums')}>Albums</button>
                <button onClick={() => setResourceType('photos')}>Photos</button>
                <button onClick={() => setResourceType('todos')}>Todos</button>
                <button onClick={() => setResourceType('users')}>Users</button>
            </div>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {!loading && !error && renderData()}
        </div>
    );
};

export default ResourceFetcher;
