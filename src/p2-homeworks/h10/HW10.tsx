import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";
import {DotedLoader} from "./SuperLoader/DotedLoader";

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)
    const dispatch = useDispatch()

    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(()=> {
            dispatch(loadingAC(false))
        }, 50000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <DotedLoader
                        small
                        // Options:
                        // default 30px dots - not required!!!
                        // small 18px dots
                        // large 60px dots
                    />
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
