import { GithubLogo } from "phosphor-react"

export const Footer = () => {
  return (
    <footer className="bg-black text-white flex justify-between px-10 py-5 items-center">
        <h1 className="text-xl">The Cat Wiki</h1>
        <a className="text-4xl" href="https://github.com/Niwau" target='_blank'><GithubLogo/></a>
    </footer>
  )
}
