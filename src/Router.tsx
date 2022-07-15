import { Routes, Route} from "react-router-dom";
import { Event } from './pages/Event'
import { EventSubscribe } from './pages/EventSubscribe'
import { Subscribe } from './pages/Subscribe'

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<EventSubscribe />}/>
      <Route path="/event" element={<EventSubscribe />}/>
      <Route path="/event/lesson/:slug" element={<Event />}/>
    </Routes>
  )
}