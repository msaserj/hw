import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>)=> void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.red : ""; // need to fix with (?:)
    const spanClass = error ? s.redspan : ""; // need to fix with (?:)

    return (
        <div>
            <input onBlur={setNameCallback} value={name} onChange={setNameCallback} className={inputClass}/>
            <button onClick={addUser}>add</button>
            <span>  {totalUsers}</span>
            <div className={s.spanblock}><span className={spanClass}> {error} </span></div>
        </div>
    )
}

export default Greeting
