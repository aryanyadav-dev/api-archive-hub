"use client"

import Sidebar from "./components/Sidebar"
import ApiCategoryList from "./components/ApiCategoryList"
import ApiGrid from "./components/ApiGrid"

export default function Home() {
  return (
    <div
      className="flex h-screen"
      style={{
        backgroundImage: "url(/images/gradient-4.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Sidebar />
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">API Archive Hub</h1>
        <ApiCategoryList />
        <ApiGrid />
      </main>
    </div>
  )
}