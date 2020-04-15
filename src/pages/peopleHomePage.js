import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import {PeopleContext} from '../contexts/peopleContext'

const PeopleListPage = () => {
  const context = useContext(PeopleContext);

  return (
      <PageTemplate 
        title='All Tv Shows'
        people={context.people}
      />
  );
};

export default PeopleListPage;