import React, { useContext } from "react";
import { UserContext } from "../../context/userProvider";

function DashBoard() {
  const { currentUser } = useContext(UserContext);

  // console.log(currentUser);

  const showMyTrees = async () => {
    const myTrees = await fetch(
      `http://localhost:5000/api/v1/users/my-trees?referredID=${currentUser?.referredID}`
    );
  };
  return (
    <div className="mt-[90px] ">
      <div>
        <h1>
          your name:
          <span className="ml-4 font-bold text-lg text-green-700">
            {currentUser.name}
          </span>
        </h1>
        <h1 className="font-bold text-lg">
          your email:
          <span className="ml-4 font-bold text-lg text-green-700">
            {currentUser.email}{" "}
          </span>
        </h1>
        <h1 className="font-bold text-lg">
          your Id is
          <span className="ml-4 font-bold text-lg text-green-700">
            {currentUser.referredID}
          </span>
        </h1>

        <h1 className="font-bold text-lg">
          you referred to
          <span className="ml-4 font-bold text-lg text-green-700">
            {currentUser.referredTo}{" "}
          </span>
        </h1>
      </div>

      <div>
        <button
          onClick={showMyTrees}
          className="bg-gray-300 rounded-lg px-4 py-2 font-semibold"
        >
          My Trees
        </button>
      </div>
    </div>
  );
}

export default DashBoard;
