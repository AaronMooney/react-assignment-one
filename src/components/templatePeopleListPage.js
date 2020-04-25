import React, { useState } from "react";
import Header from "../components/headerPeopleList";
import PeopleList from "../components/peopleList";
import FilterControls from "../components/filterControls";

const PeopleListPageTemplate = ({ people, title }) => {
  const [nameFilter, setNameFilter] = useState("");

  let displayedPeople = people
    .filter(m => {
      return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
    });

  const handleChange = (type, value) => {
    if (type === "name") setNameFilter(value);
  };

  return (
    <>
      <Header title={title} numPeople={displayedPeople.length} />
      <FilterControls onUserInput={handleChange} num={displayedPeople.length}/>
      <PeopleList
        people={displayedPeople}
      />
    </>
  );
};

export default PeopleListPageTemplate ;