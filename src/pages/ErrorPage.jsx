import { Link, useRouteError } from "react-router-dom";
import Button from "../components/Button";
import { MoveRight, TriangleAlert } from "lucide-react";
function ErrorPage() {
  const error = useRouteError();
  if (error.status == 404) {
    return (
      <>
        <div className="h-screen flex items-center justify-center ">
          <div
            className="flex flex-col items-center justify-center rounded-[15px] py-15
                         bg-white gap-10 w-[80%] max-w-[1200px] shadow-lg shadow-gray-300/50 "
          >
            <h1
              className="text-center text-7xl font-bold bg-gradient-to-r
                         from-purple-500 via-pink-400 to-orange-300 bg-clip-text text-transparent py-1"
            >
              Page Not Found
            </h1>
            <h3 className="text-4xl font-semibold">Opps!</h3>
            <p className="max-w-[80ch] text-center px-4">
              Well, this is a paw-sitive disaster! 🐾 <br />
              The page you're looking for has probably been knocked off the
              table by a curious cat. <br />
              Try another one!
            </p>
            <Link to="/">
              <Button label="Keep Exploring" icon={MoveRight} />
            </Link>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="h-screen flex items-center justify-center ">
        <div
          className="flex flex-col items-center justify-center rounded-[15px] py-20 
                         bg-white p-12 gap-5 w-[80%] max-w-[1200px] shadow-lg shadow-gray-300/50 "
        >
          <TriangleAlert className="w-[12rem] h-[12rem]" />

          <h1
            className="text-center pb-5 text-4xl font-bold bg-gradient-to-r
                         from-purple-500 via-pink-400 to-orange-300 bg-clip-text text-transparent"
          >
            Something went wrong :(
          </h1>
          <Link to="/">
            <Button label="Go to Home" icon={MoveRight} />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
