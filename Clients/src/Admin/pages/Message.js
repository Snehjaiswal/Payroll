import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";
import Chat from './../AdminChat/AdChat';

import io from "socket.io-client";
import { url } from '../../Utils/Config'

const socket = io.connect(url)
function Message() {
    const [username, setUsername] = useState("A");
    const [room, setRoom] = useState("1");
    const [showChat, setShowChat] = useState(false);
    const joinRoom = () => {
 
        if(username != "" && room != ""){
         socket.emit('join_room',room)
         setShowChat(true);
        }
    
      }

    return (
        <>
            {/* <div className="App"> */}

                {/* {!showChat ? (
                    <div className="joinChatContainer">
                        <h3>Join A chat</h3>
                        <input type="text" placeholder="shakir.... " onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="text" placeholder="ROOM ID... " onChange={(e) => { setRoom(e.target.value) }} />
                        <button onClick={joinRoom}>Join a room</button>
                    </div>
                ) : ( */}

                    <Chat socket={socket} username={username} room={room} />
                {/* )} */}



            {/* </div> */}
        </>
    )
}

export default Message