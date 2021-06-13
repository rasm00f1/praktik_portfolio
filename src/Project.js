export default function Project(props) {
  console.log(props);
  return (
    <article class="shadow-lg">
      {props.isFetched === true ? (
        <div>
          <h2>{props.title}</h2>
          <h3>{props.subtitle}</h3>
        </div>
      ) : (
        <h1></h1>
      )}
    </article>
  );
}
