import'./CardProject.css'

function CardProject({ category,title, image} : { category: string, title: string, image: string } ) {
  return (
    <div className="ne-card-project">
        <div className="project-info">
            <p> {category} </p>
            <h3> {title} </h3>
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default CardProject