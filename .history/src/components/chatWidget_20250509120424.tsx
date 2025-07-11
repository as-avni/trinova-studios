"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

export default function ChatWidget() {
const [isOpen, setIsOpen] = useState(false);
const [showPopup, setShowPopup] = useState(true);
useEffect(() => {
  if (!showPopup) {
    const timer = setTimeout(() => setShowPopup(true), 30000); // 10 seconds
    return () => clearTimeout(timer);
  }
}, [showPopup]);
const [messages, setMessages] = useState([
    {
    from: "bot",
    text: "Hi 👋 have a look around & let us know if you have any question",
    },
]);
const [input, setInput] = useState("");

const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages([...messages, userMessage]);
    setInput("");
    // Simulate a bot response for now
    setTimeout(() => {
    setMessages((prev) => [...prev, { from: "bot", text: "Thanks! We'll get back to you soon." }]);
    }, 1000);
};

return (
  <div className="fixed bottom-5 right-5 z-50 font-sans w-full max-w-sm rounded-3xl overflow-hidden shadow-xl">
    {(!isOpen && showPopup) && (
      <div className="relative flex flex-col items-end gap-2">
        <div className="bg-[#006CA6] text-white px-4 py-3 rounded-2xl w-80 shadow-xl flex items-start gap-3">
          <div className="flex-shrink-0 bg-white rounded-full p-1">
            <Image src="/images/chat-icon.png" alt="Bot" width={32} height={32} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-base">Aquastori Softner</h4>
              <X size={18} className="cursor-pointer" onClick={() => setShowPopup(false)} />
            </div>
            <p className="text-sm mt-1">
              Hi 👋 have a look around &amp; let us know if you have any question
            </p>
          </div>
        </div>
      </div>
    )}

    {isOpen && (
      <div className="w-full flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#0077b6] text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-white rounded-full p-1">
              <Image src="/images/chat-icon.png" alt="Bot" width={20} height={20} />
            </div>
            <span className="font-medium">Hi there! 👋</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-white">
            <X size={20} />
          </button>
        </div>

        {/* Status */}
        <div className="bg-[#00b4d8] bg-opacity-20 p-2 px-4">
          <div className="flex items-center gap-2 text-sm text-[#0077b6]">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span>We're online and ready to assist you!</span>
          </div>
        </div>

        {/* Messages */}
        <div className="p-4 h-64 overflow-y-auto">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 max-w-[80%] mb-3 ${msg.from === "user" ? "ml-auto justify-end" : ""}`}
            >
              {msg.from === "bot" && (
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-[#0077b6] rounded-full p-1 w-8 h-8 flex items-center justify-center">
                    <Image src="/images/chat-icon.png" alt="Bot" width={20} height={20} />
                  </div>
                </div>
              )}
              <div
                className={`p-3 rounded-2xl ${
                  msg.from === "bot" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-black"
                }`}
              >
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Write a message"
                className="w-full py-3 px-4 bg-gray-100 rounded-full outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
            </div>
            <button
              onClick={handleSend}
              className="bg-[#0077b6] text-white p-3 rounded-full flex items-center justify-center"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    )}

    <button
      onClick={() => setIsOpen(true)}
      className="rounded-full shadow-lg"
    >
      <Image
        src="/images/chat-icon.png"
        alt="Chat Icon"
        width={56}
        height={56}
        className="rounded-full hover:scale-105 transition-transform"
      />
    </button>
  </div>
);
}