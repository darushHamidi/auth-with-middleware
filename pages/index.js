import axios from "axios";
import React, { useState } from "react";
import { useRouter } from 'next/router'

export default function Home() {
  const mainDivStyle = {
    padding: "1em",
  }

  const router = useRouter()

  const handleGetUser = async () => {
    const user = await axios.get("/api/user");
    console.log(user);
  };

  const handleLogOut = async () => {
    const user = await axios.get("/api/auth/logout");
    console.log(user);
  }

  const navigateToDashboard = () => router.push('/dashboard/user')


  return (
    <div style={mainDivStyle}>

      <button onClick={() => handleGetUser()}> User </button>

      <button onClick={() => navigateToDashboard()}> Dashboard </button>

      <button onClick={() => handleLogOut()}> Logout </button>
    </div>
  );
}
