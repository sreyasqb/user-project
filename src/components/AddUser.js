import { useState } from "react";
import Card from "./Card";
import classes from "./AddUser.module.css";
import Button from "./Button";
import ErrorModal from "./ErrorModal";
const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error,setError] =useState();

  const nameHandler = (event) => {
    // console.log(event.target.value);
    setUsername(event.target.value);
  };
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0){
        setError({
            title:"Invalid Input",
            message:"Enter Non empty Value",
        })
        return;
    }
    if (+age < 1){
        setError({
            title:"Invalid Age",
            message:"Age cant be negative",
        })
        return;
    }
    props.onSubmit({
      key: Math.random().toString(),
      username: username,
      age: age,
    });

    setUsername("");
    setAge("");
  };

  const errorHandler=()=>{
      setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onClick={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={nameHandler}
            value={username}
          />
          <label htmlFor="age">Age (years)</label>
          <input id="age" type="number" onChange={ageHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
