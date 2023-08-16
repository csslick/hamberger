import { useState } from 'react'
import './App.scss'
import Hamburger from './components/Hamburger'
import Salad from './components/Salad'
import Tomato from './components/tomato'
import Cheese from './components/Cheese'
import Cutlet from './components/Cutlet'

function App() {
  const [slices, setSlices] = useState([])
  const addSlice = (slice) => {
    setSlices([slice, ...slices,]);
  }
  console.log(slices);

  return (
    <div className="App">
      <h1>Cooking a Hamburger</h1>
      <Hamburger slices={slices} />
      <div className="menu">
        <button onClick={()=>{addSlice(<Cutlet/>)}}>고기</button>
        <button onClick={()=>{addSlice(<Cheese/>)}}>치즈</button>
        <button onClick={()=>{addSlice(<Tomato/>)}}>토마토</button>
        <button onClick={()=>{addSlice(<Salad/>)}}>샐러드</button>
        <button onClick={()=>{setSlices([])}} className='btn-reset'>초기화</button>
      </div>
    </div>
  )
}

export default App
