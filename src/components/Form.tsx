import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Button, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const useStyles:any = makeStyles({
  form: {
    marginBottom: "20px",
  },
});

const Form = (props: any) => {
  const [username, setUsername] = useState('');
  const classes = useStyles();
  const handleSubmit = async (event: any) => {
    if(username===''){
      alert("Please write a username");
      return false;
    }
    //To avoid refress on submit
    event.preventDefault()
    // username/state
    
//
const axios = require('axios');

// Make a request for a user with a given ID
axios.get(`https://api.github.com/users/${username}`)
.then(function (response:any) {
    // handle success
    props.onSubmit(response.data);
  })
  .catch(function (error:any) {
    // handle error
    alert(error);
  })
  .then(function () {
    // always executed
  });
    setUsername('');
  }
  return (
    <form className = {classes.form}>
      <TextField
        type        = "text"
        placeholder = "Github Username"
        onChange    = {event => setUsername(event.target.value)}
        value       = {username}
        required    = {true}
      ></TextField>
      <br /><br />
      <Button 
        onClick     = {handleSubmit} 
        color       = "primary" 
        variant     = "contained"
        startIcon   = {<PersonIcon />}
        >Add Card</Button>
    </form>
  )
}
export default Form;