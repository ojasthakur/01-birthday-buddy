const Person = ({ name, age, image, id, removePerson }) => {
  return (
    <article className="person">
      <img className="img" src={image} alt="" />
      <div>
        <h4>{name}</h4>
        <p style={{ marginBottom: "20px" }}>{age} years</p>
        <button
          type="button"
          className="btn"
          onClick={() => {
            removePerson(id);
          }}
        >
          Remove Person
        </button>
      </div>
    </article>
  );
};

export default Person;
