const ProgressBar = ({ status }) => {
  return (
    <div style={{width: `${status}%`}} className={"progress-bar h-1 bg-greenStatus"}></div>
  )
}

export default ProgressBar