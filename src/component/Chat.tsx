import React from 'react'

const Chat = () => {
  return (
    <section className="h-[100vh] w-[100vw]  overflow-y-scroll    sticky top-0  scroll ">
      {userChat?.map((val, index) => {
        return (
          <div key={index} className="flex flex-col    ">
            <div className="flex items-center text-white    gap-5  min-h-[4rem]  max-h-[2000px]   w-[100vw]  ">
              <img
                src={dogPhoto.Dogimg}
                className="w-[30px] h-[30px] rounded-[8px]  max_sm:ml-1 ml-[6rem]"
              />
              <p>{val.text}</p>
            </div>
            <div className="flex items-center bg-[#444654] gap-5  min-h-[4rem] text-white  max-h-[2000px]   w-[100vw]  ">
              <img
                src={Dog}
                className="w-[30px] h-[30px] rounded-[8px]   max_sm:ml-1 ml-[6rem]"
              />
              <p>{val.bot}</p>
            </div>
            <span ref={scroll}></span>
          </div>
        )
      })}
    </section>
  )
}

export default Chat
