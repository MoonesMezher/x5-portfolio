import Container from './Containers/Container'
import './Services.css'
import MainTitle from '../../shared/MainTitle/MainTitle'
import img from '../../../assets/images/home/handshake.jpg'


const Services = () => {
  return (
    <div className='services'>
        <MainTitle title='Services' img={img} style="main-container"/>
        <Container/>
    </div>
  )
}

export default Services