"use client";
import Current from "@/components/Current";
import Input from "@/components/Input";
import WeatherDetails from "@/components/WeatherDetails";
import WeekForecast from "@/components/WeekForecast";
import React, { useState } from "react";
import Lottie from "lottie-react";
import weather from '@/public/weather.json'
import { TiWeatherPartlySunny } from "react-icons/ti";



export default function Home() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=f25da41d015f4f28873130619230912&q=${location}&days=7&aqi=yes&alerts=yes`;
  console.log("API Key:", process.env.NEXT_APP_WEATHER_API_KEY);
  console.log("URL:", url);
  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl font-semibold mb-4">Weather Page</h2>
      <div className="text-xl w-[500px]">
        <Lottie animationData={weather} />
      </div>
    </div>
    
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-[5rem]">
        <h2 className="text-3xl font-semibold mb-4">City not found</h2>
        <p className="text-xl">Please enter a Currect Name</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex md:flex-row flex-col p-12 items-center justify-between mt-[-4rem] gap-10">
          <Current data={data} />
          <WeekForecast data={data} />
        </div>
        <div>
          <WeatherDetails data={data} />
        </div>
      </>
    );
  }

  return (
    <div className="">
      <div className="bg-white/25 w-full rounded-lg flex flex-col h-fit">
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input handleSearch={handleSearch} setLocation={setLocation} />
          <h1 className="mb-8 md:mb-0 order-1 text-yellow-200 text-2xl py-2 px-4 rounded-xl italic font-bold">
            <TiWeatherPartlySunny size={50} />
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
}
