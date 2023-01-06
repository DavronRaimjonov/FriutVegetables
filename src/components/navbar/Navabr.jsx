import { useContext, useState } from "react";
import { Context } from "../../context";
import { link } from "../../data";
import logo from "../../img/Logo.png";
import shop from "../../img/shop.png";
import styles from "./Navbar.module.scss";
import "./Navbar.scss";
const Navabr = () => {
  const [left, setLeft] = useState(false);
  const { state } = useContext(Context);
  const onLeft = () => {
    setLeft((prev) => !prev);
  };
  const counet = state.data.filter((item) => item.like).length;
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.navbar}>
          <nav className={styles["navbar_logo"]}>
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </nav>
          <nav className={`navbar_links ${left && "left"}`}>
            <ul>
              {link.map((links) => (
                <li key={links.id}>
                  <a href="#">{links.name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav className={styles["navbar_icon"]}>
            <div className="liked">
              <i className="fa-regular fa-heart"></i>
              <p className="count">{counet}</p>
            </div>
            <img src={shop} alt="" />
            <i onClick={onLeft} className={`fa-solid fa-bars hidden`}></i>
          </nav>
        </nav>
      </div>
      <div onClick={onLeft} className={`outline ${left && "none"}`}></div>
    </header>
  );
};

export default Navabr;
