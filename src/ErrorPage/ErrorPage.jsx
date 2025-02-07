import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="text-center mt-20">
      <h1 className="text-4xl font-bold text-red-600">Oops! Something went wrong 😢</h1>
      <p className="text-xl mt-4"> {error.status === 404 ? "Page Not Found" : "An unexpected error occurred!"} </p>
      <p className="text-gray-500 mt-2">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
