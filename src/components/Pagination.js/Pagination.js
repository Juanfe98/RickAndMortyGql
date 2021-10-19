export const Pagination = ({fetchMore, next ,option}) => {
  return(
    <section className="paginateContainer">
      <button
        onClick={() => {
          fetchMore({
            variables: { page: next },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult[option].results = [
                ...prevResult[option].results,
                ...fetchMoreResult[option].results,
              ];
              return fetchMoreResult;
            },
          });
        }}
      >
        Show More
      </button>
    </section>
  );
};
