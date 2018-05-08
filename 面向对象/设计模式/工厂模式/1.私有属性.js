function createPerson(name) {
  const privateProties = {};
  const person = {
    setName: (name) => {
      privateProties.name = name;
    },
    getName: () => privateProties.name,
  };

  person.setName(name);
  return person;
}
