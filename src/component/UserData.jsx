import React, { useEffect, useState } from 'react'

function UserData() {

    const [user,setUser] = useState([])

    const getData = () => {
        fetch("/data/user.json")
        .then((res) => res.json())
        .then((data) => {
            setUser(data);
        })
    }

    useEffect(() => {
        getData()
    },[])

  return (
    <center>
    <div>User information</div>
    <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
        </tr>
        {user && user.map((u) => {
            return(
            <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
            </tr>
            )
        })}
    </table>
    </center>
  )
}

export default UserData