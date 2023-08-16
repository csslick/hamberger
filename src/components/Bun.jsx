import bunTop from '../assets/images/bun-top.png'
import bunBottom from '../assets/images/bun-bottom.png'

export default function Bun(props) {
  const slice = props.slice;
  
  return (
    <div className='slice'>
      {
        slice === 'top' ?
          <img src={bunTop} alt="bun top" /> :
          <img src={bunBottom} alt="bun bottom" /> 
      }
    </div>
  )
}
