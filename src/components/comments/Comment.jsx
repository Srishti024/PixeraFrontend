import { useContext } from "react";
import "./Comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "SUCH A NICE THOUGHT WITH PICTURE THAT EMBRACE",
      name: "Riley",
      userId: 1,
      profilePicture:
        "https://ix-marketing.imgix.net/focalpoint.png?auto=format,compress&w=1946",
    },
    {
      id: 2,
      desc: "WOW",
      name: "Ethan",
      userId: 2,
      profilePicture:
        "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww"
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;