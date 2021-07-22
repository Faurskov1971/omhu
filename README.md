# Assignment for Omhu - github API call
See the solution here: https://faurskov.com/omhu/

Get a list of profiles from github. When you text and submit a valid username, you will see it in a list with the users name, company and a link to his homepage or blog.

## step 1 creating the application with Create-react-app, install TypeScript and design the app
Delete unused code/files.
Create a UI
Rename js-files to tsx (to invoke TypeScript) and run:
- npm i --save-dev @types/react
- npm i --save-dev @types/react-dom

I am using stateless components as it is recommended by Facebook.

### My Solution contains four components:

App
-> Form
-> CardList
   -> Card

App
Apps responsibility is to handle data with its state. It contains the CardList and the Form-component.
This components state has information about the profiles and a function that adds new profiles to the state.

Form
- Forms responsibility is to add new Cards to the CardList. 
- Form uses the package axios to connect to the Github API. 
- Form also handles errors showing an alert-message when something went wrong. 

- It might be a good idea to make a seperate component to handle the API-call to make the Form app simpler, but I have kept it this way to keep it simple.
- It would also be an improvement to prevent the App two show the same profile more than one time. It also throw an error.


CardList
- CardLists responsibility is to show a list of active Cards.
- App (state) → CardList → Card

Card
- Cards responsibility is to show a persons name, blog and profile-image.
- The Card gets its information this way:
  App (state) → CardList → Card


All Components are seperated in their own files.

## Step 2 Build a static version of the Application in React
Styles
I am using style={{}} syntax instead of ex. normal stylesheet or styled-components to keep things simple and focus on logik.

This approch is good if I need to condision my styles.



## Step 3 call the API and using testdata developing the App
npm install axios
I am installing and using the extern package axios to call the API. The connection to Github is inside the Form component.




## Step 4 Identify The Minimal (but complete) Representation Of UI State and identify Where The State shall Live

The minimal UI State is an Array in the App-component with active profiles:
const [profiles, setProfiles] = useState(startData);
And
The active username the User is writing in the input-field.
const [username, setUsername] = useState('');

Testdata
I am using this testdata while testing the application. 
I found the data calling the github api.

const startData = [ 
{ 
name: "Brian Faurskov", 
avatar_url: "https://avatars.githubusercontent.com/u/17128138?v=4", 
company: "faurskov.com"
}, 
{ 
name: "Kevin Pelgrims", 
avatar_url: "https://avatars.githubusercontent.com/u/1175963?v=4", 
company: "Humu" 
},
]

I am using a hook called useState to handle the state.

## Step 5: Add Inverse Data Flow
- The function addNewProfile is drilled down from App → Form.
- Data is going the other way to update the Apps state (profiles) with setProfiles.

## Step 6: Different forms of testing
I tried to use the testing inviroment and installed Storybook and investegated JEST. 

- npm test
Runs a simple build in testsystem in create-react-app

Installerer Storybook
First I tried this commands
- npx -p @storybook/cli sb init
- npm run storybook
But got an error and had to install TypeScript again.
Then I found the documentation and used theese commands - and it worked fine:
- Add Storybook: npx sb init
- Starts Storybook in development mode npm run storybook

I also install reacts testing-library
- npm install --save-dev @testing-library/react

And took a course on Pluralsight about testing invironment. It all looks very interesting and the logik is easy to understand. I will look forward to become a test-wizard on the road :-)


