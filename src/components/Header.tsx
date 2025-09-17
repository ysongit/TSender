import { ConnectButton } from "@rainbow-me/rainbowkit";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-emerald-50 shadow-md">
      <div className="flex items-center gap-4">
        <a href="https://github.com/ysongit/TSender" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
          <FaGithub size={24} />
        </a>
        <h1 className="text-2xl font-bold text-indigo-800">tsender</h1>
      </div>
      <ConnectButton />
    </header>
  )
}
