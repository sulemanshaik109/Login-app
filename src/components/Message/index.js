// Write your code here
import './index.css'

const Message = props => {
  const {message} = props
  return <p className="message">{message}</p>
}

export default Message
