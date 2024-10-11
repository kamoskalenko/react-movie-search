import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NotifyNoQuery = () => {
  useEffect(() => {
    toast.info(
      `Oops! Our image gallery took a coffee break. Let's refresh and try again`,
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

export default NotifyNoQuery;
