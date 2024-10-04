"use client"
import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, Button, Input, Textarea } from "@nextui-org/react"
import { useMediaQuery } from 'react-responsive'

interface Comment {
  id: number;
  user: string;
  address: string;
  message: string;
}

const CommentComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  
  const isMdOrLarger = useMediaQuery({ minWidth: 768 })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle comment submission logic here
    console.log('Submitted:', { nickname, message })
    setNickname('')
    setMessage('')
    setIsOpen(false)
  }

  const CommentForm: React.FC = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Your nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        className="max-w-xs"
        variant="bordered"
        classNames={{
          input: "text-[#F7F2DA]",
          label: "text-[#F7F2DA]"
        }}
      />
      <Textarea
        label="Type your comment here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="max-w-xs"
        variant="bordered"
        classNames={{
          input: "text-[#F7F2DA]",
          label: "text-[#F7F2DA]"
        }}
      />
      <Button color="success" type="submit" className="w-full">
        Submit Comment
      </Button>
    </form>
  )

  return (
    <div className="p-4 bg-black border border-white text-[#F7F2DA] min-h-screen">
             <style jsx global>{`
        input:focus,
        textarea:focus {
          outline: none;
          border-color: #4ae436 !important;
        }
      `}</style>
      {isMdOrLarger ? (
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold mb-4">Comment on Website</h2>
          <CommentForm />
        </div>
      ) : (
        <>
          <Button onPress={() => setIsOpen(true)} color="success">
            Comment on Website
          </Button>
          <Modal 
            isOpen={isOpen} 
            onClose={() => setIsOpen(false)}
            className="bg-gray-800"
          >
            <ModalHeader className="text-[#F7F2DA]">Comment on Website</ModalHeader>
            <ModalBody>
              <CommentForm />
            </ModalBody>
          </Modal>
        </>
      )}
    </div>
  )
}

export default CommentComponent