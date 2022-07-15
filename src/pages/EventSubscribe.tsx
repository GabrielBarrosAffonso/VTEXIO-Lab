import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { EmailSubscribe } from "../components/EmailSubscribe";

interface Params {
  slug: string
}

export function EventSubscribe(){
  const { slug } = useParams<{slug: string}>()

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <EmailSubscribe />
        <Sidebar />
      </main>
    </div>
  )
}