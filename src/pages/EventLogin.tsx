import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { EmailLogin } from "../components/EmailLogin";

interface Params {
  slug: string
}

export function EventLogin(){
  const { slug } = useParams<{slug: string}>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <EmailLogin />
        <Sidebar />
      </main>
    </div>
  )
}