import { useMediaQuery } from "react-responsive";
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  const disableClasses = localStorage.getItem("loginId") == null ? 'pointer-events-none opacity-20' : ''
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })

  return(
    <aside className={`${disableClasses} ${isPortrait ? 'w-[100%]' : 'w-[348px]'} bg-white p-6 border-l border-vtexGray-300`}>
      <h6 className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block text-vtexBlue-900">
        Cronograma de aulas
      </h6>
      <div className="sidebar flex flex-col gap-8 max-h-screen">
        {data?.lessons.map((lesson) => {
          return(
            <Lesson
              key={lesson.slug}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              time={lesson.lessonTime}
              number={lesson.lessonNumber}
            />
          )
        })}
      </div>
    </aside>

  )
}