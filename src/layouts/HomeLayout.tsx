import Header from "@/components/Header"
import { Outlet } from "react-router-dom"


export default function HomeLayout() {
  return (
    <div className="min-h-screen w-full  bg-slate-800 text-white">
        <Header/>
          <Outlet/>
    </div>
  )
}