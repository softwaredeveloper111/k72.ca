
import Video from "./Video"
const HeroText = () => {
  return (
    <div className="font-[lausanne-300] pt-3">
      <div className="text-[7vw] leading-32 text-center uppercase flex items-center justify-center">L'étincelle</div>
      <div className="text-[7vw] leading-32 text-center uppercase flex items-center justify-center">qui 
        <div className="h-[5.5vw] w-[13vw] rounded-full overflow-hidden">
             <Video/>
        </div> 
        génère
      </div>
      <div className="text-[7vw] leading-32 text-center uppercase flex items-center justify-center">la créativité</div>
    </div>
  )
}

export default HeroText
