// Write your code here
import './index.css'

const Logout = props => {
  const {name} = props
  return (
    <button type="button" className="button">
      {name}
    </button>
  )
}

export default Logout
