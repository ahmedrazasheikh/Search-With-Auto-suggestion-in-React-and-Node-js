import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
const App = () => {
  const [suggestions, setSuggestions] = useState([])
  const [users, setUsers] = useState([])
  const [text, setText] = useState('')

  useEffect(()=>{
const getData =  async  ()=>{
  const responce = await axios.get('https://reqres.in/api/users')
console.log(responce.data.data);
setUsers(responce.data.data)
}
getData()
  },[])

  const onChangeHandler= (text)=>{
    console.log(text);
    setText(text)
let matches = []
if (text.length > 0) {
  console.log(matches);
  matches = users.filter(user=>{
    const regex = new RegExp(`${text}`,"gi" )
    return user.email.match(regex)
  })
}  
// console.log(JSON.stringify(matches));
  console.log(matches);
setSuggestions(matches)




 
  }
  return (
    <div>
      <h1>Input  Search with AutoSuggection in React with Api</h1>
      <label>Search Here :</label>
  <input onChange={e =>onChangeHandler(e.target.value)}
  type={'text'}    value={text}     />
{suggestions && suggestions.map((suggestion , i )=>(
  <>
  <div     style={{"backgroundColor" : "royalblue", "fontSize" : "25px" , "border" : "1px solid black"  ,   "padding" : "10px " ,     "color" : "white" }  }  key={i} >{suggestion.email}</div>
  
  </>
)) }

  {/* {users.map((value)=><>
  <h1>{value.email}</h1>
  </>)}
<div>{text}</div> */}
    </div>
  )
}

export default App
