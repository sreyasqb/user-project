import React,{useState} from 'react';
import AddUser from './components/AddUser'
import UserList from './components/UserList';

function App() {

  const [users,setUsers]=useState([]);
  
  const updateHandler = (data)=>{
    setUsers((prevData)=>{
      console.log([data,...prevData]);
      return [data,...prevData];
    });
    
  }

  return (
    <div>
      <AddUser onSubmit={updateHandler}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
