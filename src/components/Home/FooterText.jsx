
import {Link} from "react-router-dom"

const FooterText = () => {
  return (
    <div className="flex gap-5 items-center justify-center pb-4 font-[lausanne-500]">
      <Link to="/projects" className="hover:text-[#D3FD50] hover:border-[#D3FD50;] duration-500 text-[6vw] text-white uppercase rounded-full border-3 px-12 pt-7 leading-[4.4vw]">Projets</Link>
      <Link to="/agence" className="hover:text-[#D3FD50] hover:border-[#D3FD50;] duration-500 text-[6vw] text-white uppercase rounded-full border-3 px-12 pt-7 leading-[4.4vw]">Agence</Link>
    </div>
  )
}

export default FooterText
