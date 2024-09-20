export default function Person({ firstName, lastName, email, image }) {
  return (
    <div className="card">
      <img src={image} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h4>{email}</h4>
    </div>
  );
}
