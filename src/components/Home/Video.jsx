import homeVideo from "../../../public/homeVideo.mp4"


const Video = () => {
  return (
    <div className="h-full w-full">
      <video autoPlay loop muted className="h-full w-full object-cover" src={homeVideo}></video>
    </div>
  )
}

export default Video
