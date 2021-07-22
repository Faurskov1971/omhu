import Form from './components/Form';
import CardList from './components/CardList';
import { useState } from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
const startData:  Array<string> = [];

const useStyles:any = makeStyles({
  list: {
    fontSize: "16px",
    color:"rgba(0, 0, 0, 0.54)",
    marginTop:"40px",
  },
});

function App() {
  const [profiles, setProfiles] = useState(startData);
  const classes = useStyles();
  const addNewProfile = (profileData: any) => {
    setProfiles([...profiles, profileData]);
  };
  return (
    <div>
      <Container>
      <Typography 
        color                 = "textPrimary" 
        gutterBottom variant  = "h2" 
        align                 = "center"
      >
        Github Profiles
      </Typography>
      <Typography 
        color                 = "textSecondary" 
        align                 = "center"
      >
        Look up github profiles and get them listed with name, company and a profile image.
      </Typography>      
      <Form 
        onSubmit              = {addNewProfile} />
      <CardList 
        profiles              = {profiles} />
        <ul className = {classes.list}>
           <li>Faurskov1971</li>
           <li>kevinpelgrims</li>
         </ul>
      </Container>
    </div>
  );
}
export default App;