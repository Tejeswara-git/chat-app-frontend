import { useEffect, useState } from "react";

import api from "../services/api";

import socket from "../services/socket";

import Message from "./Message";

import MessageInput from "./MessageInput";

function Chat() {

    const [messages,setMessages] = useState([]);

    useEffect(()=>{

        loadMessages();

        socket.on("receiveMessage",(message)=>{

            setMessages(prev=>[...prev,message]);

        });

        return ()=>{

            socket.off("receiveMessage");

        }

    },[]);

    const loadMessages=async()=>{

        try{

            const res=await api.get("/messages");

            setMessages(res.data.messages);

        }

        catch(err){

            console.log(err);

        }

    }

    const sendMessage=async(data)=>{

        try{

            await api.post("/messages",data);

        }

        catch(err){

            console.log(err);

        }

    }

    return(

        <div>

            <h1>Realtime Chat</h1>

            <div>

                {

                    messages.map((msg)=>(

                        <Message
                        key={msg._id}
                        message={msg}
                        />

                    ))

                }

            </div>

            <MessageInput
            onSend={sendMessage}
            />

        </div>

    );

}

export default Chat;