import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center bg-slate-300 flex-col">
      <h1 className="font-bold text-2xl">Oops!</h1>
      <p className="my-3 text-xl">Sorry, an unexpacted error has occured</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
