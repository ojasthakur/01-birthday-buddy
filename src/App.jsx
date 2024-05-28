import { useState } from "react";
import data from "./data";
import List from "./list";
import Person from "./assets/person";

const App = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    const tempArr = people.filter((person) => {
      return person.id != id;
    });
    setPeople(tempArr);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} removePerson={removePerson}>
          {" "}
        </List>
        <button
          type="button"
          onClick={() => {
            setPeople([]);
          }}
          className="btn btn-block"
        >
          Clear All
        </button>
      </section>
    </main>
  );
};
export default App;
