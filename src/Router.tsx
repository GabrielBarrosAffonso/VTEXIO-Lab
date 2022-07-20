import { Routes, Route} from "react-router-dom";
import { Event } from './pages/Event'
import { EventSubscribe } from './pages/EventSubscribe'
import { EventLogin } from './pages/EventLogin'

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<EventLogin />}/>
      <Route path="/subscribe" element={<EventSubscribe />}/>
      <Route path="/event/lesson/:slug" element={<Event />}/>
    </Routes>
  )
}