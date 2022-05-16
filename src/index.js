import React from 'react';
import ReactDOM from 'react-dom/client';
import "jquery/dist/jquery.min.js";

import 'bootstrap/dist/js/bootstrap.bundle.min';

import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";


import './index.css';
import App from './App';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

