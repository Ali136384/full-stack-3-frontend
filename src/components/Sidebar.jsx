import {
  faBookmark,
  faCalendarDays,
  faCirclePlay,
  faCircleQuestion,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBriefcase,
  faPeopleGroup,
  faPersonChalkboard,
  faUserGroup,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Sidebar() {
  return (
    <>
      <div className="flex flex-row">
        <div className=" h-[100vh] overflow-y-scroll pt-[4.4%] pl-[1.3%] bg-slate-50 w-[20%] fixed ">
          <div className="icons-static flex flex-col gap-4">
            <div>
              <span>
                <FontAwesomeIcon icon={faWifi} />
              </span>
              <span className=" ml-3">Feed</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span className=" ml-3">Chats</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faCirclePlay} />
              </span>
              <span className=" ml-3">Videos</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faUserGroup} />
              </span>
              <span className=" ml-3">Groups</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faBookmark} />
              </span>
              <span className=" ml-3">Bookmarks</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faCircleQuestion} />
              </span>
              <span className=" ml-3">Questions</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faBriefcase} />
              </span>
              <span className=" ml-3">Jobs</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faCalendarDays} />
              </span>
              <span className=" ml-3">Events</span>
            </div>{" "}
            <div>
              <span>
                <FontAwesomeIcon icon={faPersonChalkboard} />
              </span>
              <span className=" ml-3">Courses</span>
            </div>
            <button className="flex bg-slate-200 w-fit px-9 rounded-md py-2">
              Show More
            </button>
            <hr className="w-[90%] " />
          </div>
          <div className="friends mt-6 flex flex-col gap-3">
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>{" "}
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>{" "}
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>{" "}
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>{" "}
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>{" "}
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>{" "}
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>{" "}
            <div className="flex items-center ">
              <img
                className="h-[36px] w-[40px] rounded-full "
                src="https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
                alt=""
              />
              <span className="ml-3">Ali Kadioglu</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
