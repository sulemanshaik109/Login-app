// Write your code here
import './index.css'

const Login = props => {
  const {name} = props
  return (
    <button type="button" className="button">
      {name}
    </button>
  )
}

export default Login
