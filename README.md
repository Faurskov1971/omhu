# Assignment for Omhu - github API call
Try my updated solution (version 2) here: https://faurskov.com/omhu/

Get a list of profiles from github.
- When you text and submit a valid username, you will see it in a list with:
- - the users name
- - company
- - a link to his homepage or blog (if he got one)

## step 1 creating the application with Create-react-app, install TypeScript and design the app
Delete unused code/files.
Create a UI
Rename js-files to tsx (to invoke TypeScript) and run:
- npm i --save-dev @types/react
- npm i --save-dev @types/react-dom

I am using stateless components as recommended by Facebook.

### My Solution contains four components:

- App
- -> Form
- -> CardList -> Card

App
Apps responsibility is to handle data with its state. App contains the CardList and the Form-component.

This components state has information about the profiles and a function that adds new profiles to the state.

Form
- Forms responsibility is to add new Cards to the CardList. 
- Form uses the package axios to connect to the Github API. 
- Form also handles errors showing an alert-message when something goes wrong. 

- It might be a good idea to make a seperate component to handle the API-call to make the Form app simpler, but I have kept it this way to keep things simple.
- It would also be an improvement to prevent the App from showing the same profile more than one time. It also throw an error (because the same ID is used more than one time in the same list).


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
I am using style={{}} syntax instead of ex. normal stylesheet or styled-components to keep things simple and focus on logik in version 1.

This approch is good if I need to condision my styles.
In version 2 I am using Material UI - and that makes the UX so much better!



## Step 3 call the API and using testdata developing the App
npm install axios
I am installing and using the extern package axios to call the API. 

The connection to Github is inside the Form component.

Things to do better: 

- I get a lot of data that I don't need using the API with REST. If I could call it with GraphQL I might only receive the data I need (the users name, company, link and id), and not all the other stuff.
- Using REST I also need to call the API every time the list needs to show a new profile in the CardList - that is a lot of calls!


## Step 4 Identify The Minimal (but complete) Representation Of UI State and identify Where The State shall Live

The minimal UI State is an Array in the App-component with active profiles:
- const [profiles, setProfiles] = useState(startData);

And

The active username the User is writing in the input-field.
- const [username, setUsername] = useState('');

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
Runs a simple build-in testsystem in create-react-app

Installing Storybook
First I tried these commands
- npx -p @storybook/cli sb init
- npm run storybook

But got an error and had to install TypeScript again.

Then I found the documentation and used theese commands - and it worked fine:
- Add Storybook: npx sb init
- Starts Storybook in development mode npm run storybook

I also install reacts testing-library
- npm install --save-dev @testing-library/react

And took a course on Pluralsight about testing invironment. It all looks very interesting and the logik is easy to understand. 

I will look forward to become a test-wizard on the road :-)



# How the user experience (UX) could be improved
# Experience working with UI libraries (we use Material UI a lot)

- I have addet a favicon
- I have changed the title
- I have moved the description

- I have improved the user experience using Material UI
- The app is responsible (mobile friendly) because of the use of Material UI

## Project

Installing Material UI and icons

- npm install @material-ui/core
- npm install @material-ui/icons
    - or (import Button from '@material-ui/core/Button';)

Using the Roboto-font from google (public index.html)
- link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

## Form

I have changed 'button' to the 'Button' from material to make it look nicer.

-  onSubmit={handleSubmit}  —> onClick={handleSubmit}
- checking if the user has inserted a username before submitting (required only works with onSubmit)


(Actually read that 'required' can be used with a textfield in the Material UI documentation)

I have imported a person icon from Material UI and used it in the Button

- import PersonIcon from '@material-ui/icons/Person';
- startIcon={<PersonIcon />

(The Icon is seen before the text)

## App

I have inserted margins with  Material UI
- import Container from "@material-ui/core/Container";
- Inserted <Container></Container> the App.tsx-file

I have formatted a title with Typography
- import Typography from "@material-ui/core/Typography";


## Card
- import { makeStyles } from "@material-ui/core/styles";
I have imported makeStyles so I can make cleaner code by moving the CSS into a variable.

- import CardStyle from "@material-ui/core/Card";
- import CardContent from "@material-ui/core/CardContent";
- import CardMedia from "@material-ui/core/CardMedia";

I have imported these 3 core classes into the project to align the design.

I have a conditional style so there is only a “read more”-link displayed if the user has a blog or a homepage attached to his profile
- style={{display:person.blog ? 'block': 'none'}}


## CardList

I have inserted the cards in a grid
- import Grid from "@material-ui/core/Grid";

# Things to do better

- Remove to many 'any' types in TypeScript
- Prevent the user from calling the same profile twice (check if profiles allready have the username before calling the API)
- Give a good respons if the user doesn’t exist
- Delete a profile again (remove it from the state)
- If the user is no longer active with no image or other data - don't show it - but tell the user why


