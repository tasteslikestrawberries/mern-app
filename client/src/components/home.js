import React,  { useState, useReducer, useEffect } from 'react'
import axios from 'axios';

//styles
import { Form, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'


//icons
import { Icon } from '@iconify/react';
import accountDelete from '@iconify/icons-line-md/account-delete';

const Home = () => {

//useState  

//useReducer

//useEffect


  return (
    <>
    <Form className='form' onSubmit={handleSubmit} autoComplete="false">
      <Row className='row'>
        <Col className='col' xs="auto">
        <Form.Control type='text' 
                      placeholder="Type your name"
                      value={name}
                      onChange={e => setName(e.target.value)} />
        </Col>
        <Col className='col' xs="auto">
        <Form.Control type='text' 
                      placeholder="Type your surname"
                      value={surname}
                      onChange={e => setSurname(e.target.value)} />
        </Col>
        <Col className='col' xs="auto">
        <Form.Control type='text' 
                      placeholder="Type your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
        </Col>
      </Row>
    </Form>

    <span>*all fields are required</span>  

    <Button className='createBtn' onClick={handleSubmit} type='submit' variant='light' size='lg'>Create User!</Button> 

    <span>*reload page to view updated list</span>   

    <Table className='table' size='sm' striped bordered hover variant="dark">
      <thead>
        <tr>
            <th>#</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
      </thead>

      <tbody>
                    
 {  /*https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react
      get data from state: */}
 {
        users.map((user, index) => 
        <tr key={index}>
          <td>{index+1}.</td>
          <td>{user.name}</td>
          <td>{user.surname}</td>
          <td>{user.email}</td>
          <td><Button className='text-center' onClick={() => deleteUser(user._id)} variant='light' size='sm'><Icon icon={accountDelete} style={{color: 'red', fontSize: '16px'}} /></Button></td>
        </tr>)
 }

      </tbody>
    </Table>

  </>

  );
} 

export default Home


/* CHEATSHEET useReducer:

 const [state, dispatch] = useReducer(
    reducer,
    {count: initialCount}
  );

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        Reset
      </button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

*/