import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProgressFilter from './provider/progress.provider'
import ProviderFilter from './provider/filter.provider'
import ProviderDone from './provider/provider.filterdone'

ReactDOM.render(
  <React.StrictMode>
    <ProviderDone>
    <ProviderFilter>
      <ProgressFilter>
        <App />
      </ProgressFilter>
    </ProviderFilter>
    </ProviderDone>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
