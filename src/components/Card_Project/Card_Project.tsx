import'./Card_Project.css'

function Card_Project(props) {
  return (
    <div className="ne-card-project">
        <div className="project-info">
            <p> {props.category} </p>
            <h3> {props.title} </h3>
        </div>
        <img src={props.image} alt="" />
    </div>
  )
}

export default Card_Project