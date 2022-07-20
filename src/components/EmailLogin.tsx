import { useState, FormEvent, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useGetUniqueSubscriberLazyQuery } from "../graphql/generated";

export function EmailLogin() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const [getSubscriber, {error, data}] = useGetUniqueSubscriberLazyQuery()

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    await getSubscriber({variables: {email}})
    console.log(data)
  }
  
  return(
    <section className="flex flex-1 bg-vtexbg items-center justify-center">
      <article className='bg-white text-vtexBlue-900 w-full max-w-[550px] p-16'>
        <h1 className="text-2xl font-bold py-3">Faça seu Login 🚀</h1>
        { error ? 
          (
            <div className="p-2 bg-red-300">
              <span className="text-red-600">Ocorreu um erro! Caso já tenha um usuário acesse a nossa página de <a href="/" className="text-red-600 underline">Login</a></span>
            </div>
          ) :
          (<div></div>)
        }
        <form onSubmit={e => handleSubscribe(e)} className="py-3" action="">
          {`${data?.subscriber?.email}`}
          <div className="flex flex-row justify-between">
            <input
              onChange={e => setEmail(e.target.value)}
              className="bg-white border rounded px-5 h-14 w-[100%]"
              type="email"
              placeholder="Digite seu e-mail VTEX"
            />
            </div>
            <button
              type="submit"
              className="w-full text-white mt-4 bg-rebelPink-900 uppercase py-4 rounded font-bold text-sm hover:bg-rebelPink-700 transition-colors disabled:opacity-50"
            >
              Logar
            </button>
        </form>
      </article>

    </section>
  )
}