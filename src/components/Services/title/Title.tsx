import './Title.css'

import img from '../../../assets/images/home/handshake.jpg'

const Title = () => {
  return (
    <div className='services_title'>
        <img src={ img } alt="handshake" />
        <h2>Services</h2>
    </div>
  )
}

export default Title