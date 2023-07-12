import React from 'react'
import Header from './Header'
import Chat from './Chat'
import InputChat from './inputChat'
const Body = () => {
  return (
    <section className="bg-dark-color flex-container ">
      <Header />
      <Chat />
      <InputChat />
    </section>
  )
}

export default Body
