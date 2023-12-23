import {
  faBell,
  faCommentDots,
  faSearch,
  faUserLarge,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../App.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="flex flex-row h-[55px] z-[1000] p-6 justify-between items-center bg-blue-500 fixed w-full gap-10">
        <div className="title text-white font-bold text-[25px] w-[20%]">
          AliHaseni
        </div>
        <div className="search w-[45%] relative">
          <FontAwesomeIcon
            className="text-[14px] flex justify-center items-center font-bold absolute left-3 top-2 "
            icon={faSearch}
          />
          <input
            className="w-full pl-9 py-1 rounded-2xl outline-none"
            type="text"
            placeholder="Search for friend, post or video"
          />
        </div>
        <div className="content w-[45%] flex justify-between items-center">
          <div className="text  ">
            <span className="text-white font-medium">Homepage</span>
            <Link to="/profile">
              <span className=" ml-2 font-medium text-white">Profile</span>
            </Link>
          </div>
          <div className="icons w-[20%] flex justify-around mx-4 ">
            <span className="before">
              <FontAwesomeIcon className="text-white" icon={faUserLarge} />
            </span>
            <span className="before">
              <FontAwesomeIcon className="text-white" icon={faCommentDots} />
            </span>
            <span className="before">
              <FontAwesomeIcon className="text-white" icon={faBell} />
            </span>
          </div>
          <Link to="/profile">
            <div className="photo w-8  ">
              <img
                src="https://img.freepik.com/free-vector/stylish-man-head-white-background_1308-114950.jpg"
                alt=""
                className=" rounded-3xl"
              />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

// <div className="right-side w-[43%] bg-slate-50 p-2 m-2 h-auto ">
// <div className="ads">
//   <div className="text flex gap-6 mb-3">
//     <div className="box-parent rounded-md">
//       <div className="top h-2 w-10 bg-red-600 skew-y-12 rounded-md ">
//         <span className="h-full w-2 bg-yellow-500  flex ml-[50%] translate-x-[-50%]"></span>
//       </div>
//       <div className="box h-8 w-10 bg-red-500 ">
//         <span className="h-full w-2 bg-yellow-500  flex ml-[50%] translate-x-[-50%]"></span>
//       </div>
//     </div>
//     <h2>
//       <b>Ali haseni</b> and <b>3 other friends</b> have a birthday
//       today
//     </h2>
//   </div>
//   <div className="img">
//     <img
//       className="w-full rounded-xl"
//       src="data:image/jpeg;base64,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"
//       alt=""
//     />
//   </div>
// </div>
// <div className="online-friends flex flex-col mt-6 gap-4">
//   <h2 className="mb-2 font-bold text-[18px]">Online Friends</h2>
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>{" "}
//   <div className="friend flex gap-2 items-center">
//     <div className="img imgbefore">
//       <img
//         className=" h-12 w-12 rounded-full "
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0dIJeSvzFlTktMDAjWLpBw6aFp8zIUyJevw&usqp=CAU"
//         alt=""
//       />
//     </div>
//     <p>Ahmad Haseni</p>
//   </div>
// </div>
// </div>
