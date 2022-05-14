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
                <img className={css.avatar} src={props.avatar} alt="avatar"/>
            </div>
            <div className={css.angel}/>
            <div className={css.content}>
                <div className={css.name}>{props.name}</div>
                <div className={css.text}>{props.message}</div>
                <div className={css.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message;
