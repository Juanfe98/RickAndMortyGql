import { gql } from "@apollo/client";

export const LOCATIONS_QUERY = gql`
  query ($page: Int!) {
    locations(page: $page) {
      info {
        prev
        next
        pages
        count
      }
      results {
        id
        name
        dimension
        type
        residents {
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
