import { useContext } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "Arohi",
      img: "https://images.pexels.com/photos/23407498/pexels-photo-23407498/free-photo-of-mountain-over-evergreen-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 2,
      name: "Abhi",
      img: "https://images.pexels.com/photos/17225657/pexels-photo-17225657/free-photo-of-view-of-half-moon-on-a-cloudy-night-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 3,
      name: "Sara",
      img: "https://images.pexels.com/photos/32138731/pexels-photo-32138731/free-photo-of-vibrant-orange-poppy-in-serene-spring-meadow.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
      id: 4,
      name: "Sophia",
      img: "https://images.pexels.com/photos/14574439/pexels-photo-14574439.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
  ];

  return (
    <div className="stories">
      <div className="story">
          <img src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"alt="" />
          <span>Sushi</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story" key={story.id}>
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories