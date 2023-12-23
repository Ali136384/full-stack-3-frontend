import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLocationDot,
  faPhotoFilm,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

const posts = [
  { id: 1, craetor: "Ali HASENI", likes: 40, comments: 12 },
  { id: 2, craetor: "Isa Isa", likes: 21, comments: 12 },
  { id: 3, craetor: "Adnan Ahmed", likes: 4, comments: 12 },
  { id: 4, craetor: "Khaled Jamal", likes: 14, comments: 12 },
  { id: 5, craetor: "Omar Kattan", likes: 32, comments: 12 },
  { id: 6, craetor: "Rined Arab", likes: 5, comments: 12 },
  { id: 7, craetor: "Hasan Haseni", likes: 33, comments: 12 },
];

function Profile() {
  const [postLikes, setPostLikes] = useState(posts.map((post) => post.likes));

  const [likedPosts, setLikedPosts] = useState([]);

  console.log(likedPosts);
  const handleLikeClick = (postId) => {
    if (likedPosts.includes(postId)) {
      const updatedLikes = postLikes.map((likes, index) =>
        index === postId ? likes - 1 : likes
      );
      setPostLikes(updatedLikes);
      setLikedPosts(likedPosts.filter((id) => id !== postId));
    } else {
      const updatedLikes = postLikes.map((likes, index) =>
        index === postId ? likes + 1 : likes
      );
      setPostLikes(updatedLikes);
      setLikedPosts([...likedPosts, postId]);
    }
  };

  return (
    <>
      <Sidebar></Sidebar>
      <div className="mt-[55px] ml-[20%] w-[80%] flex justify-center items-center flex-col">
        <div className="images w-full relative flex flex-col">
          <img
            className="w-[100%] h-[400px] "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vAZgKtu42Lpm-FY3nc17ReUbB-NFnurwoQ&usqp=CAU"
            alt=""
          />
          <img
            className="w-[140px]  top-[73%] rounded-[50%] outline-slate-100 outline-2 outline-double left-[50%] translate-x-[-50%] z-4 h-[140px] absolute"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-vAZgKtu42Lpm-FY3nc17ReUbB-NFnurwoQ&usqp=CAU"
            alt=""
          />
        </div>
        <div className="text mt-14 flex items-center flex-col">
          <p>
            <b className="text-[20px]">Ali Haseni</b>
          </p>
          <p>Hello Friend</p>
        </div>
      </div>
      <div className="div flex">
        <div className="posts-posts w-[45%] ml-[23%]">
          <div className="create h-[120px] shadow-lg w-full mt-2">
            <div className="input-img ml-3 flex ">
              <img
                className="h-[40px] w-[45px] rounded-3xl"
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <input
                type="text"
                className="ml-2 outline-none w-[80%]"
                placeholder="Share us What You thinking About"
              />
            </div>
            <hr className="w-[90%] my-2 mx-auto " />
            <div className="all flex justify-between p-2 mx-8">
              <div className="icons flex gap-4">
                <div>
                  <span>
                    <FontAwesomeIcon
                      className="text-red-400"
                      icon={faPhotoFilm}
                    />
                  </span>{" "}
                  <span>Photo or Music</span>
                </div>
                <div>
                  <span>
                    <FontAwesomeIcon className="text-green-700" icon={faTag} />
                  </span>{" "}
                  <span> Tag</span>
                </div>{" "}
                <div>
                  <span>
                    <FontAwesomeIcon
                      className=" text-yellow-500"
                      icon={faLocationDot}
                    />
                  </span>{" "}
                  <span> Location</span>
                </div>{" "}
                <div>
                  <span>
                    <FontAwesomeIcon
                      className="text-red-700"
                      icon={faFaceSmile}
                    />
                  </span>{" "}
                  <span>Feelings</span>
                </div>
              </div>
              <button className="bg-green-600 px-2 py-1 rounded-md text-white">
                Share
              </button>
            </div>
          </div>
          {posts.map((post, index) => {
            return (
              <>
                <div className="post h-[520px] shadow-md w-full mt-7">
                  <div className="head px-2 py-1 flex justify-between">
                    <div className="info flex justify-center items-center gap-3">
                      <img
                        className="h-[34px] w-[34px] rounded-full"
                        src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                        alt=""
                      />
                      <span>{post.craetor}</span>
                      <span className=" opacity-75">5 min ago</span>
                    </div>
                    <div className="three-dots flex flex-col cursor-pointer">
                      <span className="h-1 font-bold mb-[1px]">.</span>
                      <span className="h-1 font-bold mb-[1px]">.</span>
                      <span className="h-1 font-bold ">.</span>
                    </div>
                  </div>
                  <div className="content">
                    <div className="img">
                      <img
                        className="w-full h-[400px] mt-2"
                        src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-between items-center px-1">
                      <div className="likes-comments flex gap-[5px] items-center my-[12px] p-2">
                        <button
                          onClick={() => handleLikeClick(index)}
                          className="text-blue-500"
                        >
                          <FontAwesomeIcon icon={faThumbsUp} />
                        </button>
                        <button
                          onClick={() => handleLikeClick(index)}
                          className="text-red-700"
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                        <div className="how-much">
                          {postLikes[index]} people liked
                        </div>
                      </div>
                      <div className="comments">Comments {post.comments}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="right-side  ml-[70%]  w-full absolute">
          <div className="info flex gap-3 flex-col">
            <p className="text-[24px] ">
              <b>User Information</b>
            </p>
            <p>
              City : <span>New York</span>
            </p>
            <p>
              From : <span>Madira</span>
            </p>
            <p>
              Relagon : <span>Islam</span>
            </p>
          </div>
          <h2 className="mt-4 font-bold text-[20px]">Your Friends</h2>
          <div className="profile-friend w-[29%] gap-4 items-center mt-5">
            <div className="friend flex flex-col w-[160px]">
              <img
                className="w-[160px] rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-6KwJ1ypuwhV5kooBkE2NbAjV-AmvvOxMA&usqp=CAU"
                alt=""
              />
              <p>Ali Isa Towait</p>
            </div>
            <div className="friend flex flex-col">
              <img
                className="w-[160px] rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-6KwJ1ypuwhV5kooBkE2NbAjV-AmvvOxMA&usqp=CAU"
                alt=""
              />
              <p>Ali Isa Towait</p>
            </div>
            <div className="friend flex flex-col">
              <img
                className="w-[160px] rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-6KwJ1ypuwhV5kooBkE2NbAjV-AmvvOxMA&usqp=CAU"
                alt=""
              />
              <p>Ali Isa Towait</p>
            </div>
            <div className="friend flex flex-col">
              <img
                className="w-[160px] rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-6KwJ1ypuwhV5kooBkE2NbAjV-AmvvOxMA&usqp=CAU"
                alt=""
              />
              <p>Ali Isa Towait</p>
            </div>
            <div className="friend flex flex-col">
              <img
                className="w-[160px] rounded-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi-6KwJ1ypuwhV5kooBkE2NbAjV-AmvvOxMA&usqp=CAU"
                alt=""
              />
              <p>Ali Isa Towait</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
