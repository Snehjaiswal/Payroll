import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Css/index.css';
import App from './App';
import SideBar from './Admin/components/Sidebar/SideBar'
import { BrowserRouter , Route, Routes } from "react-router-dom";


ReactDOM.render(

   <BrowserRouter>
   
   <App />
   </BrowserRouter>
 
,  document.getElementById('root')
);
