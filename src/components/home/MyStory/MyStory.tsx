import img2 from "../../../assets/images/home/happy-bearded-young-mannn.jpg"
import img1 from "../../../assets/images/home/couple-working-from-home-together-sofa.jpg"
import MainTitle from '../../shared/MainTitle/MainTitle'
import "./MyStory.css"

function MyStory() {
    return (
    <>
    <div className="ff-MyStory">
        <div className="main-container">
            <div className="ff-row" >
                <div className="ff-col-6">
                    <img src={img1} alt="about" className="ff-myStory-img1"></img>
                </div> 
                <div className="ff-col-6">
                    <div className="ff-about">
                        <MainTitle img={img2} title={'My Story'} style="main-title"/>
                        <h3 className="ff-text-h3 font-2">a little bit about Joshua</h3>
                        <p className="ff-text-p text-gray font-1 font-weight-1">
                            This one-page HTML portfolio is provided by 
                            <a href="#" className="ff-text-a text-gray"> TemplateMo </a>
                            .This layout is based on Bootstrap v5.1.3 CSS and JS libraries. Image credits go to 
                            <a href="#" className="ff-text-a text-gray"> Unsplash </a>
                            and 
                            <a href="#" className="ff-text-a text-gray"> FreePik </a>
                             for images used in this page.
                        </p>
                        <p className="ff-text-p text-gray font-1 font-weight-1">
                            You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please
                            <a href="#" className="ff-text-a text-gray"> contact us </a>
                             for more info.
                        </p>
                    </div> 
                </div>
            </div>
            
        </div>

    </div>
    </>
  )
}

export default MyStory