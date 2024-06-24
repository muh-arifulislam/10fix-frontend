import { useRouteError } from "react-router-dom";
import NotFound from "../pages/Utils/NotFound";

function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <>
      <NotFound />
    </>
  );
}

export default ErrorBoundary;
