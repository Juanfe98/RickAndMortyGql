import { gql } from "@apollo/client";


export const CHARACTERS_QUERY = gql`
query($page: Int!) {
  characters(page: $page){
    info {
      prev
      next
      pages
      count
    }
    results {
      name
      image
      status
      species
    }
  }
  location(id: 1) {
    id
  }
  episodesByIds(ids: [1, 2]) {
    id
  }
}
`;