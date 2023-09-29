import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../Layout'
import { acceptRequest, getAllNotification } from '../../Redux/Actions/ProfileActions'
import { getLocalStorage } from '../../Utils/LocalStorage'

const Notification = () => {
    const notificationState = useSelector(state => state.Profile.allNotificationData
    )
    const [notificationData, setNotificationData] = useState([])
    const dispatch = useDispatch()
    const handleAccept = (item) => {
        item.approved = true;
        dispatch(acceptRequest(item))
    }

    useEffect(() => {
        if (notificationState) {
            setNotificationData(notificationState)
        }
    }, [notificationState])
    useEffect(() => {
        let quary = `?liked_user_id=${getLocalStorage("user_id")}`
        dispatch(getAllNotification(quary))
    }, [])
    console.log(notificationData, "notificationState");
    return (
        <div>
            {notificationData && notificationData?.map((item) => {
                return (
                    <div>
                        <h2>hello</h2>
                        <button onClick={() => handleAccept(item
                        )}>accept</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Notification