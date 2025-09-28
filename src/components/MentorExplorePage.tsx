"use client";

import Image from "next/image";
import React from "react";
import MentorData from "../data/MentorData.json";
import Link from "next/link";

export default function MentorCarousel() {
  return (
    <div className="w-full flex flex-wrap gap-6 ml-12 justify-center py-8">
      {MentorData.map((mentor, index) => (
        <Link href={`/mentor/${mentor.id}`} key={index} target="_blank">
            <div
            className="rounded-xl shadow-lg p-2 border cursor-pointer bg-white overflow-hidden w-64 flex-shrink-0"
            >
            {/* Profile Image */}
            <div className="w-full h-52  relative">
                <Image
                src={mentor.image}
                alt={mentor.name}
                fill
                className="object-cover rounded-xl"
                />
            </div>

            {/* Content */}
            <div className="p-3 h-[180px] flex flex-col justify-between">
                <div>
                <h2 className="text-md font-bold">
                    {mentor.name}{" "}
                    <span className="text-gray-500 text-sm">{mentor.country}</span>
                </h2>
                <p className="text-sm text-gray-600 mt-1">{mentor.role}</p>

                <p className="text-sm text-gray-500 mt-1">
                    {mentor.sessions} sessions ({mentor.reviews} reviews)
                </p>
                </div>

                <div className="flex justify-between items-center mt-2 border-t pt-2">
                <div>
                    <p className="text-[10px] text-gray-500">Experience</p>
                    <p className="font-semibold text-sm">{mentor.experience}</p>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-gray-500">Avg. Attendance</p>
                    <p className="font-semibold text-sm">{mentor.attendance}</p>
                </div>
                </div>
            </div>
            </div>
        </Link>
      ))}
    </div>
  );
}
