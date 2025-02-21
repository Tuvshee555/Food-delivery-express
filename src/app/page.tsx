"use client";
import axios from "axios";
import { useEffect } from "react";

export default function Home() {
  const getData = async () => {
    const response = axios.get("http://localhost:4000");
    console.log(response);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-screen h-screen bg-[white] items-center flex justify-center text-[black]">
      express
    </div>
  );
}
