import React,{useState,useEffect} from 'react'
import socketIOClient from "socket.io-client";
import {url} from '../Utils/Config'


const ENDPOINT = "http://localhost:5500";
function Message() {


    const [response, setResponse] = useState("");

    const msgerForm = get(".msger-inputarea");
    const msgerInput = get(".msger-input");
    const msgerChat = get(".msger-chat");

    const BOT_MSGS = [
        "Hi, how are you?",
        "Ohh... I can't understand what you trying to say. Sorry!",
        "I like to play games... But I don't know how to play!",
        "Sorry if my answers are not relevant. :))",
        "I feel sleepy! :("
    ];

    // Icons made by Freepik from www.flaticon.com
    const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
    const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
    const BOT_NAME = "BOT";
    const PERSON_NAME = "Sajad";

    const submit = (event) => {


        const msgText = msgerInput.value;
        if (!msgText) return;

        appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
        msgerInput.value = "";

        botResponse();

    };

    function appendMessage(name, img, side, text) {
        //   Simple solution for small apps
        const msgHTML = `
    <div className="msg ${side}-msg">
      <div className="msg-img" style="background-image: url(${img})"></div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">${name}</div>
          <div className="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div className="msg-text">${text}</div>
      </div>
    </div>
  `;

        msgerChat.insertAdjacentHTML("beforeend", msgHTML);
        msgerChat.scrollTop += 500;
    }

    function botResponse() {
        const r = random(0, BOT_MSGS.length - 1);
        const msgText = BOT_MSGS[r];
        const delay = msgText.split(" ").length * 100;

        setTimeout(() => {
            appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
        }, delay);
    }

    // Utils
    function get(selector, root = document) {
        return root.querySelector(selector);
    }

    function formatDate(date) {
        const h = "0" + date.getHours();
        const m = "0" + date.getMinutes();

        return `${h.slice(-2)}:${m.slice(-2)}`;
    }

    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    return (
        <>

            <div className="body1">
                <section className="msger">
                    <header className="msger-header">
                        <div className="msger-header-title">
                            <i className="fas fa-comment-alt" /> SimpleChat
                        </div>
                        <div className="msger-header-options">
                            <span><i className="fas fa-cog" /></span>
                        </div>
                    </header>
                    <main className="msger-chat">
                        <div className="msg left-msg">
                            <div className="msg-img" style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/327/327779.svg)' }} />
                            <div className="msg-bubble">
                                <div className="msg-info">
                                    <div className="msg-info-name">BOT</div>
                                    <div className="msg-info-time">12:45</div>
                                </div>
                                <div className="msg-text">
                                    Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
                                </div>
                            </div>
                        </div>
                        <div className="msg right-msg">
                            <div className="msg-img" style={{ backgroundImage: 'url(https://image.flaticon.com/icons/svg/145/145867.svg)' }} />
                            <div className="msg-bubble">
                                <div className="msg-info">
                                    <div className="msg-info-name">Sajad</div>
                                    <div className="msg-info-time">12:46</div>
                                </div>
                                <div className="msg-text">
                                    You can change your name in JS section!
                                </div>
                            </div>
                        </div>
                    </main>
                    <div className="msger-inputarea">
                        <input type="text" className="msger-input" placeholder="Enter your message..." />
                        <button type="submit" onClick={(event)=>submit(event)} className="msger-send-btn">Send</button>
                    </div>
                </section>

            </div>




        </>
    )
}

export default Message