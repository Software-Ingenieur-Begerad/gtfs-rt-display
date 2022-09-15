import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
//TODO remove debugging
if (process.env.NODE_ENV !== 'production') {
    console.log('development mode');
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <React.StrictMode>
	<App tab="home" />
    </React.StrictMode>
);
