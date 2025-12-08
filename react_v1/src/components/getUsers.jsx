import { useState, useEffect } from "react";
import styles from "./getUsers.module.css";

function getUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    }
 
    fetchUsers();
  }, []); // run once

  return (
    <div className={styles.card}>
      <h1>User List</h1>
      {users.map(user => (
        <div key={user.id} className={styles.userCard}>
            <p>{user.name} </p>
            <p> Email: {", "}{user.email} </p>
            <p> id: {user.id} </p>
            
            </div>
      ))}
    </div>
  );
}

export default getUsers;


