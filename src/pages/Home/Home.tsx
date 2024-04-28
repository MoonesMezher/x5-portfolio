import Companies from '../../components/home/Companies/Companies'
import Hero from '../../components/home/Hero/Hero'
import './Home.css'

const Home = () => {
    return (
        <section className="home page">
            <Hero/>
            <Companies/>
        </section>
    )
}

export default Home