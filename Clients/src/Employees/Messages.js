import React, { useState, useEffect } from 'react'
import socketIOClient from "socket.io-client";
import Chat from '../Admin/AdminChat/AdChat';

import io from "socket.io-client";
import { url } from '../Utils/Config'

const socket = io.connect(url)
function Message() {
    const [username, setUsername] = useState("B");
    const [room, setRoom] = useState("1");
    const [showChat, setShowChat] = useState(false);
    const joinRoom = () => {

        if (username != "" && room != "") {
            socket.emit('join_room', room)
            setShowChat(true);
        }

    }
    useEffect(() => {
        joinRoom()
    }, [])

    return (
        <>
            <Chat socket={socket} username={username} room={room} />
        </>
    )
}

export default Message