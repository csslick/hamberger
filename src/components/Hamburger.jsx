import Bun from './Bun'

export default function Hamberger(props) {
  const slices = props.slices;
  console.log('slices: ', slices);
  return (
    <div className="hamburger">
      <Bun slice='top' />
      {
        slices.map((slice, key) => (
          <div key={key}>{slice}</div>
        ))
      }
      <Bun slice='bottom' />
    </div>

  )
}
