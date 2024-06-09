import logo from './logo.svg';
import './App.css';
import MainDrawer from './MainDrawer';
import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";

function App() {
  return (
    <React.StrictMode>
    <ProSidebarProvider>
    <MainDrawer />
    </ProSidebarProvider>
  </React.StrictMode>
  );
}

export default App;
