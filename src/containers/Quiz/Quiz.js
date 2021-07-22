import Option from "../../components/Option/Option.js";
import useCheck from "../../hooks/use-check.js";
import classes from "./Quiz.module.css";

const Quiz = () => {
  let {
    isChecked: isAChecked,
    checkHandler: checkAHandler,
    setIsValueChecked: setIsAValueChecked,
  } = useCheck();
  let {
    isChecked: isBChecked,
    checkHandler: checkBHandler,
    setIsValueChecked: setIsBValueChecked,
  } = useCheck();
  let {
    isChecked: isCChecked,
    checkHandler: checkCHandler,
    setIsValueChecked: setIsCValueChecked,
  } = useCheck();
  let {
    isChecked: isDChecked,
    checkHandler: checkDHandler,
    setIsValueChecked: setIsDValueChecked,
  } = useCheck();

  console.log(isAChecked, isBChecked, isCChecked, isDChecked);

  const clear = () => {
    setIsAValueChecked(false);
    setIsBValueChecked(false);
    setIsCValueChecked(false);
    setIsDValueChecked(false);
  };

  const onClickHandler = (checkHandler) => {
    clear();
    checkHandler();
  };

  return (
    <div className={classes.quiz}>
      <h3>Q. What is your name</h3>
      <div className={classes.options}>
        <Option
          click={() => onClickHandler(checkAHandler)}
          checked={isAChecked}
        >
          Student
        </Option>
        <Option
          click={() => onClickHandler(checkBHandler)}
          checked={isBChecked}
        >
          Teacher
        </Option>
        <Option
          click={() => onClickHandler(checkCHandler)}
          checked={isCChecked}
        >
          Student a
        </Option>
        <Option
          click={() => onClickHandler(checkDHandler)}
          checked={isDChecked}
        >
          Teacher a
        </Option>
      </div>
    </div>
  );
};

export default Quiz;
