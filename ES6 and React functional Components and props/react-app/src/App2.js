import React from 'react';
import person,{males,females} from "./file2";

const {firstName,email} = person

var personV2 = person
personV2.friends = [...males,...females]
personV2.phone = 123456

function App() {
  console.log([...males,...females]);

  console.log([...males,person.firstName,"Helle",...females,"Tina"])
  
  console.log(personV2)

  return (
    <div className="App">
      <p>{firstName}</p>
      <p>{email}</p>
    </div>
  );
  
  }  
  export default App;
  