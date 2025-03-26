"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ChatIa() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [messages, setMessages] = useState([{ text: "¡Hola! ¿En qué puedo ayudarte?", isUser: false }])
  const messagesEndRef = useRef(null)
  const chatContainerRef = useRef(null)

  const toggleChat = () => {
    setIsExpanded(!isExpanded)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }])
      setInputValue("")
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: "Gracias por tu mensaje. Te responderé pronto.",
            isUser: false,
          },
        ])
      }, 1000)
    }
  }

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Container animation variants
  const containerVariants = {
    collapsed: {
      width: "auto",
      height: "auto",
      transition: {
        width: { duration: 0.3, ease: "easeInOut" },
        height: { duration: 0.3, ease: "easeInOut" },
      },
    },
    expanded: {
      width: "65%",
      height: "400px",
      transition: {
        width: { duration: 0.3, ease: "easeInOut" },
        height: { duration: 0.3, ease: "easeInOut" },
        when: "beforeChildren",
      },
    },
  }

  // Content animation variants
  const contentVariants = {
    hidden: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  }

  // Child element animation variants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  }

  return (
    <motion.div
      ref={chatContainerRef}
      variants={containerVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      className="fixed z-50 bottom-10 left-1/2 transform -translate-x-1/2 backdrop-blur-[14px] bg-[#0d0d0db3] border border-[#3e3e3e] rounded-4xl px-3 py-3 text-white w-full max-w-[90%] md:max-w-[65%] overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative flex justify-between items-center space-x-8"
          >
            <p className="text-white md:text-xl text-base ml-6">Sobre mi</p>
            <p className="text-[#ffffff6b] md:text-xl text-base">Mis proyectos</p>
            <div
              className="rounded-3xl bg-[#272727] p-4 flex justify-center items-center space-x-2 md:pl-6 cursor-pointer"
              onClick={toggleChat}
            >
              <p className="text-sm hidden md:block">Hablar con...</p>
              <div className="rounded-full w-10 h-10 bg-white flex justify-center items-center">
                <img src="/icon-send.png" alt="icon" />
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="expanded"
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col h-full"
          >
            <motion.div variants={itemVariants} className="flex justify-between items-center mb-3 px-2">
              <h3 className="text-lg font-medium">Chat</h3>
              <button onClick={toggleChat} className="rounded-full p-1 hover:bg-[#272727] transition-colors">
                X
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex-grow overflow-y-auto px-2 mb-3 h-[300px]">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`mb-3 ${msg.isUser ? "text-right" : "text-left"}`}
                >
                  <div
                    className={`inline-block px-3 py-2 rounded-2xl max-w-[80%] ${
                      msg.isUser ? "bg-[#272727] text-white" : "bg-[#3e3e3e] text-white"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </motion.div>

            <motion.form variants={itemVariants} onSubmit={handleSendMessage} className="mt-auto">
              <div className="flex items-center bg-[#272727] rounded-3xl px-4 py-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Escribe un mensaje..."
                  className="flex-grow bg-transparent outline-none text-white"
                />
                <button type="submit" className="ml-2 rounded-full w-8 h-8 bg-white flex justify-center items-center">
                  <span className="text-black text-xs">→</span>
                </button>
              </div>
            </motion.form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

