import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userProvider";

function DashBoard() {
  const { currentUser } = useContext(UserContext);
  const [myTrees, setMyTrees] = useState([]);
  // console.log(currentUser);

  const showMyTrees = async () => {
    const res = await fetch(
      `http://localhost:5000/api/v1/users/my-trees?referredID=${currentUser?.referredID}`
    );

    const result = await res.json();
    console.log(result);
    if (result.success) {
      setMyTrees(result.data);
    } else {
      // some thing went wrong
    }
  };

  useEffect(() => {
    showMyTrees();
  }, []);
  return (
    <div className="mt-[90px] ">
      <div>
        <h1 className="font-bold text-lg">
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

        {currentUser.referredTo === 0 ? (
          <div>
            <h1>
              You are the first user. So, Your referral upper tree is clean
            </h1>
          </div>
        ) : (
          <h1 className="font-bold text-lg">
            you referred to
            <span className="ml-4 font-bold text-lg text-green-700">
              {currentUser.referredTo}
            </span>
          </h1>
        )}
      </div>

      <div className="mt-[50px] ml-[50px]">
        <button
          onClick={showMyTrees}
          className="bg-gray-300 rounded-lg px-4 py-2 font-semibold"
        >
          My Trees
        </button>
      </div>

      {/* // refer trees */}
      <div className="ml-[50px]">
        {myTrees?.length !== 0 ? (
          <div>
            {myTrees.map((eachTree, index) => (
              <div key={index} className="border-black border py-1 my-1 px-2">
                <h1>treeID: {eachTree?.referredID}</h1>
                <h1>tree Email: {eachTree?.email}</h1>
                <h1>tree name: {eachTree?.name}</h1>
              </div>
            ))}
          </div>
        ) : (
          <div>your tree is empty</div>
        )}
      </div>
    </div>
  );
}

export default DashBoard;
