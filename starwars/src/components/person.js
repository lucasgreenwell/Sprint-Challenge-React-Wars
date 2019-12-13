import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Person = (props) => {

  const [guy, setGuy] = useState({});

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/${props.num}`)
      .then(res => {
        // console.log(res);
        setGuy(res.data);
        // console.log(guy);
      })
      .catch(err => {
        console.log(err);
      })
  }, [props.num])
  console.log(guy);

return (<div className="personCard">
  <h1>
    {guy.name}
  </h1>
    <p>
      {guy.birth_year}
    </p>
    <p>
      Eye Color: {guy.eye_color}
    </p>
    <p>
      Hair Color: {guy.hair_color}
    </p>
    <p>
      Mass: {guy.mass}
    </p>
    <p>
      Skin Color: {guy.skin_color}
    </p>
</div>)
};

export default Person;
