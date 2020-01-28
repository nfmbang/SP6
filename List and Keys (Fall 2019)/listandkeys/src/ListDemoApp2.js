import React, {useState} from "react";
 
function MemberTable({ members }) {
  return (
    <table>
        <thead ><tr>{Object.keys(members[0]).map(key=><th key={key.toString()}>{key}</th>)}</tr></thead>
        <tbody>
            {members.map((row,index)=><tr key={index.toString()}><td>{row.name}</td><td>{row.age}</td></tr>)}
        </tbody>
    </table>
  );
}
 
function MemberDemo(props) {
  return (
    <div>
      <h4>All Members</h4>
      <MemberTable members={props.members}/>
    </div>
  );
}
 
export default function App() {
  const initialMembers = [{name : "Peter", age: 18},
                          {name : "Jan", age: 35},
                          {name : "Janne", age: 25},
                          {name : "Martin", age: 22}];
  const [members,setMembers] = useState(initialMembers)
  
  return (<MemberDemo members={members} />);
}
