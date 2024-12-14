import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import { Itim } from "next/font/google";

interface LaunchCountdownProps {
  launchDate: Date;
  onEnd: () => void;
}

const LaunchCountdown = ({ launchDate, onEnd }: LaunchCountdownProps) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;
    return distance > 0 ? Math.floor(distance / 1000) : 0; // Time in seconds
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    // Adjust width and height for Confetti
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowConfetti(true);
      const confettiTimer = setTimeout(() => {
        setShowConfetti(false);
        onEnd(); // Trigger the next stage after confetti ends
      }, 15000); // Confetti lasts for 15 seconds

      return () => clearTimeout(confettiTimer);
    }
  }, [timeLeft, onEnd]);

  return (
    <main className="bg-yellow-400 container mx-auto h-screen flex justify-center items-center">
      <section className="px-4 w-full flex flex-col lg:flex-row justify-between items-center">
        <aside className="w-full lg:w-1/2 text-center lg:text-start">
          <h1 className="text-6xl lg:text-7xl xl:text-8xl mb-5 text-black">
            <small className="text-3xl font-semibold">Our Website is</small>
            <br />
            <span >Launching Soon</span>
          </h1>
          <h2 className="text-black text-lg lg:text-xl">
            We&apos;re{" "}
            <span className="bg-white px-2 py-1 font-semibold rounded shadow-md">
              Under Construction
            </span>{" "}
            and will be here soon.
          </h2>
          <h3 className="bg-white text-black font-semibold text-xl lg:text-2xl uppercase px-2 py-1 inline-block rounded shadow-md mt-5">
            Stay Tuned!
          </h3>
          <div className="flex justify-center lg:justify-start mt-10 gap-3">
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
              {Math.floor(timeLeft / (60 * 60 * 24))} {/* Days */}
              <small className="text-xs lg:text-sm uppercase font-semibold text-white">Days</small>
            </span>
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
              {Math.floor((timeLeft / (60 * 60)) % 24)} {/* Hours */}
              <small className="text-xs lg:text-sm uppercase font-semibold text-white">Hours</small>
            </span>
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
              {Math.floor((timeLeft / 60) % 60)} {/* Minutes */}
              <small className="text-xs lg:text-sm uppercase font-semibold text-white">Minutes</small>
            </span>
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl lg:text-5xl w-36 py-3 shadow-lg rounded-lg">
              {timeLeft % 60} {/* Seconds */}
              <small className="text-xs lg:text-sm uppercase font-semibold text-white">Seconds</small>
            </span>
          </div>
        </aside>
        <aside className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0 lg:pl-4">
          <Image
            src="/funny-launch.png"
            alt="developers at work"
            width={650}
            height={450}
            className="w-full max-w-[650px] h-auto"
          />
        </aside>
      </section>
      {showConfetti && <Confetti width={width} height={height} />}
    </main>
  );
};

export default LaunchCountdown;
