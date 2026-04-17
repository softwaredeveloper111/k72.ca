import Video from "../components/Home/Video";
import HeroText from "../components/Home/HeroText";
import FooterText from "../components/Home/FooterText";

const Home = () => {
  return (
    <div>

      <div className="h-screen w-screen fixed top-0 left-0">
         <Video/>
      </div>

      <div className="h-screen w-screen relative flex flex-col justify-between">
        <HeroText/>
        <FooterText/>
      </div>
      
    </div>
  )
}

export default Home
