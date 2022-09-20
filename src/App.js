
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>All Data is Here</h1>
      <ExternalComments></ExternalComments>
    </div>
  );
}
function ExternalComments(){
  const [comments, setComments] = useState([])
  useEffect(()=>{
    const url=`https://jsonplaceholder.typicode.com/comments`;
    fetch(url)
    .then(res=> res.json())
    .then(data=>setComments(data) )
  },[])
  return(
    <div>
      <h1>External Comments</h1>
      <p></p>
      {
        comments.map(comment => <User name={comment.name} email={comment.email} body={comment.body.slice(1,200)}></User> )
      }
    </div>
  )
}



function User(props){
  return(
    <div className="comment">
      <h2>Name: {props.name}</h2>
      <h3>Email: {props.email}</h3>
      <p>{props.body}</p>
    </div>
  )
}
export default App;