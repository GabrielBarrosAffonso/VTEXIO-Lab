import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
  const { data } = useGetLessonsQuery()

  return(
    <aside className="w-[348px] bg-white p-6 border-l border-vtexGray-300">
      <h6 className="font-bold text-2xl pb-6 mb-6 border-b border-gray-600 block text-vtexBlue-900">
        Cronograma de aulas
      </h6>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => {
          return(
            <Lesson
              key={lesson.slug}
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
            />
          )
        })}
      </div>
    </aside>

  )
}