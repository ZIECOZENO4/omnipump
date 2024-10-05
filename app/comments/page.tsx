"use client"
import { useState } from 'react'
import { Avatar, Button, ScrollShadow } from "@nextui-org/react"
import { ChevronLeft } from "lucide-react"

type ChatMessage = {
  id: string
  user: string
  avatar: string
  time: string
  message: string
  address: string
}

const chatData: ChatMessage[] = [
  { id: '1', user: 'ziecozeno4', address: '0xre...wer', avatar: '/placeholder-avatar.jpg', time: 'Yesterday at 2:41 PM', message: "didnt get any voice from the video but i got the notes" },
  { id: '2', user: 'oz', address: '0xre...wer', avatar: '/placeholder-avatar-2.jpg', time: 'Yesterday at 4:42 PM', message: "can hear the voice here" },
  { id: '3', user: 'ziecozeno4', address: '0xre...wer', avatar: '/placeholder-avatar.jpg', time: 'Yesterday at 6:36 PM', message: "omohh\nthis slack is not just myside aswrr\njust headache" },
  { id: '4', user: 'oz', address: '0xre...wer', avatar: '/placeholder-avatar-2.jpg', time: 'Today at 11:33 AM', message: "lmao" },
]

export default function Component() {
  const [selectedChat, setSelectedChat] = useState<ChatMessage | null>(null)

  const renderChatList = () => (
    <ScrollShadow className="h-screen text-[#F7F2DA]">
      <div className="space-y-4 p-4">
        <h2 className="text-2xl font-bold mb-4">All Comments</h2>
        <hr />
        {chatData.map((chat) => (
          <Button
            key={chat.id}
            variant="bordered"
            className="w-full justify-start  text-left p-2 h-auto"
            onClick={() => setSelectedChat(chat)}
          >
            <div className="flex flex-row justify-between">
        
            <Avatar src={chat.avatar} alt={chat.user} className="w-12 h-12 mr-3 m-2" />
            <div className="flex flex-col gap-2 p-2 overflow-hidden">
              <div className="font-semibold">{chat.user}</div>
              <div className="text-xs text-gray-400">{chat.address}</div>
            <div className="text-xs text-gray-100 ml-2">{chat.time}</div>

            </div>
            </div>
     
          </Button>
        ))}
      </div>
    </ScrollShadow>
  )

  const renderChatDetail = () => (
    <div className="flex flex-col h-screen">
      <header className=" border border-white p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={() => setSelectedChat(null)} className="mr-4">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back to list</span>
        </Button>
        <Avatar src={selectedChat?.avatar} alt={selectedChat?.user} className="w-12 h-12 mr-4 m-2" />
        <div>
          <div className="text-xl md:text-2xl">{selectedChat?.user}</div>
          <div className="text-xs text-gray-400">{selectedChat?.address}</div>
          <div className="text-sm text-gray-400">{selectedChat?.time}</div>
        </div>
      </header>
      <ScrollShadow className="flex-1 p-4">
        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <Avatar src={selectedChat?.avatar} alt={selectedChat?.user} />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="font-bold">{selectedChat?.user}</span>
                <span className="text-gray-400 text-sm">{selectedChat?.time}</span>
              </div>
              <div className="text-xs text-gray-400 mb-1">{selectedChat?.address}</div>
              <p className="text-gray-300 whitespace-pre-line text-xl md:text-2xl mt-3">{selectedChat?.message}</p>
            </div>
          </div>
        </div>
      </ScrollShadow>
    </div>
  )

  return (
    <div className=" border border-white text-[#F7F2DA]">
      <div className="md:hidden">
        {selectedChat ? renderChatDetail() : renderChatList()}
      </div>
      <div className="hidden md:flex">
        <div className="w-64 border-r  border border-white">
          {renderChatList()}
        </div>
        <div className="flex-1">
          {selectedChat ? renderChatDetail() : (
            <div className="h-screen text-2xl flex items-center justify-center text-gray-400">
              Select a chat to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}