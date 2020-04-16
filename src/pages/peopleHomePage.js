import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import {PeopleContext} from '../contexts/peopleContext'

const PeopleListPage = () => {
  const context = useContext(PeopleContext);

  const pageStyle = {
    fontFamily: "sans-serif",
    textAlign: "center",
    color:"white"
  };

  return (
    <div style={pageStyle}>
      <PageTemplate 
        title='All Tv Shows'
        people={context.people}
      />
    </div>
  );
};

export default PeopleListPage;