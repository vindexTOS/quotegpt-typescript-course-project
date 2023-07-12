import React from 'react'
import { TbSend } from 'react-icons/tb'
import { UseMainContext } from '../context'
const InputChat = () => {
  const { messageSend, userText, setUserText } = UseMainContext()
  return (
    <div className="container">
      <div className="inner-container">
        <input
          onKeyDown={(e) => e.key === 'Enter' && messageSend()}
          onChange={(e) => setUserText(e.target.value)}
          value={userText}
          className="input"
          placeholder="Talk"
        />

        <TbSend onClick={messageSend} className="icon" />
      </div>
    </div>
  )
}

export default InputChat
