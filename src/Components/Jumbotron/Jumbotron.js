import React from 'react';
import { Container, Image } from 'semantic-ui-react';

import './Jumbotron.css';

const Jumbotron = () =>{
   return (
        <Container className="jumbo-container">
            <Image className="jumbo-back" src="https://en.freejpg.com.ar/image-900/84/849a/F100022535-desert_dunes_without_people.jpg"/>
            <p className="jumbo-header jumbo-container-text">Stock Control System</p>
        </Container>
    )
};

export default Jumbotron;