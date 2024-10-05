"use client";
import { useState } from "react";
import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";
import {
  Modal,
  Button,
  Input,
  Textarea,
  ModalBody,
  ModalHeader,
  Avatar,
  Card,
  CardBody,
  useDisclosure
} from "@nextui-org/react";

interface Comment {
  id: number;
  user: string;
  address: string;
  message: string;
  avatar: string;
}

type ChatMessage = {
  id: string;
  user: string;
  avatar: string;
  time: string;
  message: string;
  address: string;
};

const chatData: ChatMessage[] = [
  {
    id: "1",
    user: "ziecozeno4",
    address: "0xre...wer",
    avatar: "/placeholder-avatar.jpg",
    time: "Yesterday at 2:41 PM",
    message: "didnt get any voice from the video but i got the notes"
  },
  {
    id: "2",
    user: "oz",
    address: "0xre...wer",
    avatar: "/placeholder-avatar-2.jpg",
    time: "Yesterday at 4:42 PM",
    message: "can hear the voice here"
  },
  {
    id: "3",
    user: "ziecozeno4",
    address: "0xre...wer",
    avatar: "/placeholder-avatar.jpg",
    time: "Yesterday at 6:36 PM",
    message: "omohh\nthis slack is not just myside aswrr\njust headache"
  },
  {
    id: "4",
    user: "oz",
    address: "0xre...wer",
    avatar: "/placeholder-avatar-2.jpg",
    time: "Today at 11:33 AM",
    message: "lmao"
  }
];

export default function Component() {
  const [nickname, setNickname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted:", { nickname, message });
    setNickname("");
    setMessage("");
    onOpen(); // Open the success modal
  };

  const isFormComplete = nickname.trim() !== "" && message.trim() !== "";

  const renderChatList = () => (
    <ScrollShadow className="h-screen text-[#F7F2DA]">
      <div className="space-y-4 p-4">
        <h2 className="text-2xl font-bold mb-4">Recent Comments</h2>
        <hr className="border-gray-600" />
        {chatData.map((chat) => (
          <Link href="/comments" key={chat.id}>
            <Card className="w-full bg-black border-gray-700 hover:bg-gray-700 transition-colors duration-200 mb-4">
              <CardBody>
                <div className="flex items-center space-x-4">
                  <Avatar src={chat.avatar} alt={chat.user} className="w-12 h-12" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#F7F2DA] truncate">{chat.user}</p>
                    <p className="text-xs text-gray-400">{chat.time}</p>
                    <p className="mt-1 text-sm text-gray-300 truncate">{chat.message}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </ScrollShadow>
  );

  return (
    <div className="text-[#F7F2DA] min-h-screen">
      <div className="container mx-auto px-4 py-8 md:flex md:space-x-8">
        <div className="hidden md:block md:w-1/3 lg:w-1/4">
          {renderChatList()}
        </div>
        <div className="md:w-2/3 lg:w-3/4 mt-8 md:mt-10">
          <Card className="bg-black border border-slate-600 p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-center mb-6">What Do You Think?</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Your nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="bg-black text-[#F7F2DA] rounded border-white hover:border hover:border-green-500"
                variant="bordered"
              />
              <Input
                label="Your address"
                value="0x1234...5678"
                readOnly
                className="bg-black text-[#F7F2DA] file:rounded  border-white hover:border hover:border-green-500"
                variant="bordered"
              />
              <Textarea
                label="Type your comment here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-black text-[#F7F2DA] rounded border-white hover:border hover:border-green-500"
                variant="bordered"
              />
              <Button 
                color="success" 
                type="submit" 
                className="w-full"
                disabled={!isFormComplete}
              >
                Submit Comment
              </Button>
            </form>
          </Card>
        </div>
      </div>
      <Modal
        isOpen={!!selectedComment}
        onClose={() => setSelectedComment(null)}
        className="bg-black border border-gray-600"
      >
        <ModalHeader className="text-[#F7F2DA]">
          {selectedComment?.user}'s Comment
        </ModalHeader>
        <ModalBody>
          <p className="text-[#F7F2DA]">{selectedComment?.message}</p>
        </ModalBody>
      </Modal>
      <Modal 
        isOpen={isOpen} 
        onClose={onClose}
        className="bg-black border border-gray-600"
      >
        <ModalHeader className="text-[#F7F2DA]">Success</ModalHeader>
        <ModalBody>
          <p className="text-[#F7F2DA]">Comment sent successfully!</p>
        </ModalBody>
      </Modal>
    </div>
  );
}