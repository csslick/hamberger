import Bun from './Bun'

export default function Hamberger(props) {
  const { slices, removeSlice } = props; // 
  console.log('slices: ', slices);

  return (
    <div className="hamburger">
      <Bun slice='top' />
      {
        slices.map((slice, key) => {
          return (
            <div
              key={key}
              onClick={() => { removeSlice(key) }}
            >{slice}</div>
          )
        })
      }
      <Bun slice='bottom' />
    </div>

  )
}
