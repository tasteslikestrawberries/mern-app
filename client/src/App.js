import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './components/Header';
import CreateUser from './components/CreateUser';
import UsersTable from './components/UsersTable';

//styles
import './App.css';

function App() {
  return (
    <>
      <Header />
      <CreateUser />
      <UsersTable />
    </> 
  );
}

export default App;