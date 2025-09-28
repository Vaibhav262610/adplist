"use client"

import { useParams } from "next/navigation"
import MentorData from "@/data/MentorData.json"
import { Heart, MessageCircle, MoreHorizontal } from "lucide-react"
import Image from "next/image"
import Sidebar from "@/components/Sidebar"

export default function MentorProfilePage() {
  const { id } = useParams()
  const mentor = MentorData[Number(id) - 1]

  if (!mentor) {
    return <p className=" flex h-screen w-full justify-center items-center text-4xl  text-red-500">Mentor not found.</p>
  }

  return (
    // <div className="p-10 max-w-3xl mx-auto">
    //   <div className="flex items-center gap-6">
    //     <img
    //       src={mentor.image}
    //       alt={mentor.name}
    //       className="w-32 h-32 rounded-full object-cover border"
    //     />
    //     <div>
    //       <h1 className="text-2xl font-bold">{mentor.name}</h1>
    //       <p className="text-gray-600">{mentor.role}</p>
    //       <p className="text-sm text-gray-400">{mentor.country}</p>
    //     </div>
    //   </div>

    //   <div className="mt-6 space-y-3">
    //     <p><strong>Experience:</strong> {mentor.experience}</p>
    //     <p><strong>Sessions:</strong> {mentor.sessions}</p>
    //     <p><strong>Reviews:</strong> {mentor.reviews}</p>
    //     <p><strong>Attendance:</strong> {mentor.attendance}</p>
    //     <p className="mt-4 text-gray-700">{"No bio available."}</p>
    //   </div>

    //   <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg">
    //     Book a Session
    //   </button>
    // </div>
    <>
        <div className=" fixed top-0 left-0 h-screen ">
            <Sidebar />
          </div>
        <div className="ml-32">
        {/* Banner */}
        <div className="w-full h-62 bg-[#206d6d] relative">
            {/* Profile Image */}
            <div className="absolute left-10 -bottom-40">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image  
                src={mentor.image}
                alt="Mentor"
                width={512}
                height={512}
                className="object-cover"
                />
            </div>
            </div>
        </div>

        {/* Content */}
        <div className=" flex py-10 justify-between items-start px-32">
            {/* Name + Role */}
            <div className="ml-46">
            <h1 className="text-3xl font-black">Priya Sharma</h1>
            <p className="text-gray-600 text-lg">Design Lead at McKinsey and Company</p>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
            <button className="p-2 cursor-pointer rounded-lg bg-white shadow hover:bg-gray-50">
                <MessageCircle className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 cursor-pointer rounded-lg bg-white shadow hover:bg-red-200">
                <Heart className="w-6 h-6 text-gray-600" />
            </button>
            <button className="p-2 cursor-pointer rounded-lg bg-white shadow hover:bg-gray-50">
                <MoreHorizontal className="w-6 h-6 text-gray-600" />
            </button>
            </div>
        </div>
        </div>
    </>
  )
}
