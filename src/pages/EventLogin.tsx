import { Header } from "../components/Header";
import { EmailLogin } from "../components/EmailLogin";

export function EventLogin(){

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <EmailLogin />
      </main>
    </div>
  )
}