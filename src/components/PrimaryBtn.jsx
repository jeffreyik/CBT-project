const PrimaryBtn = ({ text, link }) => {
  return (
    <button className='bg-primary text-white py-3 rounded-[10px] font-bold hover:bg-neutral-900'>
        { text }
    </button>
  )
}

export default PrimaryBtn