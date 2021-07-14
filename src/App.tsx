import Form from './components/Form';
import CardList from './components/CardList';
import { useState } from 'react';

const startData:  Array<string> = [];

function App() {
  const [profiles, setProfiles] = useState(startData);
  const addNewProfile = (profileData: any) => {
    setProfiles([...profiles, profileData]);
  };
  return (
    <div>
      <Form onSubmit={addNewProfile} />
      <header>
        <p>
         Look up github profiles and get them listed with name, company and a profile image. Ex.:
        </p>
        <ul>
           <li>Faurskov1971</li>
           <li>kevinpelgrims</li>
         </ul>
        <CardList profiles={profiles} />
      </header>
    </div>
  );
}
export default App;