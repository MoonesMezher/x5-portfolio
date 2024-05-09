import { TAlertProps } from "../../../types"
import MainButton from "../MainButton/MainButton"
import './Alert.css'

const Alert = ( { message, handleNoOption, handleYesOption } : TAlertProps ) => {
    return (
        <div className="alert">
            <h1>{message}</h1>
            <div className="options">
                <div onClick={handleNoOption}>
                    <MainButton title="No" url="#"/>
                </div>
                <div onClick={handleYesOption}>
                    <MainButton title="Yes" url="#"/>
                </div>
            </div>
        </div>
    )
}

export default Alert