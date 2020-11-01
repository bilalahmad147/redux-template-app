import React,{useEffect} from 'react'
import { fetchUsers } from './action';

function Users() {

    useEffect(() => {
       fetchUsers() 
    }, [])

    return (
        <div>
            <h1>Users</h1>
        </div>
    )
}

export default Users
