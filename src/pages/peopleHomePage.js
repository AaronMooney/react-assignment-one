import React, { useContext } from "react";
import PageTemplate from '../components/templatePeopleListPage'
import {PeopleContext} from '../contexts/peopleContext'
import './homepage.css'

const PeopleListPage = () => {
  const context = useContext(PeopleContext);

  return (
    <div className="page">
      <PageTemplate 
        title='All Tv Shows'
        people={context.people}
      />
    </div>
  );
};

export default PeopleListPage;