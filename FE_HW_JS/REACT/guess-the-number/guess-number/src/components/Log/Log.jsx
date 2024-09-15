import { useState } from 'react'
import './Log.css'

export default function Log({events}){
  return (
    <> 
      <ul className='logList'>
        <h2>Your attempts:</h2>
        {events.map((item, index) => {
          return (<li key={index}>Number - {item.guess}, result - {item.message}</li>)
        })}
      </ul>
    </>
  )
}