import { Header } from "../components/Header";
import { EmailSubscribe } from "../components/EmailSubscribe";

export function EventSubscribe(){

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <EmailSubscribe />
      </main>
    </div>
  )
}