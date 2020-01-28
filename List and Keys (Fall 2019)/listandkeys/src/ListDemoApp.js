import React, { useState } from "react";
 
function ListItem(props){
  return <li>{props.value}</li>
}

function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map(n => <ListItem key = {n.toString()} value = {n} />);
  return  listItems ;
}

function TableItem(props){
  return (
  <tr>
    <td>{props.value}</td>
  </tr>
  );}

function NumberTable({numbers}){
  const tableRows = numbers.map(n=><TableItem key = {n.toString()} value = {n}/>);
  return (
  <table >
    <tbody>    
      <tr>
        <th>numbers</th>
      </tr>
      {tableRows}
    </tbody>
  </table>
  );}

function ListDemo(props) {
  console.log(props.numbers)
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}

function TableDemo(props){
  return(
    <div>
      <h2>table test via props</h2>
      <NumberTable numbers = {props.numbers}/>
    </div>
  )
}

export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  //return <ListDemo numbers={numbers} />;
  return <TableDemo numbers={numbers}/>;
}
