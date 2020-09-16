import React , { useState , setState} from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import "./MessageSender.css"



function MessageSender() {

    const [input, setInput] = useState("");
    const [url, setUrl] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        
            setUrl("");
            setInput("");
        
    };
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                <input className="messageSender__input" placeholder="whats on your mind" value={input} onChange={(e) => setInput(e.target.value)}/>
                <input placeholder="image URL (optional)" value={url} onChange={(e) => setUrl(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>Hidden submit</button>
                </form>
                
            </div>


            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideoCallIcon style={{color: "red"}}/>
                    <h4>Live video</h4>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{color: "green"}}/>
                    <h4>Photo/video</h4>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{color: "yellow"}}/>
                    <h4>Feeling/activity</h4>
                </div>
            </div>
            
        </div>
    )

}

export default MessageSender
