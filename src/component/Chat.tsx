import React from 'react'
import { UseMainContext, ChatType } from '../context'
import { assetData } from '../assets/asset-data'
const Chat = () => {
  const { userChat, scroll } = UseMainContext()

  return (
    <section className="section">
      {userChat?.map((val: ChatType, index) => {
        const { user, bot } = val
        return (
          <div
            onClick={() => console.log(bot)}
            key={index}
            className="flex-container"
          >
            <div className="user-message">
              <img src={assetData.userPhoto} />
              <p>{user}</p>
            </div>
            <div className="bot-message">
              <img src={assetData.botPhoto} />

              <p>{bot.text}</p>
            </div>
            <span ref={scroll} className="scroll-marker"></span>
          </div>
        )
      })}
    </section>
  )
}

export default Chat
