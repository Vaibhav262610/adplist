"use client"

import { useAuth } from "@/context/AuthContext"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { FaPencil, FaRegCompass } from "react-icons/fa6"
import { GoHome } from "react-icons/go"
import { IoMdTime } from "react-icons/io"
import { LuBotMessageSquare } from "react-icons/lu"

const Sidebar = () => {
  const pathname = usePathname()
  const { session } = useAuth()

  return (
    <div className="bg-[#fafafa] flex flex-col justify-between text-xs px-8 h-screen w-fit">
      <div className="flex flex-col gap-4 py-28">
        <Link href="/">
          <h1
            className={`flex flex-col cursor-pointer ${
              pathname === "/" ? "bg-[#d7f7f2] text-[#147073]" : "text-black"
            } p-2 rounded-lg justify-center items-center gap-2`}
          >
            <GoHome className="font-light text-xl" /> home
          </h1>
        </Link>

        <Link href="/explore">
          <h1
            className={`flex flex-col cursor-pointer ${
              pathname === "/explore"
                ? "bg-[#d7f7f2] text-[#147073]"
                : "text-black"
            } p-2 rounded-lg justify-center items-center gap-2`}
          >
            <FaRegCompass className="font-light text-xl" /> Explore
          </h1>
        </Link>

        <h1
          className={`flex flex-col cursor-pointer ${
            pathname === "/journal"
              ? "bg-[#d7f7f2] text-[#147073]"
              : "text-black"
          } p-2 rounded-lg justify-center items-center gap-2`}
        >
          <FaPencil className="font-light text-xl" /> Journal
        </h1>

        {session && (
          <>
            <h1
              className={`flex flex-col cursor-pointer ${
                pathname === "/messages"
                  ? "bg-[#d7f7f2] text-[#147073]"
                  : "text-black"
              } p-2 rounded-lg justify-center items-center gap-2`}
            >
              <LuBotMessageSquare className="font-light text-xl" /> Messages
            </h1>
            <h1
              className={`flex flex-col cursor-pointer ${
                pathname === "/bookings"
                  ? "bg-[#d7f7f2] text-[#147073]"
                  : "text-black"
              } p-2 rounded-lg justify-center items-center gap-2`}
            >
              <IoMdTime className="font-light text-xl" /> Bookings
            </h1>
          </>
        )}
      </div>

      <div className="py-8">
        <img
          src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/227490471/original/ef79ce48b4a9f50a350c2b09590b839034ec303f/make-a-minimalistic-style-avatar-pfp.jpg"
          alt="PFP"
          className="w-16 h-16 rounded-full border-2 border-gray-300"
        />
      </div>
    </div>
  )
}

export default Sidebar
