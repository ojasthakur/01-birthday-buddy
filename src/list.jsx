import Person from "./assets/person";

const List = ({ people, removePerson }) => {
  return (
    <section>
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} removePerson={removePerson} />
        );
      })}
    </section>
  );
};

export default List;
