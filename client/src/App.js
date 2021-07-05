import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './components/Header';
import CreateUser from './components/CreateUser';
import GetUsers from './components/GetUsers';

//styles
import './App.css';

function App() {
  return (
    <>
      <Header />
      <CreateUser />
      <GetUsers />
    </> 
  );
}

export default App;