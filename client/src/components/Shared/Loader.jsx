import { ClockLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    '
    >
      <ClockLoader color="#7C7472" />
    </div>
  )
}

export default Loader
