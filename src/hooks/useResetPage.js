import { useEffect } from "react";

const useResetPage = (title) => {
  useEffect(() => {
    window.document.title = title;
    window.scrollTo(0, 0);
  }, []);
};

export default useResetPage;
