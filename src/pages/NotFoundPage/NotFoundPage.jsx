// import React from 'react'

import { Link } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <nav className={s.container}>
      <Link to="/" className={s.link}>
        Home
      </Link>
    </nav>
  );
};

export default NotFoundPage;
