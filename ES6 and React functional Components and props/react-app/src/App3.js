import React from 'react';
import PropTypes from 'prop-types';
import {names} from "./file2";

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
};

Welcome.propTypes = {
    name: PropTypes.string.isRequired
}

function WelcomePerson(props){
 return <h1>Hello, {props.person.firstName} {props.person.lastName}. At {props.person.email}</h1>;
};

WelcomePerson.propTypes = {
    person: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    })
}

function App() {
    
    return (
        <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
        <Welcome />
        <Welcome name={45} />       
        {names.map((person)=><WelcomePerson person= {person}/>)}

        </div>
    );
}
  
export default App;