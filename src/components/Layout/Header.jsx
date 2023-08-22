import classes from "./Header.module.css";
import food from "../../assets/food.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img
          src={food}
          alt="An image of a tofu bowl"
        />
      </div>
    </>
  );
};
export default Header;
