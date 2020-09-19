import React, {useContext} from 'react'
import {GlobalContext} from "../../../context/GlobalState"

const AlertModal = () => {
    const {alert_msg} = useContext(GlobalContext);


    return (
        <div>
            {alert_msg.error || alert_msg.msg ? 
            <div className={alert_msg.error ? "red-alert" : "green-alert"}>
                <h1>{alert_msg.error || alert_msg.msg}</h1>
            </div> : null}
        </div>
    )
}

export default AlertModal
