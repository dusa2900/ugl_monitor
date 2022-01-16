import React from 'react';

import './App.css';
import { DetailsListDocumentsExample } from './components/DetailsList';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { OptionalPara } from './components/OptionalPara';
import { Oscar } from './components/Oscar';
//import Button from './components/Button';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { StatusView } from './components/StatusView';
import { Box } from './Context/Box';
import { ThemeContextProvider } from './Context/ThemeContext';
import { Button } from './Event props/Button';
import { InputView } from './Event props/Input';
import { CountReducer } from './State/CountReducer';
import { LoggedIn } from './State/LoggedIn';
import { User } from './State/User';
import { UserLogin } from './State/Userlogin';
import { Container } from './Style-props/Container';
import { Monitor } from './task/Monitor';

function App() {

  const PersonData ={
    first:"Dusa",
    last:"Goutham"
  }

  const PersonListData = [
    {
      first: 'Dusa',
      last: "Goutham"
    },
    {
      first: "Rojja",
      last: "Rajamani"
    },
    {
      first: "Rojja11",
      last: "Rajamani1"
    }
    
  ]

  return (
    <div className="App">
   
      <header className="App-header">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

        <p>UseState:</p>
        <CountReducer/>
        <UserLogin/>
        <User/>
        <LoggedIn />
        <p>STyle props</p>
        <Container styles={{border:'2px solid green',padding:'2px'}}/>
      <p>Event Handler</p>
        <Button handleClick={ (event,id)=> {
          console.log('button clicked',event,id)
        }}/>
        <InputView value='' handleChange={(ev)=>console.log("input change",ev)}/>


        <Heading>welcome to Header section</Heading>
        <Oscar>
          <Heading>Parent-child communicating</Heading>
        </Oscar>
        <p>Optional parameter pass:</p>
        <OptionalPara name="India" isShowValid={true}/>
      {/* <Button/> */}
   <h1>Hello </h1>
   <Greet name="India" days={10} isShowValid={true}/>
   <Person bio={PersonData}/>
   <PersonList arr1={PersonListData}/>
   <StatusView status="success"/>
   
      </header>
    </div>
  );
}

function App1()
{
  return(
<div className="App">
      <header className="App-header">
        <Monitor/>
        {/* <DetailsListDocumentsExample/> */}
     </header>
     </div>
  )
}
export default App1;
