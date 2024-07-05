import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  return (
    <div className="text-red-500">
      <h1 className="flex justify-center">Oops!! Something went wrong. </h1>
      <h2 className="flex justify-center">
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
