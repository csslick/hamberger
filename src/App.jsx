import { useState } from 'react'
import './App.scss'
import Hamburger from './components/Hamburger'
import Salad from './components/Salad'
import Tomato from './components/tomato'
import Cheese from './components/Cheese'
import Cutlet from './components/Cutlet'

// icons
import { LuBeef } from 'react-icons/lu'
import { BiCheese } from 'react-icons/bi'
import { GiTomato } from 'react-icons/gi'
import { LuSalad } from 'react-icons/lu'
import { GrPowerReset} from 'react-icons/gr'

function App() {
  const [slices, setSlices] = useState([])

  const addSlice = (slice) => {
    setSlices([slice, ...slices,]);
  }

  const removeSlice = (id) => {
    console.log(id);
    const updateSlice = slices.filter((slice, i) => {
      return i !== id;
    })
    setSlices(updateSlice);
  } 
  
  return (
    <div className="App">
      <h1>Cooking a Hamburger</h1>
      <Hamburger slices={slices} removeSlice={removeSlice} />
      <div className="menu">
        <button onClick={() => { addSlice(<Cutlet />) }}><LuBeef /></button>
        <button onClick={() => { addSlice(<Cheese />) }}><BiCheese /></button>
        <button onClick={() => { addSlice(<Tomato />) }}><GiTomato /></button>
        <button onClick={() => { addSlice(<Salad />) }}><LuSalad /></button>
        <button onClick={() => { setSlices([]) }} className='btn-reset'><GrPowerReset /></button>
      </div>
    </div>
  )
}

export default App
