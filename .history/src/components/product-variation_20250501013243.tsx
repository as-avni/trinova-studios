"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function ProductVariation() {
  const [activeTab, setActiveTab] = useState("AS3")

  return (
    <section className="w-full bg-[#F5FAFE] py-16 md:py-24 fn">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center fade-in">
          <h2 className="mb-2 text-xl font-medium text-[#0078AA]">Modal Variation</h2>
          <h1 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">One Solution, Multiple Options</h1>
          <p className="mx-auto max-w-3xl text-gray-700 md:text-lg">
            Browse models by type and take home the perfect water softener for your <br/>family.
          </p>
        </div>

        <div className="mx-auto mb-8 flex justify-center space-x-4">
          <button
            onClick={() => setActiveTab("AS3")}
            className={`rounded-md px-6 py-2 transition-all ${
              activeTab === "AS3" ? "bg-[#FF7A45] text-white shadow-md" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            AS3
          </button>
          <button
            onClick={() => setActiveTab("AS6")}
            className={`rounded-md px-6 py-2 transition-all ${
              activeTab === "AS6" ? "bg-[#FF7A45] text-white shadow-md" : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            AS6
          </button>
        </div>

        <div className="mx-auto mb-8 max-w-md">
          <div className="relative">
            <select
              className="w-full appearance-none rounded-md border border-gray-200 bg-white p-3 pr-10 text-gray-700 transition-all focus:border-[#0078AA] focus:outline-none focus:ring-1 focus:ring-[#0078AA]"
              defaultValue=""
            >
              <option value="" disabled>
                Category
              </option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
              <option value="industrial">Industrial</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
              <ChevronDown className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="overflow-hidden rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src="/assets/softner.png"
                  alt="Water softener product"
                  width={200}
                  height={300}
                  className="h-96 w-80 transition-transform hover:scale-105"
                />
              </div>
              <div className="mb-2 text-lg font-semibold">Product name</div>
              <div className="mb-4 text-lg font-semibold">₹ 7684</div>
              <button className="w-full rounded-md bg-[#FF7A45] py-3 text-white transition-all hover:bg-[#FF7A45]/90 hover:shadow-md">
                Get inquiry
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
