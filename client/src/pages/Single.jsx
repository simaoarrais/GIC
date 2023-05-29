import React from "react";
import { Link } from "react-router-dom";

// Import Components
import Menu from "../components/Menu";

// Impoter Media
import Edit from "../images/edit.png";
import Delete from "../images/delete.png";

const Single = () => {
    return (
        <div className="single">
            <div className="content">
                <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/1181579/pexels-photo-1181579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted 2 days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={"/write?edit=2"}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                <p>Lorem ipsum dolor sit amet. Sed quam voluptatem qui commodi molestiae est optio tempora. Nam blanditiis aspernatur in explicabo molestiae et dolores voluptatibus. </p><p>Est culpa dolor eos enim ipsa qui commodi odio. Ut debitis maxime eos nihil labore et delectus culpa ea pariatur omnis. </p><p>Eum adipisci veritatis ea aliquid beatae ea nesciunt laboriosam ut galisum odio At deleniti consectetur eos voluptatem molestiae qui iure molestias! Et quisquam beatae et aspernatur tenetur in nostrum enim est corrupti quod sit consectetur alias quo vitae nostrum id numquam enim. Ea accusantium galisum non dolorem explicabo non doloribus vero et galisum omnis vel error sunt ut alias iste. Et quis Quis ut obcaecati ratione quo corporis dolor qui necessitatibus accusantium ut veniam eius. </p>
            </div>
            <Menu />
        </div>
      );
};

export default Single;
