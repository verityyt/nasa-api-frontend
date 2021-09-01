import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"

import AppComponent from "./components/App/App";

ReactDOM.render(
    <React.StrictMode>
        <AppComponent />
    </React.StrictMode>,
    document.getElementById('root')
);