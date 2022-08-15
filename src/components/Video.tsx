import { DefaultUi, Player, Youtube } from "@vime/react";
import { ArrowRight } from "phosphor-react";
import { useMediaQuery } from "react-responsive";

import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { useGetLessonBySlugQuery } from "../graphql/generated";
import { useEffect } from  "react"


interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { lessonSlug } = props
  const navigate = useNavigate()
  const loginStorage = localStorage.getItem("loginId")
  const { data } = useGetLessonBySlugQuery({    
    variables: {
      slug: lessonSlug
    },
    notifyOnNetworkStatusChange:true,
    fetchPolicy: 'network-only',
}
  )
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  useEffect(() => {  
    if(loginStorage == null){
      navigate('/')
    }
  }, [loginStorage])

  if(!data || !data.lesson) {
    return (
      <div className="flex-1">
          <span>... CARREGANDO</span>
      </div>
    )
  }

  return(
    <div className="flex-1 bg-white">
      <div className="flex justify-center bg-rebelPink-500 py-5">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>
      <div>
      <div className="flex-1 bg-rebelPink-900 items-center justify-center">
        <h1 className="text-2xl font-bold w-full max-w-[1100px] py-5 px-8 text-white mx-auto">{data.lesson.title}</h1>
      </div>
      </div>
      <div className="px-8 max-w-[1100px] mx-auto mb-5">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <p className=" text-vtexBlue-900 leading-relaxed p-3 rounded-sm bg-slate-100">
              {data.lesson.description}
            </p>
            <div className={`${isPortrait ? 'flex-col' : 'flex-row'} flex justify-between pt-5 mt-5`}>
            {data.lesson.teacher && (
              <div className="flex items-center gap-4">
                <img
                className="h-16 w-16 rounded-full border-2 border-blue-500" 
                  src={data.lesson.teacher.avatarURL} 
                  alt="Teacher" 
                />
                <div className="leading-relaxed">
                  <strong className="font-bold text-2xl block text-vtexBlue-900">{data.lesson.teacher.name}</strong>
                  <span className="text-sm block text-vtexBlue-900">{data.lesson.teacher.bio}</span>
                </div>
              </div>)}
              <div className={`${isPortrait ? "w-[100%] mt-3" : "w-1/3"}`}>
                <a target="_blank" href={`${data.lesson.materialLink}`} className="bg-white rounded overflow-hidden flex hover:bg-slate-100 transition-colors">
                  <div className="bg-rebelPink-900 h-full p-4 flex items-center">
                    <ArrowRight size={40}/>
                  </div>
                  <div className="py-2 leading-relaxed bg-slate-100 flex items-center justify-center grow">
                    <strong className="text-1xl text-vtexBlue-900 px-12">Material Complementar</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}