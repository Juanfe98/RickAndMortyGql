import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { EPISODES_QUERY } from "../../graphql/episodesRequest";
import { Pagination } from "../Pagination/Pagination";
import Loader from "../UI/Loader/Loader";
import Card from "../UI/InformationCards/Card/Card";
import { For } from "../shared/For";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);

  const page = 1;
  const { data, loading, error, fetchMore } = useQuery(EPISODES_QUERY, {
    variables: { page: page },
  });

  useEffect(() => {
    if (data) {
      setEpisodes(data.episodes.results);
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
          of={episodes}
          body={(episode, index) => {
            const episodeCharacters = episode.characters;
            const image =
              episodeCharacters[getRandomNumber(episodeCharacters.length, 0)]
                .image;
            return <Card characterInfo={{ ...episode, image }} key={index} />;
          }}
        />
      </section>
      <Pagination fetchMore={fetchMore} next={data.episodes.info.next} option="episodes"/>
    </>
  );
};
