import React, { useState }  from 'react'
import axios from 'axios';

//styles
import { Form, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


const CreateUser = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
      
        const data = {
          name: name,
          surname: surname,
          email: email,
        }    

        axios.post('http://localhost:4000/users/new', data)
          .then(function (response) {
            setName('');
            setSurname('');
            setEmail('');
            console.log(response);
          })
          .catch(function (error) {
            alert('Posty went wrong!');
          });
    }

    return (
        <>
            <Form className='form' onSubmit={handleSubmit} autoComplete="false">
      <Row className='row'>
      <Col className='col' xs="auto">
      <Form.Control type='text' 
                    placeholder="Type your name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required />
        </Col>
        <Col className='col' xs="auto">
        <Form.Control type='text' 
                      placeholder="Type your surname"
                      value={surname}
                      onChange={e => setSurname(e.target.value)}
                      required />
        </Col>
        <Col className='col' xs="auto">
        <Form.Control type='text' 
                      placeholder="Type your email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required />
        </Col>
        </Row>
      </Form>

      <Button className='createBtn' onClick={handleSubmit} type='submit' variant='light' size='lg'>Create user!</Button>    
        </>
     
        
    );
}

export default CreateUser
