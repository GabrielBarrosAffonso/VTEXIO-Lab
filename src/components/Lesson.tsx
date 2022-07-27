
import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  number: number;
  time: string;
}

export function Lesson(props: LessonProps) {
  const { title, availableAt, number, time} = props
  const { slug } = useParams<{ slug: string }>()

  const isActiveLesson = slug === props.slug;

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <div 
        className={`rounded border border-vtexGray-300 p-4 mt-2 group-hover:border-rebelPink-900 ${isActiveLesson ? 'bg-rebelPink-900' : ''}`}
      >
        <header className="flex items-center justify-between">
            <span className={`text-sm font-medium flex items-center gap-2 ${!isActiveLesson ? 'text-rebelPink-900' : ''} ${isActiveLesson ? 'text-white' : ''}`}>
              <CheckCircle size={20}/>
              {`Aula - ${number}`}
            </span> 
          <span className={`text-xs rounded px-2 py-[0.125rem] text-white border font-bold ${!isActiveLesson ? 'text-rebelPink-900' : ''} ${isActiveLesson ? 'border-white' : ''}`}>
            {time}
          </span>
        </header>
        <strong className={`mt-2 block ${!isActiveLesson ? 'text-vtexBlue-900' : ''} ${isActiveLesson ? 'text-white' : ''}`}>
          {title}
        </strong>
      </div>
    </Link>
  )
}