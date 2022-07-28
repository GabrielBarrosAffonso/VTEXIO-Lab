import { useState, FormEvent, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useGetUniqueSubscriberLazyQuery } from "../graphql/generated";

export function EmailLogin() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const [getSubscriber, {error, data}] = useGetUniqueSubscriberLazyQuery()
  const loginData = data?.subscriber?.id
  const loginStorage = localStorage.getItem("loginId")

  async function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    await getSubscriber({variables: {email}})
  }

  useEffect(() => {
    if(loginData != undefined){
      localStorage.setItem("loginId", loginData)
      navigate('/event/lesson/aula-0-estruturacao-do-treinamento-de-vtex-io')
    }
  
    if(loginStorage != null){
      navigate('/event/lesson/aula-0-estruturacao-do-treinamento-de-vtex-io')
    }
  }, [loginData, loginStorage])
  
  return(
    <section className="flex flex-1 bg-vtexbg items-center justify-center">
      <article className='bg-white text-vtexBlue-900 w-full max-w-[550px] p-16'>
        <h1 className="text-2xl font-bold py-3">Faça seu Login 🚀</h1>
        { error &&
          (
            <div className="p-2 bg-red-300">
              <span className="text-red-600">Ocorreu um erro! Recarregue a página e tente novamente <a href="/" className="text-red-600 underline">Login</a></span>
            </div>
          )
        }
        {
          data?.subscriber === null && (
            <div className="p-2 bg-red-300">
              <span className="text-red-600">Não encontramos nenhum usuário com esse nome, caso ainda não tenha, faça seu <a href="/subscribe" className="text-red-600 underline">Cadastro</a></span>
            </div>
          )
        }
        <form onSubmit={e => handleSubscribe(e)} className="py-3" action="">
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
            <a className="mt-3 block text-center text-rebelPink-900 underline" href="/subscribe">Quero me cadastrar</a>
        </form>
      </article>

    </section>
  )
}