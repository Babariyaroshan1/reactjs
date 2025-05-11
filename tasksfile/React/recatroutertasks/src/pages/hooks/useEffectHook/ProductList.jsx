import React, { useEffect, useState } from 'react'

function ProductList() {


    const [users, setUsers] = useState([])

    useEffect(() => {
        // fetch data from API 

        fetch('https://fakestoreapi.com/users')
        .then(res => res.json())
        .then(data =>{
            setUsers(data)
        })
        .catch(err =>{
            console.log("Error : ", err);
            
        })
    
    }, [])
    



  return (
    <>

        <h2>User List</h2>

        <ul>
            {users.map(user =>(
                <li key={user.id}>
                {user.name.firstname} = {user.email} = {user.address.city}
                </li>
            ))}
        </ul>
       
    
    
    </>
  )
}

export default ProductList