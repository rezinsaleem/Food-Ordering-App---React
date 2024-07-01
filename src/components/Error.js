import { useRouteError } from "react-router-dom";

const Error = () => {
  let err = useRouteError();
  return (
    <div className="errorRoute">
      <h1>Oops!! Something went wrong. </h1>
      <h2>
        {err.status} : {err.statusText}
      </h2>
    </div>
  );
};

export default Error;
