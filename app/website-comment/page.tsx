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
  CardBody
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [nickname, setNickname] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [selectedComment, setSelectedComment] = useState<Comment | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Submitted:", { nickname, message });
    setNickname("");
    setMessage("");
  };
  const renderChatList = () => (
    <ScrollShadow className="h-screen text-[#F7F2DA]">
      <div className="space-y-4 p-4">
        <h2 className="text-2xl font-bold mb-4">Recent Comments</h2>
        <hr />
        {chatData.map((chat) => (
          <Link href="/comments">
            <div
              key={chat.id}
              className="w-full justify-start border border-green-500 hover:bg-green-600 hover:bg-opacity-30 text-left p-2 h-auto"
            >
              <div className="flex flex-row justify-between">
                <Avatar
                  src={chat.avatar}
                  alt={chat.user}
                  className="w-12 h-12 mr-3 m-2"
                />
                <div className="flex flex-col gap-2 p-2 overflow-hidden">
                  <div className="font-semibold">{chat.user}</div>
                  <div className="text-xs text-gray-400">{chat.address}</div>
                  <div className="text-xs text-gray-100 ml-2">{chat.time}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </ScrollShadow>
  );

  return (
    <div className=" border border-white text-[#F7F2DA]">
      <div className="hidden md:flex">
        <div className="w-64 border-r  border border-white">
          {renderChatList()}
        </div>
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Your nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              className="w-full"
              variant="bordered"
              classNames={{
                input: "text-slate-600",
                label: "text-[#F7F2DA]"
              }}
            />
            <Input
              label="Your address"
              value="0x1234...5678" // Replace with actual user address
              readOnly
              className="w-full"
              variant="bordered"
              classNames={{
                input: "text-slate-600",
                label: "text-[#F7F2DA]"
              }}
            />
            <Textarea
              label="Type your comment here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full"
              variant="bordered"
              classNames={{
                input: "text-slate-600",
                label: "text-[#F7F2DA]"
              }}
            />
            <Button color="success" type="submit" className="w-full">
              Submit Comment
            </Button>
          </form>
          <Modal
            isOpen={!!selectedComment}
            onClose={() => setSelectedComment(null)}
            className="bg-gray-800 border border-gray-600"
          >
            <ModalHeader className="text-slate-600">
              {selectedComment?.user}'s Comment
            </ModalHeader>
            <ModalBody>
              <p className="text-[#F7F2DA]">{selectedComment?.message}</p>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
}
