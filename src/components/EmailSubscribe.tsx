import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateSubscriberMutation } from "../graphql/generated";
import { usePublishMutation } from "../graphql/generated"

export function EmailSubscribe() {

  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const [createSubscriber, { data, error }] = useCreateSubscriberMutation()
  const [publishSubscriber] = usePublishMutation()

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })
  }

  if(data?.createSubscriber?.id != undefined){
    publishSubscriber({
      variables: {
        id: data.createSubscriber?.id
      }
    })
    
    navigate('/event/lesson/abertura-do-evento')
  }

  
  return(
    <section className="flex flex-1 bg-vtexbg items-center justify-center">
      <article className='bg-white text-vtexBlue-900 w-full max-w-[550px] p-16'>
        <h1 className="text-2xl font-bold py-3">Quem é você? 🚀</h1>
        <p className="py-3 text-sm">Precisamos do seu e-mail e nome VTEX para mensurar o impacto da plataforma, por favor preencha os dados abaixo:</p>
        { error ? 
          (
            <div className="p-2 bg-red-300">
              <span className="text-red-600">Ocorreu um erro! Caso já tenha um usuário acesse a nossa página de <a href="/" className="text-red-600 underline">Login</a></span>
            </div>
          ) :
          (<div></div>)
        }
        <form onSubmit={e => handleSubscribe(e)} className="py-3" action="">
          <div className="flex flex-row justify-between">
            <input
            onChange={e => setName(e.target.value)}
              className="bg-white border rounded px-5 h-14 w-[49%]"
              type="text"
              placeholder="@ VTEX no Slack"
            />
            <input
              onChange={e => setEmail(e.target.value)}
              className="bg-white border rounded px-5 h-14 w-[49%]"
              type="email"
              placeholder="Digite seu e-mail VTEX"
            />
            </div>
            <button
              type="submit"
              className="w-full text-white mt-4 bg-rebelPink-900 uppercase py-4 rounded font-bold text-sm hover:bg-rebelPink-700 transition-colors disabled:opacity-50"
            >
              Enviar
            </button>
        </form>
      </article>

    </section>
  )
}