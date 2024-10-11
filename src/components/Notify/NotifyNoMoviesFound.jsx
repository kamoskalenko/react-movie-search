import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotifyNoMoviesFound = () => {
  useEffect(() => {
    toast.info(
      `Oops! We didn't find any movies for your query. Try a different title!`,
      {
        position: "top-center",
        theme: "colored",
      }
    );
  }, []);

  return (
    <div>
      <ToastContainer style={{ width: "400px" }} />
    </div>
  );
};

export default NotifyNoMoviesFound;
