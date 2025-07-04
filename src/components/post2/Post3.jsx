import Post from "../post/Post2";
import "./Posts2.scss";
import user1Img from "../../assets/1751376039935pexels-athena-1758144.jpg";
import user2Img from "../../assets/1751373224112pexels-vince-2233348.jpg"; //pizza
import user3Img from "../../assets/1751469780473pexels-pixabay-210237.jpg";//horse;
import user4Img from"../../assets/1751368399194pexels-pixabay-64219.jpg";// doodles penguin
import user5Img from"../../assets/1751376604435Screenshot 2025-07-01 185644.png"; //trishul
import user6Img from "../../assets/1751368782565pexels-pastor-32739270.jpg";
import user7Img from "../../assets/1751373891238pexels-pixabay-372980.jpg";
const Posts = () => {
  //TEMPORARY
  const posts = [
   
    {
      id: 1,
      name: "Foodie",
      userId: 1,
      profilePic:user2Img,
    
      desc:"Food is my love language.Good food = good mood. ",
       img:user2Img,
    },
    {
      id: 2,
      name: "Sara",
      userId: 2,
      profilePic:user1Img,
        
      desc: "Outfit? Checked. Confidence? Double checked.",
      img: user1Img,
    },
    {
      id: 3,
      name: "Sophia",
      userId: 3,
     profilePic:user3Img,
      img:user3Img,
      desc: "Horses and me ",
    },
    
     {
      id: 4,
      name: "Monchi Panda",
      userId: 4,
    profilePic:user6Img,
      img:user6Img,
      desc: "Pandas don’t rush — they just roll through life with cuddles and bamboo!"
    },
      {
      id: 5,
      name: "Arohi",
      userId: 5,
    profilePic:user7Img,
      img:user7Img,
      desc: "Clear, calm, and essential — water reflects the elegance of nature.Timeless and transparent, It holds the rhythm of the universe"
    },
    {
      id: 6,
      name: "Abhimanyu",
      userId: 6,
      profilePic:user5Img,
      img:user5Img,
      desc: "True power is silent — it doesn’t need to announce itself.Real strength is measured not by force, but by influence",

    }
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;