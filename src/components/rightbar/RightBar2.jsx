import "./rightbars.scss";
import pic1 from "../../assets/1751368782565pexels-pastor-32739270.jpg";
import pic2 from "../../assets/1751274488382pexels-minan1398-853168.jpg";
import pic3 from "../../assets/1751372549779pexels-pixabay-45201.jpg";
import pic4 from "../../assets/1751373891238pexels-pixabay-372980.jpg";
import pic5 from "../../assets/1751376604435Screenshot 2025-07-01 185644.png";
import pic6 from "../../assets/1751372207966pexels-pixabay-207891.jpg";
import pic7 from "../../assets/1751368782565pexels-pastor-32739270.jpg";

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={pic2}
                alt=""
              />
              <span>Markus</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
           <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <span>Madison</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={pic3}
                alt=""
              />
              <span>Doodles</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={pic7}
                alt=""
              />
              <p>
                <span>Monchi Panda</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={pic4}
                alt=""
              />
              <p>
                <span>Foodie</span> changed their cover picture
              </p>
            </div>
            <span>3 Hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={pic5}
                alt=""
              />
              <p>
                <span>Abhimanyu</span> changed their cover picture
              </p>
            </div>
            <span>10 Hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={pic6}
                alt=""
              />
              <p>
                <span>Sophia</span> changed their profile picture
              </p>
            </div>
            <span>45 mins ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://ix-marketing.imgix.net/focalpoint.png?auto=format,compress&w=1946"
                alt=""
              />
              <div className="online" />
              <span>Riley</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVvcGxlfGVufDB8fDB8fHww"
                alt=""
              />
              <div className="online" />
              <span>Ethan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="online" />
              <span>Cole</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://plus.unsplash.com/premium_photo-1682681907111-c13bc10b1587?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="online" />
              <span>Marley</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="online" />
              <span>Peter</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://media.istockphoto.com/id/1398994132/photo/happy-businesswoman-using-a-digital-tablet-young-leading-businesswoman-using-a-wireless.jpg?s=612x612&w=0&k=20&c=BM3E3osJBZSukhs98G6vn7HXe8QQTExGaymi2a61T3E="
                alt=""
              />
              <div className="online" />
              <span>Quinn</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="online" />
              <span>Skyler</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
              <div className="online" />
              <span>Jordan</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="online" />
              <span>Taylor</span>
            </div>
          </div>
         
         
        </div>
      </div>
    </div>
  );
};

export default RightBar;