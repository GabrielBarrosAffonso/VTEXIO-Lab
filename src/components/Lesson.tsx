
import { CheckCircle, Lock } from 'phosphor-react'
import {  isPast, format} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { title, availableAt, type} = props
  const { slug } = useParams<{ slug: string }>()
  const isLessonAvailable = isPast(availableAt)
  const availableDateFormatted = format(availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {locale: ptBR})

  const isActiveLesson = slug === props.slug;

  return(
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-vtexBlue-900">
        {availableDateFormatted}
      </span>
      <div 
        className={`rounded border border-vtexGray-300 p-4 mt-2 group-hover:border-rebelPink-900 ${isActiveLesson ? 'bg-rebelPink-900' : ''}`}
      >
        <header className="flex items-center justify-between">
          { isLessonAvailable ? (
            <span className={`text-sm font-medium flex items-center gap-2 ${!isActiveLesson ? 'text-blue-500' : ''} ${isActiveLesson ? 'text-white' : ''}`}>
              <CheckCircle size={20}/>
              Conteúdo Liberado
            </span> 
          ) : (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20}/>
              Em Breve
            </span>
            )
          } 
          <span className={`text-xs rounded px-2 py-[0.125rem] text-white border font-bold ${!isActiveLesson ? 'text-green-300' : ''} ${isActiveLesson ? 'border-white' : ''}`}>
            {type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        <strong className={`mt-5 block ${!isActiveLesson ? 'text-gray-200' : ''} ${isActiveLesson ? 'text-white' : ''}`}>
          {title}
        </strong>
      </div>
    </Link>
  )
}