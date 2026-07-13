import { useState } from "react";

function MessageInput({ onSend }) {

    const [username,setUsername] = useState("");

    const [text,setText] = useState("");

    const submit=(e)=>{

        e.preventDefault();

        if(!username.trim() || !text.trim()) return;

        onSend({
            username,
            text
        });

        setText("");

    }

    return(

        <form onSubmit={submit}>

            <input
            placeholder="Username"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />

            <input
            placeholder="Type message..."
            value={text}
            onChange={(e)=>setText(e.target.value)}
            />

            <button>
                Send
            </button>

        </form>

    );

}

export default MessageInput;