import React, { useRef, useState } from "react";
import "./chat.css";
import { useEffect } from "react";
// import { userChats } from "../../api/ChatRequests";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import Layout from "../../Layout";
import { createRoom, getFriendList } from "../../Redux/Actions/ProfileActions";
import { getLocalStorage } from "../../Utils/LocalStorage";
import { baseUrl } from "../../Utils/ApiUrl";
import { BiSend } from "react-icons/bi"

let chatPortURL = "ws://127.0.0.1:8001/ws/testings/";

const Chat = () => {
    const dispatch = useDispatch();
    const friendListState = useSelector((state) => state.Profile)
    const { friendList, friendListLoading, chatRoomList, chatRoomLoading } = friendListState
    const [friendListData, setFriendListData] = useState([])
    const [getSingleFriendData, setGetSingleFriendData] = useState({})
    const [allMassage, setAllMassage] = useState([])

    const chatSocket = new WebSocket(chatPortURL);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const [userId, setUserId] = useState('')
    const [roomName, setRoomName] = useState('');
    const [u_id, setU_id] = useState(null)
    const [id, setid] = useState("");
    const [sendMessage, setSendMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        chatSocket.onopen = function (e) {
            console.log("The connection was setup successfully !");
        };
        chatSocket.onclose = function (e) {
            console.log("Something unexpected happened !");
        };
        chatSocket.onmessage = function (e) {
            debugger;
            const data = JSON.parse(e.data);
            // setMessages((messages) => [...messages, data]);
        }
    }, []);

    useEffect(() => {
        let list = [
            { username: "Rakesh", message: "Hi", date: new Date().toLocaleTimeString(), id: 1, image: "/assets/images/background/bg.jpg" },
            { username: "Paras", message: "Hello", date: new Date().toLocaleTimeString(), id: 2, image: "/assets/images/background/bg.jpg" },
            { username: "Paras", message: "How are you?", date: new Date().toLocaleTimeString(), id: 2, image: "/assets/images/background/bg.jpg" },
            { username: "Rakesh", message: "I am good", date: new Date().toLocaleTimeString(), id: 1, image: "/assets/images/background/bg.jpg" },
        ]
        setMessages(list)
    }, []);

    const handleSendMessage = (e) => {
        e.preventDefault();
        let data = { username: "asdds", message: sendMessage, room_name: "first_room" };
        setSendMessage('');
        debugger;
        console.log("tesitng socket", data);
        // chatSocket.send(JSON.stringify(data));

    }

    useEffect(() => {
        if (friendList) {
            setFriendListData(friendList)
        }
    }, [friendList])

    useEffect(() => {
        dispatch(getFriendList(getLocalStorage("user_id")))
    }, [getLocalStorage("user_id")])

    useEffect(() => {
        if (u_id) {
            let getSingle = friendListData.find((item) => item.id == u_id);
            setGetSingleFriendData(getSingle);
            console.log(getSingle, "getSingle");
        }
    }, [u_id])

    const handleCurrentChatUser = (item) => {
        dispatch(createRoom(item.slug));
        setRoomName(item.slug);
        setU_id(item.id)
        setUserId(item.user)
    }

    return (
        <Layout>
            <section style={{ padding: "100px 0" }}>
                <div className="content-chat mt-20">
                    <div className="content-chat-user">
                        <div className="head-search-chat">
                            <h4 className="text-center">Chat Finder</h4>
                        </div>

                        <div className="search-user mt-30">
                            <input id="search-input" type="text" placeholder="Search..." name="search" className="search" />
                            <span>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>

                        <div className="list-search-user-chat mt-20">
                            {friendListData && friendListData.map((item, index) => {
                                return (
                                    <div className="user-chat" key={index}
                                        data-username={item?.first_name.charAt(0).toUpperCase() +
                                            item?.first_name.slice(1) + " " +
                                            item?.last_name.charAt(0).toUpperCase() +
                                            item?.last_name.slice(1)}
                                        onClick={() => handleCurrentChatUser(item)}>
                                        <div className="user-chat-img">
                                            <img src={item?.profile_image ? baseUrl + item?.profile_image :
                                                "/assets/images/background/bg.jpg"} alt="user_image" />
                                            <div className="offline"></div>
                                        </div>

                                        <div className="user-chat-text">
                                            <p className="mt-0 mb-0"><strong>{item?.first_name.charAt(0).toUpperCase() + item?.first_name.slice(1) + " " + item?.last_name.charAt(0).toUpperCase() + item?.last_name.slice(1)}</strong></p>
                                            <small>Hi, how are you?</small>
                                        </div>
                                    </div>
                                )
                            })}


                            {/* <div className="user-chat" data-username="Jorge Harrinson">
                                <div className="user-chat-img">
                                    <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className="online"></div>
                                </div>

                                <div className="user-chat-text">
                                    <p className="mt-0 mb-0"><strong>Jorge Harrinson</strong></p>
                                    <small>Hi, how are you?</small>
                                </div>
                            </div> */}

                            {/* <div className="user-chat" data-username="Carla Terry">
                                <div className="user-chat-img">
                                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                                    <div className="offline"></div>
                                </div>

                                <div className="user-chat-text">
                                    <p className="mt-0 mb-0"><strong>Carla Terry</strong></p>
                                    <small>Hi, how are you?</small>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {u_id ?
                        <div className="content-chat-message-user" data-username="Maria Dennis">

                            <div className="head-chat-message-user">

                                <img src={getSingleFriendData?.profile_image ? baseUrl + getSingleFriendData?.profile_image : "/assets/images/background/bg.jpg"} alt="" />
                                <div className="message-user-profile">
                                    <p className="mt-0 mb-0 text-white"><strong>{getSingleFriendData?.first_name?.charAt(0).toUpperCase() + getSingleFriendData?.first_name?.slice(1) + " " + getSingleFriendData?.last_name?.charAt(0).toUpperCase() + getSingleFriendData?.last_name?.slice(1)}</strong></p>
                                    <small className="text-white"><p className="offline  mt-0 mb-0"></p>Offline</small>
                                </div>
                            </div>
                            <div className="body-chat-message-user">
                                {!!messages?.length && messages?.map((item) => {
                                    return (
                                        <div className={item?.id == u_id ? "message-user-left" : "message-user-right"}>
                                            <div className={item?.id == u_id ? "message-user-left-img" : "message-user-right-img"}>
                                                <img src={item.image} alt="" />
                                                <p className="mt-0 mb-0"><strong>{item.username}</strong></p>
                                                <small>{item.date}</small>
                                            </div>
                                            <div className={item?.id == u_id ? "message-user-left-text" : "message-user-right-text"}>
                                                <strong>{item.message}</strong>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="footer-chat-message-user">
                                <div className="message-user-send">
                                    <input type="text" value={sendMessage} placeholder="Please write message" onChange={(e) => setSendMessage(e.target.value)} />
                                </div>
                                <button type="button" onClick={handleSendMessage}>
                                    <BiSend size={25} />

                                </button>
                            </div>
                        </div>
                        :
                        <div className="content-chat-message-user chat-content-empty p-0 h-100%" data-username="Maria Dennis">
                            <div className="body-chat-message-user m-0">
                                <p classNameName="text-center pt-2">Tab on a chat to start conversation</p>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </Layout>
    );
};

export default Chat;
