import React, { useEffect, useState } from "react";
import "./App.css";

import AlbumList from "./AlbumList";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // Load data from https://jsonplaceholder.typicode.com/albums?userId=${user.id}
  useEffect(
    () => {
      const original = document.title;
      document.title = "Awesome Album App"
      const abortController = new AbortController();
      //do work
      async function loadData(){
        try {
          const res = await fetch (
            "https://jsonplaceholder.typicode.com/users",
            { signal: abortController.signal }
            );
          const data = await res.json();
          setUsers(data);
        } catch (error) {
          if(error.name === "AbortError") {
            console.log("Aborted");
          } else {
            throw error;
          }
        }
      }
      loadData();
      return function cleanup() {
        abortController.abort();
        document.title = original;
      } 
    },[]);
  
  return (
    <div className="App">
      <div className="left column">
        <UserList users={users} setCurrentUser={setCurrentUser} />
      </div>
      <div className="right column">
        <AlbumList user={currentUser} />
      </div>
    </div>
  );
}

export default App;
