import Companies from '../../components/home/Companies/Companies'
import Hero from '../../components/home/Hero/Hero'
import MyProject from '../../components/MyProject/MyProject'
import './Home.css'

const Home = () => {
    
    return (
        <section className="home page">
            <Hero/>
            <Companies/>            
            <MyProject/>
        </section>
    )
}

export default Home