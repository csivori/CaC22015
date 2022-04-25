import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './index.css';
import AppLogin from './AppLogin';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);
root.render(<AppLogin />);