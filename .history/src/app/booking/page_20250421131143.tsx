import BookingForm from "@/components/booking-form"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-[#004040] text-white p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-yellow-400 font-serif">
            Tathastu<span className="block -mt-1">Pench</span>
          </div>
        </div>
        <div className="text-sm bg-[#333] px-4 py-2 rounded">
          To exit full screen, press and hold <kbd className="px-2 py-1 bg-gray-700 rounded">Esc</kbd>
        </div>
      </header>
      <BookingForm />
      <footer className="bg-[#004040] text-white p-4 text-center">
        <div className="container mx-auto">
          <div className="font-bold text-xl mb-2">Tathastu Pench</div>
          <p className="text-sm mb-2">
            Village Village Awarghani, Near Turia Gate, Pench Tiger Reserve, District: Seoni, Madhya Pradesh - 480881
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <a href="#" className="hover:underline">
              Manage Booking
            </a>{" "}
            |
            <a href="#" className="hover:underline">
              Reservation Policy
            </a>{" "}
            |
            <a href="#" className="hover:underline">
              Powered by Simplotel
            </a>
          </div>
          <div className="mt-2 text-sm flex justify-center items-center gap-4">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 9765550607
            </div>{" "}
            |
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              +91 8349992727
            </div>{" "}
            |
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              frontdesk.pench@tathasturesorts.com
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
