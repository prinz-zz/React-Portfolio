import { useState } from 'react';
import './contact.scss';
//import HandshakeIcon from '@mui/icons-material/Handshake';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


export default function Contact() {

    const [message, setMessage]= useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage(true);
    }

    return (
        <div className="contact" id="Contact">
            <div className="left">
                <img src='assets/shake.svg' alt='' className="icon"/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form>
                    <input type='email' placeholder="Email" />
                    <textarea placeholder="Message">
                    </textarea>
                    <button type='submit' onClick={handleSubmit}>Send</button>
                    {message && <span>Thanks, I will reply ASAP <EmojiEmotionsIcon className='smily'/></span>}
                </form>
            </div>
        </div>
    )
}