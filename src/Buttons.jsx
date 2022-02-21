import { useState } from "react";
import ReactPlayer from "react-player";

export const Buttons = (props) => {
  const { content } = props;
    const [showVideo, hideVideo] = useState(false);
    const onClick = () => hideVideo(true)
  


  return (
    <div className="buttonContainer">
      {content.map((item) => (
        <div className="buttonSpace">
        
            <button id="btn" onClick={onClick}>{item.title}</button>
            {showVideo ? <ReactPlayer url={item.embed} /> : null}    
         
        </div>
      ))}
    </div>
  );
};

export default Buttons;
