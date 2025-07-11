"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

export default function ChatWidget() {
const [isOpen, setIsOpen] = useState(false);
const [showPopup, setShowPopup] = useState(true);
useEffect(() => {
  if (!showPopup) {
    const timer = setTimeout(() => setShowPopup(true), 10000); // 10 seconds
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
    <div className="fixed bottom-5 right-5 z-50 font-sans">
    {!isOpen && showPopup && (
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

    {!isOpen && (
        <button onClick={() => setIsOpen(true)} className="rounded-full shadow-lg mt-2">
        <Image
            src="/images/chat-icon.png"
            alt="Chat Icon"
            width={56}
            height={56}
            className="rounded-full hover:scale-105 transition-transform"
        />
        </button>
    )}

    {isOpen && (
        <div className="bg-white border w-80 rounded-xl shadow-xl flex flex-col overflow-hidden">
        <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <div>
            <h4 className="font-bold text-sm">Hi there! 👋</h4>
            <p className="text-xs text-green-200">● We&apos;re online and ready to assist you!</p>
            </div>
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
        </div>

        <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-60 text-sm">
            {messages.map((msg, i) => (
            <div
                key={i}
                className={`p-2 rounded-md max-w-[80%] ${
                msg.from === "bot" ? "bg-gray-100 text-left" : "bg-blue-100 self-end text-right"
                }`}
            >
                {msg.text}
            </div>
            ))}
        </div>

        <div className="border-t p-2 flex items-center">
            <input
            type="text"
            className="flex-1 p-2 text-sm border rounded-md"
            placeholder="Write a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className="ml-2 text-blue-600">
            <Send size={18} />
            </button>
        </div>
        </div>
    )}
    </div>
);
}