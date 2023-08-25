"use client"
import React, { useState, useEffect } from "react";

const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

export default function DateDisplay() {
  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const today = new Date();
      setCurrentDate(formatDate(today));
    }, 1000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return <div style={{ fontSize: "12px", color: "grey" }}>
    {currentDate}
    </div>;
}
