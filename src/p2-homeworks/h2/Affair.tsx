import React from 'react'
import {AffairType} from "./HW2";
import css from "./Affairs.module.css"
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const priorityClass = css.item + ' ' + css[props.affair.priority]

    return (
        <div className={css.affair}>
            <div className={css.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <SuperButton red onClick={deleteCallback}>delete</SuperButton>
        </div>
    )
}

export default Affair
