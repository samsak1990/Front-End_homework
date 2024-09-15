import './Message.css'

export default function Message({textMessage}){
  return (
    <div className="messageBox">
      <p>{textMessage}</p>
    </div>
  )
}