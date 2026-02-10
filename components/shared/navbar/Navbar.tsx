"use client";
import Link from "next/link";
import { Icon } from "@/assets/icons/icons";

import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../button/Button";

export default function Navbar() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hrs: "00",
    min: "00",
    sec: "00",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const year = now.getFullYear();

      // Set target to Feb 14 of the current year
      let targetDate = new Date(`February 14, ${year} 00:00:00`);

      // If today is past Feb 14, set target to Feb 14 of next year
      if (now > targetDate) {
        targetDate = new Date(`February 14, ${year + 1} 00:00:00`);
      }

      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24))
            .toString()
            .padStart(2, "0"),
          hrs: Math.floor((difference / (1000 * 60 * 60)) % 24)
            .toString()
            .padStart(2, "0"),
          min: Math.floor((difference / 1000 / 60) % 60)
            .toString()
            .padStart(2, "0"),
          sec: Math.floor((difference / 1000) % 60)
            .toString()
            .padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hrs: "00", min: "00", sec: "00" });
      }
    };

    // Run once on mount
    calculateTimeLeft();

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <header className="sticky top-0 z-50 bg-white px-4 py-8">
      <div className="container flex  items-center justify-between">
        <div className="flex">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Nest Nepal"
              width={255}
              height={46}
              title="Nest Nepal"
            />
          </Link>
        </div>
        {/* Valentine offer */}
        <div className="flex flex-col items-center py-2 border-b border-slate-50 bg-white">
          <span className="text-rose-500 font-serif-italic text-sm md:text-base font-semibold">
            Valentine's offer
          </span>
          <div className="flex items-start gap-4 mt-1">
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tighter leading-none">
                {timeLeft.days}
              </span>
              <span className="text-[10px] font-bold text-slate-900 uppercase">
                Days
              </span>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-blue-600 mt-[-2px]">
              :
            </span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tighter leading-none">
                {timeLeft.hrs}
              </span>
              <span className="text-[10px] font-bold text-slate-900 uppercase">
                Hrs
              </span>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-blue-600 mt-[-2px]">
              :
            </span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tighter leading-none">
                {timeLeft.min}
              </span>
              <span className="text-[10px] font-bold text-slate-900 uppercase">
                Min
              </span>
            </div>
            <span className="text-2xl md:text-3xl font-bold text-blue-600 mt-[-2px]">
              :
            </span>
            <div className="flex flex-col items-center">
              <span className="text-2xl md:text-3xl font-bold text-blue-600 tracking-tighter leading-none">
                {timeLeft.sec}
              </span>
              <span className="text-[10px] font-bold text-slate-900 uppercase">
                Sec
              </span>
            </div>
          </div>
        </div>

        <Link href="#">
          <Button
            iconLeft="whatsApp"
            outline="primary"
            className="rounded-xl p-2"
            iconClass="min-h-6 min-w-6"
          >
            Contact Sales
          </Button>
        </Link>
      </div>
    </header>
  );
}
