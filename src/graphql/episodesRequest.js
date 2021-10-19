import { gql } from "@apollo/client";

export const EPISODES_QUERY = gql`
  query ($page: Int!) {
    episodes(page: $page) {
      info {
        prev
        next
        pages
        count
      }
      results {
        id
        name
        air_date
        episode
        characters {
          status
          species
          name
          id
          image
        }
      }
    }
  }
`;
