import React, {ChangeEvent} from 'react'
import css from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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
    // const inputClass = error ? s.red : ""; // need to fix with (?:)
    // const spanClass = error ? s.redspan : ""; // need to fix with (?:)


    return (
        <div className={css.flex}>
            <div className={css.greeting}>
                <SuperInputText
                    value={name}
                    onChange={setNameCallback}
                    error={error}
                    onBlur={setNameCallback}
                    // spanClassName={s.testSpanError}
                />
                {/*<input onBlur={setNameCallback} value={name} onChange={setNameCallback} className={inputClass}/>*/}
                <SuperButton onClick={addUser}>Add</SuperButton>
            </div>

            <span className={css.count}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
