import Img1 from '../../../assets/images/home/cachet.svg'
import Img2 from '../../../assets/images/home/guitar-center.svg'
import Img3 from '../../../assets/images/home/tokico.svg'
import Img4 from '../../../assets/images/home/shopify.svg'
import Img5 from '../../../assets/images/home/profil-rejser.svg'
import './Companies.css'

const Companies = () => {
    const imgs: Array<string> = [Img1, Img2, Img3, Img4, Img5];
    
    return (
        <div className='mm-companies'>
            <div className='main-container'>
                <h1 className='font-2'>Companies I've had worked</h1>
                <div className='mm-companies-grid'>
                    {imgs.map((e, i) => <img key={i} src={e} alt={e} loading='lazy'/>)}
                </div>
            </div>
        </div>
    )
}

export default Companies