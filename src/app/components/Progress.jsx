"use client";
import { useState, useEffect } from "react";

export default function Progress() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isWaiting, setIsWaiting] = useState(false);
  const progressValues = [0, 20, 40, 60, 80, 100];

  useEffect(() => {
    // Only run the interval if we're not waiting
    const interval = setInterval(() => {
      if (!isWaiting) {
        setCurrentIndex((prevIndex) => {
          // If we're at the last progress value (100%), start the 5-second wait
          if (prevIndex === progressValues.length - 1) {
            setIsWaiting(true); // Start waiting
            return prevIndex; // Keep the progress at 100% until waiting is done
          }
          return prevIndex + 1; // Otherwise, move to the next progress value
        });
      }
    }, 500); // Updates every 500ms

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [isWaiting]); // Re-run when `isWaiting` state changes

  useEffect(() => {
    if (isWaiting) {
      const timeout = setTimeout(() => {
        setCurrentIndex(0); // Reset to 0 after 5 seconds
        setIsWaiting(false); // End the waiting phase
      }, 5000); // 5-second wait

      return () => clearTimeout(timeout); // Cleanup timeout on unmount or when changing state
    }
  }, [isWaiting]); // Run when `isWaiting` changes

  return (
    <div className="progress-container flex flex-col justify-center items-center h-screen">
      {/* Render the current progress bar */}
      <div
        className="radial-progress"
        style={{
          "--value": progressValues[currentIndex],
        }}
        role="progressbar"
      >
        {progressValues[currentIndex]}%
      </div>
      <div className="mt-5 text-xl text-white">
        {progressValues[currentIndex] < 100 ? (
          <p>Loading productivity...</p>
        ) : (
          <p>Ready to be productive !</p>
        )}
      </div>
    </div>
  );
}
