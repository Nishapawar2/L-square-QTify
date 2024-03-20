import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Homepage';
import Albumpage from './pages/Albumpage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Homepage/>,
      },
      {
        path:"/album/:albumid",
        element:<Albumpage/>
      }
    ]
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>)
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
