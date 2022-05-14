import React from 'react'
import css from "./Message.module.css"

type MessageDataType = {
    avatar: string
    name: string
    message: string
    time: string
}


function Message(props: MessageDataType) {
    return (
        <div className={css.message}>
            <div>
                <img src={props.avatar} alt="avatar"/>
            </div>
            <div>
                <div>{props.name}</div>
                <div>{props.message}</div>
                <div>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;
