import { Logo } from "./Logo";

export function Header() {
  return(
    <header className="w-full flex justify-start border border-b-vtexGray-300 items-center bg-white">
      <Logo />
    </header>
  )
}