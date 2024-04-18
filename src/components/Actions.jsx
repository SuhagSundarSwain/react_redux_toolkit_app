import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import { privacyActions } from "../store/privacy";

export default function Actions() {
  const valueElement = useRef(0);
  const privacy = useSelector((store) => store.privacy);
  const dispatch = useDispatch();

  const handalIncrement = () => dispatch(counterActions.increment());
  const handalDecrement = () => dispatch(counterActions.decrement());
  const handalAdd = () =>
    dispatch(counterActions.add(Number(valueElement.current.value)));
  const handalSubstract = () =>
    dispatch(counterActions.subtract(Number(valueElement.current.value)));
  const handalPrivacy = () => dispatch(privacyActions.toggle());

  return (
    <>
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          style={{ margin: "0 38%" }}
          type="checkbox"
          role="switch"
          id="flexSwitchCheckChecked"
          checked={privacy}
          onChange={handalPrivacy}
        />
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handalIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handalDecrement}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center action-row">
        <input
          type="number"
          ref={valueElement}
          style={{ width: "135px" }}
          placeholder="Enter a number"
        />
        <button type="button" className="btn btn-info" onClick={handalAdd}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handalSubstract}
        >
          Substract
        </button>
      </div>
    </>
  );
}
