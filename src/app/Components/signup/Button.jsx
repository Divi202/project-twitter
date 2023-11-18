export default function Button(props) {
  return (
    <>
      {props.title.Icon ? (
        <button>{`${props.title.Icon} ${props.title.Text}`}</button>
      ) : (
        <button>{`${props.title}`}</button>
      )}
    </>
  );
}
