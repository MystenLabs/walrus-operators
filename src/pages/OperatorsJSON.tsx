// Add this component above the App component
import React from "react"

const OperatorsJSON: React.FC = () => {
    React.useEffect(() => {
        fetch('/operators.json')
            .then(response => response.json())
            .then(data => {
                // Serve the JSON data
                const jsonString = JSON.stringify(data, null, 2);
                const blob = new Blob([jsonString], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                
                // Create a link and trigger download
                const a = document.createElement('a');
                a.href = url;
                a.download = 'operators.json';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            });
    }, []);

    return null;
};

export const OperatorsJSON2: React.FC = () => {
    React.useEffect(() => {
        fetch('/operators.json')
            .then(response => response.json())
            .then(data => {
                // Set the content type to application/json
                document.documentElement.innerHTML = JSON.stringify(data, null, 2);
                // Use meta tag instead of trying to set contentType directly
                const meta = document.createElement('meta');
                meta.httpEquiv = 'Content-Type';
                meta.content = 'application/json';
                document.head.appendChild(meta);
            });
    }, []);

    return null;
};



export default OperatorsJSON;
