import React from "react";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import UsePerson from "../hooks/usePerson";
import UsePersonCredits from "../hooks/usePersonCredits";

const PersonPage = props => {
  const { id } = props.match.params;
  const [person] = UsePerson(id)
  const [credits] = UsePersonCredits(id)
  return (
    <>
    {person ? (
      <>
        <PageTemplate person={person} credits={credits}>
          <PersonDetails person={person} credits={credits}/>
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for contact details</p>
    )}
  </>
  );
};

export default PersonPage;