import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { useMediaQuery } from 'react-responsive'

interface Params {
  slug: string
}

export function Event(){
  const { slug } = useParams<{slug: string}>()
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return(
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={`${isPortrait ? 'flex-col' : 'flex-row'} flex flex-1`}>
        { 
          slug ? <Video lessonSlug={slug}/> : <div className="flex-1"></div>
        }
        <Sidebar />
      </main>
    </div>
  )
}