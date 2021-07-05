import React, { useState, useReducer, useEffect }  from 'react'
import axios from 'axios';

//styles
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const GetUsers = () => {
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
        






        
                </tbody>
            </Table>
        </>
    )
}

export default GetUsers