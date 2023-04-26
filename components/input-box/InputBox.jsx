import "./input-box.css";

const InputBox = (props) => {
  if (props.type === "no-label") {
    return (
      <input
        className="input"
        type="text"
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
      ></input>
    );
  }
  if (props.type === "label") {
    return (
      <div>
        <label className="label">{props.label}</label>
        <input
          className="input"
          type="text"
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
        ></input>
      </div>
    );
  }
};

export default InputBox;
