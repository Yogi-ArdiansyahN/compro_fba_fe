export default function Button(props) {
  return (
    <button
      name={props.name}
      id={props.id}
      type={props.type}
      className={props.className}
      onClick={props.onClick}
      name_button={props.name_button}
    >
      {props.name_button}
    </button>
  );
}
