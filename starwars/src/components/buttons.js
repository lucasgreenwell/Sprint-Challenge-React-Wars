import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'reactstrap';
import styled from "styled-components"

const Buttons = () => {

    const Parent = styled.div`
        display: flex;
        justify-content: space-around;
    `;

    return (<Parent>
        <Button onClick={e => {
            console.log('clicked');
            
        }}>Previous</Button>

            <Button>Next</Button>
    </Parent>)
}

export default Buttons