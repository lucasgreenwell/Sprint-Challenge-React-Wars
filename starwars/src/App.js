import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Person from "./components/person";
import { Button } from 'reactstrap';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [url, setUrl] = useState(1)

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const Buttons = () => {

    const Parent = styled.div`
        display: flex;
        justify-content: space-around;
    `;

    return (<Parent>
        <Button onClick={e => {
            // console.log('clicked');
            setUrl(url + 1);
        }}>Previous</Button>

            <Button>Next</Button>
    </Parent>)
}



  const Header = styled.h1`
    text-align: center;
    color: #443e3e;
    text-shadow: 1px 1px 5px #fff;
  `;

  return (
    <div className="App">
      <Header>React Wars</Header>
      <Person url={url}/>
      <Buttons/>
    </div>
  );
};

export default App;
