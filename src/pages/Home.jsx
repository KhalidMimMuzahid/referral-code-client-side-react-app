import { useContext } from "react";
import { UserContext } from "../context/userProvider";

function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="mt-[100px] text-[50px]">
      {currentUser?.email ? (
        <div>Welcome {currentUser?.name} !</div>
      ) : (
        <div>
          <h1>Hi! Please signup or login</h1>
        </div>
      )}
    </div>
  );
}

export default Home;
