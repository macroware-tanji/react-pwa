import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, useNavigate } from 'react-router-dom'
import SWUpdateDialog from './SWUpdateDialog';

function AppWithNavigate(){
  const navigate = useNavigate()
  return (
    <App navigate = {navigate}/>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="react-pwa">
      <AppWithNavigate/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
//serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register({
  onUpdate: registration => {
    if (registration.waiting) {
      alert("onUpdate() registration")
      ReactDOM.render(<SWUpdateDialog registration={registration} />, document.querySelector('.SW-update-dialog'));
    }
  },
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
