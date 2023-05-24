import { useRouteError } from "react-router-dom";

export default function ProfileError() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
      <h2>Error</h2>
      <div>{error.message}</div>
    </>
  );
}
