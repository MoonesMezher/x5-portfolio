import './Loading.css'

const Loading = ({ loading } : { loading: boolean }) => {
    if(loading) {
        return (
        <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
        </div>
        )
    }
}

export default Loading