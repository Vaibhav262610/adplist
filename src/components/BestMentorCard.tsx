"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import bestMentors from '@/data/bestMentorsData.json';

export default function MentorCarousel() {
  return (
    <div className="w-full max-w-7xl mx-auto py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 }, // mobile
          1024: { slidesPerView: 3 }, // tablet
          1280: { slidesPerView: 4 }, // desktop
        }}
      >
        {bestMentors.map((mentor, index) => (
          <SwiperSlide key={index}>
            <div className="rounded-2xl shadow-lg border bg-white overflow-hidden">
              {/* Profile Image */}
              <div className="relative">
                <Image
                  src={mentor.image}
                  alt={mentor.name}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                {mentor.available && (
                  <span className="absolute bottom-3 left-3 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                    Available ASAP
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold">
                  {mentor.name}{" "}
                  <span className="text-gray-500 text-sm">{mentor.country}</span>
                </h2>
                <p className="text-sm text-gray-600 mt-1">{mentor.role}</p>

                <p className="text-sm text-gray-500 mt-2">
                  {mentor.sessions} sessions ({mentor.reviews} reviews)
                </p>

                <div className="flex justify-between items-center mt-4 border-t pt-3">
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="font-semibold">{mentor.experience}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Avg. Attendance</p>
                    <p className="font-semibold">{mentor.attendance}</p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
