import { createContext, useContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'
type Cell = {}

const Context = createContext<Cell | null>(null)

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const scroll = useRef(null)
  const [userChat, setUserChat] = useState([])
  const [userText, setUserText] = useState('')

  const [bot, setBot] = useState(['Hi, Ask Me About Dog Facts'])
  const [ban, setBan] = useState(false)
  const quoteAPI = 'https://type.fit/api/quotes'

  useEffect(() => {
    const data = axios
      .get(quoteAPI)
      .then((res) => {
        setBot(res.data)
      })
      .catch(function (error) {
        console.error(error)
      })
    //after
    console.log(bot)
  }, [userText])
  //   const messageSend = () => {
  //     if (userText !== '') {
  //       setUserChat([...userChat, { text: userText, bot: bot?.facts }])
  //       setUserText('')
  //     }
  //     scroll.current.scrollIntoView({
  //       behavior: 'smooth',
  //     })
  //   }
  return <Context.Provider value={{ userChat }}>{children}</Context.Provider>
}

export const UseMainContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Not Wrapped')
  }
  return context
}
