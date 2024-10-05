"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import Image from "next/image";
import { IntoList } from "./Steps";
import { CardContent } from "./CardContent";

interface WalletPopupProps {
  onClose: () => void;
}

export function WalletPopup({ onClose }: WalletPopupProps) {
  return (
    <div className="fixed align-middle items-center inset-0 bg-black bg-opacity-70 flex  justify-center z-50">
      <CardContainer className="inter-var">
        <CardBody className=" bg-black relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1]  border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-4 border">
     <CardContent />
          <div className="flex justify-between items-center mt-3 ">
            <CardItem
              translateZ={20}
              as="button"
              className="px-2 md:w-32 w-20  py-2 rounded-xl text-xs font-normal text-[#F7F2DA] bg-slate-800 "
              onClick={onClose}
            >
              Start Creating →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black hover:border-indigo-700 border-2  border-white  text-[#F7F2DA] text-xs font-bold"
              onClick={onClose}
            >
              Explore
            </CardItem>
  
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}