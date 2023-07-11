import { useParams } from "react-router-dom";

export const UserDeatils = () => {
  const { userId } = useParams();
  return (
    <>
      <div>Details about user {userId}</div>
    </>
  );
};
