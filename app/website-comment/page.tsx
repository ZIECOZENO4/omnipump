"use client"
import React, { useState } from 'react'
import { Modal, Button, Input, Textarea,ModalBody, ModalHeader, Avatar, Card, CardBody } from "@nextui-org/react"
import { useMediaQuery } from 'react-responsive'

interface Comment {
  id: number;
  user: string;
  address: string;
  message: string;
  avatar: string;
}

const comments: Comment[] = [
  { id: 1, user: 'Zieco', address: '0x1234...5678', message: 'Great website!', avatar: '/avatar1.jpg' },
  { id: 2, user: 'OZ', address: '0xabcd...efgh', message: 'Nice design!', avatar: '/avatar2.jpg' },
  // Add more comments as needed
]

export default function CommentComponent() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [nickname, setNickname] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null)
  
  const isMdOrLarger = useMediaQuery({ minWidth: 768 })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle comment submission logic here
    console.log('Submitted:', { nickname, message })
    setNickname('')
    setMessage('')
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
          input: "text-white",
          label: "text-white"
        }}
      />
      <Input
        label="Your address"
        value="0x1234...5678" // Replace with actual user address
        readOnly
        className="max-w-xs"
        variant="bordered"
        classNames={{
          input: "text-white",
          label: "text-white"
        }}
      />
      <Textarea
        label="Type your comment here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="max-w-xs"
        variant="bordered"
        classNames={{
          input: "text-white",
          label: "text-white"
        }}
      />
      <Button color="success" type="submit" className="w-full">
        Submit Comment
      </Button>
    </form>
  )

  const CommentList: React.FC = () => (
    <div className="space-y-4 mb-4">
      {comments.map((comment) => (
        <Card key={comment.id} isPressable onPress={() => setSelectedComment(comment)}>
          <CardBody className="flex flex-row items-center space-x-4">
            <Avatar src={comment.avatar} alt={comment.user} />
            <div>
              <p className="font-bold">{comment.user}</p>
              <p className="text-small text-default-500">{comment.address}</p>
              <p className="text-small">{comment.message}</p>
            </div>
          </CardBody>
        </Card>
      ))}
    </div>
  )

  return (
    <div className="p-4 text-white min-h-screen">
      {isMdOrLarger ? (
        <div className="flex space-x-8">
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Comments</h2>
            <CommentList />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">Add a Comment</h2>
            <CommentForm />
          </div>
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
            <ModalHeader className="text-white">Comment on Website</ModalHeader>
            <ModalBody>
              <CommentForm />
            </ModalBody>
          </Modal>
        </>
      )}

      <Modal 
        isOpen={!!selectedComment} 
        onClose={() => setSelectedComment(null)}
        className="bg-gray-800"
      >
        <ModalHeader className="text-white">{selectedComment?.user}'s Comment</ModalHeader>
        <ModalBody>
          <p className="text-white">{selectedComment?.message}</p>
        </ModalBody>
      </Modal>
    </div>
  )
}