import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LOCATIONS_QUERY } from "../../graphql/locationsRequest";
import Loader from "../UI/Loader/Loader";
import Card from "../UI/InformationCards/Card/Card";
import { For } from "../shared/For";

export const Locations = () => {
  const [locations, setLocations] = useState([]);

  const page = 1;
  const { data, loading, error } = useQuery(LOCATIONS_QUERY, {
    variables: { page: page },
  });

  useEffect(() => {
    if (data) {
      setLocations(data.locations.results);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) console.log(error, "error get info");

  const getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  return (
    <>
      <section className="cardsContainer">
        <For
          of={locations}
          body={(location, index) => {
            const locationCharacters = location.residents;
            let image;
            if (locationCharacters.length > 0) {
              image =
                locationCharacters[
                  getRandomNumber(locationCharacters.length, 0)
                ].image;
            } else {
              image =
                "https://rickandmortyapi.com/api/character/avatar/19.jpeg";
            }
            return <Card characterInfo={{ ...location, image }} key={index} />;
          }}
        />
      </section>
    </>
  );
};
