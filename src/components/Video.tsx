import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, FileArrowDown} from "phosphor-react";

import '@vime/core/themes/default.css'
import { gql, useQuery } from "@apollo/client";
import { useGetLessonBySlugQuery } from "../graphql/generated";


interface VideoProps {
  lessonSlug: string
}

export function Video(props: VideoProps) {
  const { lessonSlug } = props
  const { data } = useGetLessonBySlugQuery({    
    variables: {
      slug: lessonSlug
    }}
  )

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
      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-vtexBlue-900">{data.lesson.title}</h1>
            <p className="mt-4 text-vtexBlue-900 leading-relaxed">
              {data.lesson.description}
            </p>
            {data.lesson.teacher && (
            <div className="flex items-center gap-4 mt-6">
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
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2">
          <a href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full p-6 flex items-center">
              <FileArrowDown size={40}/>
            </div>
            <div className="py-6 leading-relaxed">
              <strong className="text-2xl">Material Complementar</strong>
              <p className="text-sm text-gray-200 mt-2">Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}