import { Link } from "react-router-dom"

const Page = () => {
    
  return (
    <div className="p-8">
      <nav className=" grid grid-cols-3 gap-4 p-4 mt-4">
        <Link to="/ranking" className="text-white 
        p-4 bg-slate-800 rounded-lg text-center">
          <img src="./public/icons/rank.png" alt="icon" className="w-10 h-10 inline-block mr-2" />
          Ranking
        </Link>
        <Link to="/points" className="text-white 
         p-4 bg-slate-800  rounded-lg text-center">
          <img src="./public/icons/coins.png" alt="icon" className="w-10 h-10 inline-block mr-2" />
          Points
        </Link>
        <Link to="/titulos" className="text-white 
         p-4 bg-slate-800 rounded-lg text-center">
          <img src="./public/icons/medal.png" alt="icon" className="w-10 h- inline-block mr-2" />
          Titulos
        </Link>
      </nav>
      
    </div>
  )
}

export default Page
