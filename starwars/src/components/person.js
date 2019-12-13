import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Person = props => {
  const [guys, setguys] = useState({});
  const people = [];

  const PeopleGrid = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  `;

  const PersonCard= styled.div`
    display: flex;
    background: transparent;
    width: 40%;
    margin: 3%;
    border: 2px solid black;
    justify-content: space-around;
  `;


  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/?page=${props.url}`)
      .then(res => {
        console.log(res);
        setguys(res.data.results);
      
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  // console.log(guys);
    if (guys.length > 0) {
      guys.forEach (guy => {
        people.push(
          <PersonCard>
            <h1>{guy.name}</h1>
            <div>
              <p>Eye Color: {guy.eye_color}</p>
              <p>Hair Color: {guy.hair_color}</p>
            </div>
            <div>
              <p>Mass: {guy.mass}</p>
              <p>Skin Color: {guy.skin_color}</p>
            </div>
          </PersonCard>
        );
      })
      // console.log("something")
    }
  
  return <PeopleGrid>
    {people}
  </PeopleGrid>;
};

export default Person;

