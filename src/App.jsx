import { useState } from 'react'
import './App.css'
import FamilyCard from './components/FamilyCard';

function App() {
  const [family,setFamily] = useState([1,2,3]);

  function check(no){
    alert(`family member ${no} is clicked brother`)
  }

  return (
    <>
      {
        family.map((ele=>(
          <FamilyCard memberno={ele} clikerFunction = {check}/>
        )))
      }
    </>
  )
}

export default App