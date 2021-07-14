//import axios from "axios";
import { useState } from "react";
const Form = (props: any) => {
  const [username, setUsername] = useState('');
  const handleSubmit = async (event: any) => {
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Github Username"
        onChange={event => setUsername(event.target.value)}
        value={username}
        required
      />
      <button>Add Card</button>
    </form>
  )
}
export default Form;