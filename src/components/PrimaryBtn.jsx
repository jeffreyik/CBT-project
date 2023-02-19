import ClipLoader from 'react-spinners/ClipLoader'

const PrimaryBtn = ({ text, handleClick, disabled }) => {
  return (
    <button disabled={disabled} style={{background: disabled ? '#555' : '#000'}} className='bg-primary text-white py-3 rounded-[10px] font-bold hover:bg-neutral-900' onClick={handleClick}>
        {disabled ? <ClipLoader color={'#fff'} size={20} /> : text }
    </button>
  )
}

export default PrimaryBtn