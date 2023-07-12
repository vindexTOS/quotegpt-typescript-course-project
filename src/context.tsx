import { createContext, useContext, useEffect, useState, useRef } from 'react'
import axios from 'axios'

type QuoteType = {
  text: string
  author?: string
}
export type ChatType = {
  bot: QuoteType
  user: string
}
type Cell = {
  userChat: ChatType[]
  setUserChat: React.Dispatch<React.SetStateAction<ChatType[]>>
  userText: string
  setUserText: React.Dispatch<React.SetStateAction<string>>
  messageSend: () => void
  bot: QuoteType | undefined
  scroll: React.MutableRefObject<HTMLElement | null>
}

const Context = createContext<Cell | null>(null)

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const scroll = useRef<HTMLElement | null>(null)
  const [userChat, setUserChat] = useState<ChatType[]>([])
  const [userText, setUserText] = useState('')

  const [bot, setBot] = useState<QuoteType>()
  const quoteAPI = 'https://type.fit/api/quotes'

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * 100)
    axios
      .get(quoteAPI)
      .then((res) => {
        setBot(res.data[randomNum])
      })
      .catch(function (error) {
        console.error(error)
      })
    console.log(bot)
  }, [scroll])
  const messageSend = () => {
    if (userText !== '') {
      setUserChat([
        ...userChat,
        { user: userText, bot: { text: bot?.text || 'no connection' } },
      ])
      setUserText('')
    }
  }
  useEffect(() => {
    if (scroll.current) {
      scroll.current.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [userChat])
  return (
    <Context.Provider
      value={{
        userChat,
        setUserChat,
        userText,
        setUserText,
        messageSend,
        bot,
        scroll,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const UseMainContext = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('Not Wrapped')
  }
  return context
}
