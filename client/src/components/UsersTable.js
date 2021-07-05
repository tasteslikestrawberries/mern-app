import React,  { useState, useEffect } from 'react'
import axios from 'axios';

//styles
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const UsersTable = () => {

    const [users, setUsers] = useState( [] );
    
    useEffect(() => {
        axios
        .get('http://localhost:4000/users/get')
        .then(response => {
            setUsers(response.data)
        })
        .catch(function (error) {
            alert('Getty went wrong!');
        });
    }, [])

    const deleteUser = (index) => {
        const user = users[index]
        console.log(user._id);
      
        axios
        .delete('http://localhost:4000/users/user', {data: {id: user._id}})
        .then((response) => {
            deleteUser(response.data)
        })
        .catch(function (error) {
            alert('Deletey went wrong!');
            console.log(error.response)
        });
    } 
    
    return (
        <>
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
                    <td><Button className='text-center' onClick={() => deleteUser(index)} variant='light' size='sm'>Delete</Button></td>
                </tr>)
 }

                </tbody>
            </Table>
        </>
    )
}

export default UsersTable