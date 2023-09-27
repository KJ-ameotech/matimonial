import React, { useRef, useState } from "react";
// import ChatBox from "../../components/ChatBox/ChatBox";
// import Conversation from "../../components/Coversation/Conversation";
// import LogoSearch from "../../components/LogoSearch/LogoSearch";
// import NavIcons from "../../components/NavIcons/NavIcons";
import "./chat.css";
import { useEffect } from "react";
// import { userChats } from "../../api/ChatRequests";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";

const Chat = () => {
    // const dispatch = useDispatch();
    // const socket = useRef();
    // //   const { user } = useSelector((state) => state.authReducer.authData);

    // const [chats, setChats] = useState([]);
    // const [onlineUsers, setOnlineUsers] = useState([]);
    // const [currentChat, setCurrentChat] = useState(null);
    // const [sendMessage, setSendMessage] = useState(null);
    // const [receivedMessage, setReceivedMessage] = useState(null);
    // // Get the chat in chat section
    // //   useEffect(() => {
    // //     const getChats = async () => {
    // //       try {
    // //         const { data } = await userChats(user._id);
    // //         setChats(data);
    // //       } catch (error) {
    // //         console.log(error);
    // //       }
    // //     };
    // //     getChats();
    // //   }, [user._id]);

    // // Connect to Socket.io
    // useEffect(() => {
    //     socket.current = io("ws://localhost:8800");
    //     socket.current.emit("new-user-add", user._id);
    //     socket.current.on("get-users", (users) => {
    //         setOnlineUsers(users);
    //     });
    // }, [user]);

    // // Send Message to socket server
    // useEffect(() => {
    //     if (sendMessage !== null) {
    //         socket.current.emit("send-message", sendMessage);
    //     }
    // }, [sendMessage]);


    // // Get the message from socket server
    // useEffect(() => {
    //     socket.current.on("recieve-message", (data) => {
    //         console.log(data)
    //         setReceivedMessage(data);
    //     }

    //     );
    // }, []);


    // //   const checkOnlineStatus = (chat) => {
    // //     const chatMember = chat.members.find((member) => member !== user._id);
    // //     const online = onlineUsers.find((user) => user.userId === chatMember);
    // //     return online ? true : false;
    // //   };

    return (
        <section>
            <div class="content-chat mt-20">
                <div class="content-chat-user">
                    <div class="head-search-chat">
                        <h4 class="text-center">Chat Finder</h4>
                    </div>

                    <div class="search-user mt-30">
                        <input id="search-input" type="text" placeholder="Search..." name="search" class="search" />
                        <span>
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>

                    <div class="list-search-user-chat mt-20">
                        <div class="user-chat" data-username="Maria Dennis">
                            <div class="user-chat-img">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div class="offline"></div>
                            </div>

                            <div class="user-chat-text">
                                <p class="mt-0 mb-0"><strong>Maria Dennis</strong></p>
                                <small>Hi, how are you?</small>
                            </div>
                        </div>

                        <div class="user-chat" data-username="Jorge Harrinson">
                            <div class="user-chat-img">
                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div class="online"></div>
                            </div>

                            <div class="user-chat-text">
                                <p class="mt-0 mb-0"><strong>Jorge Harrinson</strong></p>
                                <small>Hi, how are you?</small>
                            </div>
                        </div>

                        <div class="user-chat" data-username="Carla Terry">
                            <div class="user-chat-img">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <div class="offline"></div>
                            </div>

                            <div class="user-chat-text">
                                <p class="mt-0 mb-0"><strong>Carla Terry</strong></p>
                                <small>Hi, how are you?</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content-chat-message-user" data-username="Maria Dennis">
                    <div class="head-chat-message-user">
                        <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div class="message-user-profile">
                            <p class="mt-0 mb-0 text-white"><strong>Maria Dennis</strong></p>
                            <small class="text-white"><p class="offline  mt-0 mb-0"></p>Offline</small>
                        </div>
                    </div>
                    <div class="body-chat-message-user">
                        <div class="message-user-left">
                            <div class="message-user-left-img">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <p class="mt-0 mb-0"><strong>Maria Dennis</strong></p>
                                <small>min 17:59</small>
                            </div>
                            <div class="message-user-left-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                        <div class="message-user-right">
                            <div class="message-user-right-img">
                                <p class="mt-0 mb-0"><strong>Luis Angel Solano Rivera</strong></p>
                                <small>min 17:59</small>
                                <img src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div class="message-user-right-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>

                        <div class="message-user-left">
                            <div class="message-user-left-img">
                                <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <p class="mt-0 mb-0"><strong>Maria Dennis</strong></p>
                                <small>min 17:59</small>
                            </div>
                            <div class="message-user-left-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                        <div class="message-user-right">
                            <div class="message-user-right-img">
                                <p class="mt-0 mb-0"><strong>Luis Angel Solano Rivera</strong></p>
                                <small>min 17:59</small>
                                <img src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div class="message-user-right-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                    </div>
                    <div class="footer-chat-message-user">
                        <div class="message-user-send">
                            <input type="text" placeholder="Aa" />
                        </div>
                        <button type="button">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

                <div class="content-chat-message-user" data-username="Jorge Harrinson">
                    <div class="head-chat-message-user">
                        <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div class="message-user-profile">
                            <p class="mt-0 mb-0 text-white"><strong>Jorge Harrinson</strong></p>
                            <small class="text-white"><p class="online mt-0 mb-0"></p>Online</small>
                        </div>
                    </div>
                    <div class="body-chat-message-user">
                        <div class="message-user-left">
                            <div class="message-user-left-img">
                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <p class="mt-0 mb-0"><strong>Jorge Harrinson</strong></p>
                                <small>min 17:59</small>
                            </div>
                            <div class="message-user-left-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                        <div class="message-user-right">
                            <div class="message-user-right-img">
                                <p class="mt-0 mb-0"><strong>Luis Angel Solano Rivera</strong></p>
                                <small>min 17:59</small>
                                <img src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div class="message-user-right-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>

                        <div class="message-user-left">
                            <div class="message-user-left-img">
                                <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <p class="mt-0 mb-0"><strong>Jorge Harrinson</strong></p>
                                <small>min 17:59</small>
                            </div>
                            <div class="message-user-left-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                        <div class="message-user-right">
                            <div class="message-user-right-img">
                                <p class="mt-0 mb-0"><strong>Luis Angel Solano Rivera</strong></p>
                                <small>min 17:59</small>
                                <img src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div class="message-user-right-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                    </div>
                    <div class="footer-chat-message-user">
                        <div class="message-user-send">
                            <input type="text" placeholder="Aa" />
                        </div>
                        <button type="button">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

                <div class="content-chat-message-user" data-username="Carla Terry">
                    <div class="head-chat-message-user">
                        <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div class="message-user-profile">
                            <p class="mt-0 mb-0 text-white"><strong>Carla Terry</strong></p>
                            <small class="text-white"><p class="offline  mt-0 mb-0"></p>Offline</small>
                        </div>
                    </div>
                    <div class="body-chat-message-user">
                        <div class="message-user-left">
                            <div class="message-user-left-img">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <p class="mt-0 mb-0"><strong>Carla Terry</strong></p>
                                <small>min 17:59</small>
                            </div>
                            <div class="message-user-left-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                        <div class="message-user-right">
                            <div class="message-user-right-img">
                                <p class="mt-0 mb-0"><strong>Luis Angel Solano Rivera</strong></p>
                                <small>min 17:59</small>
                                <img src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div class="message-user-right-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>

                        <div class="message-user-left">
                            <div class="message-user-left-img">
                                <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                <p class="mt-0 mb-0"><strong>Carla Terry</strong></p>
                                <small>min 17:59</small>
                            </div>
                            <div class="message-user-left-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                        <div class="message-user-right">
                            <div class="message-user-right-img">
                                <p class="mt-0 mb-0"><strong>Luis Angel Solano Rivera</strong></p>
                                <small>min 17:59</small>
                                <img src="https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                            <div class="message-user-right-text">
                                <strong>Hola, ¿Cómo estás?</strong>
                            </div>
                        </div>
                    </div>
                    <div class="footer-chat-message-user">
                        <div class="message-user-send">
                            <input type="text" placeholder="Aa" />
                        </div>
                        <button type="button">
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Chat;
