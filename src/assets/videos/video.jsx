  import video from "../../assets/videos/video.mp4" ;
  


  export const Video = () => {
    return ( <div>
        <video className="vid"  src={video}autoPlay muted loop   ></video> 
        
    
        
        </div>
    )
    
}