import './App.css';
import Log from '../Log/Log';
import Message from '../Message/Message';
import { useState } from 'react';

let secretNumber = Math.floor(Math.random()*100)+1
const eventsList = []

export default function App() {
  const [numberUser, setNumberUser] = useState('')
  const [randomNum, setRandomNum] = useState(secretNumber)
  const [resultText, setResultText] = useState('')
  const [textButton, setTextButton] = useState('Check')
  const [loggingList, setLoggingList] = useState(eventsList)

  function handleChange(e){
    setNumberUser(e.target.value)
  }

  function handleClick(){
    let messageText = '';
    if(textButton != 'Start again'){
      if (numberUser < randomNum){
        setResultText('Less')
        messageText = 'Less'
      } else if( numberUser > randomNum){
        setResultText('More')
        messageText = 'More'
      } else {
        messageText = "You WIN!!!"
        setResultText("You WIN!!!")
        setTextButton('Start again')
      }
      setLoggingList([...loggingList, {guess: numberUser, message: messageText}])
    } else {
      setTextButton('Check')
      setRandomNum(Math.floor(Math.random()*100)+1)
      setResultText()
      setNumberUser('')
      setLoggingList([])
    }
    // eventsList.push({guess: numberUser, message: resultText})
  }

  function handleError(){
    setResultText('Wrong number!')
  }
  
  let messageBox = resultText ? <Message textMessage={resultText}/> : '';

  return (
    <div className="App">
      <h1 className="titleGame">Guess the number</h1>
      <input type="text" className="inputNum" value={numberUser} placeholder='Enter your number' onChange={handleChange} required/>
      <button className="checkBtn" onClick={+numberUser ? handleClick : handleError }>{textButton}</button>
      {messageBox}
      <Log events={loggingList} />
    </div>
  );
}