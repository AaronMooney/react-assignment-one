import React from "react";
import PersonDetails from "../components/personDetails";
import PageTemplate from "../components/templatePersonPage";
import UsePerson from "../hooks/usePerson";
import UsePersonCredits from "../hooks/usePersonCredits";
import "./homepage.css";

const PersonPage = (props) => {
  const { id } = props.match.params;
  const [person] = UsePerson(id);
  const [credits] = UsePersonCredits(id);
  return (
    <>
      <div className="page">
        {person ? (
          <>
            <PageTemplate person={person} credits={credits}>
              <PersonDetails person={person} credits={credits} />
            </PageTemplate>
          </>
        ) : (
          <p>Waiting for contact details</p>
        )}
      </div>
    </>
  );
};

export default PersonPage;
