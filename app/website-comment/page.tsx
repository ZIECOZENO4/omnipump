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
        {chatData.map((chat) => (
          <Button
            key={chat.id}
            variant="ghost"
            className="w-full justify-start text-left"
            onClick={() => setSelectedChat(chat)}
          >
            <Avatar src={chat.avatar} alt={chat.user} className="w-10 h-10 mr-3" />
            <div className="flex-1 overflow-hidden">
              <div className="font-semibold">{chat.user}</div>
              <div className="text-xs text-gray-400">{chat.address}</div>
              <div className="text-sm text-gray-400 truncate">{chat.message}</div>
            </div>
            <div className="text-xs text-gray-500 ml-2">{chat.time}</div>
          </Button>
        ))}
      </div>
    </ScrollShadow>
  )

  const renderChatDetail = () => (
    <div className="flex flex-col h-screen">
      <header className="bg-black border border-white p-4 flex items-center">
        <Button variant="ghost" size="sm" onClick={() => setSelectedChat(null)} className="mr-2">
          <ChevronLeft className="h-6 w-6" />
          <span className="sr-only">Back to list</span>
        </Button>
        <Avatar src={selectedChat?.avatar} alt={selectedChat?.user} className="w-10 h-10 mr-3" />
        <div>
          <div className="font-semibold">{selectedChat?.user}</div>
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
              <p className="text-gray-300 whitespace-pre-line">{selectedChat?.message}</p>
            </div>
          </div>
        </div>
      </ScrollShadow>
    </div>
  )

  return (
    <div className="bg-black border border-white text-[#F7F2DA]">
      <div className="md:hidden">
        {selectedChat ? renderChatDetail() : renderChatList()}
      </div>
      <div className="hidden md:flex">
        <div className="w-64 border-r  border border-white">
          {renderChatList()}
        </div>
        <div className="flex-1">
          {selectedChat ? renderChatDetail() : (
            <div className="h-screen flex items-center justify-center text-gray-400">
              Select a chat to view details
            </div>
          )}
        </div>
      </div>
    </div>
  )
}