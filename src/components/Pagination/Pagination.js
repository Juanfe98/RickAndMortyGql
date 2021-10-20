export const Pagination = ({ fetchMore, next, option }) => {
  return (
    <section className="paginateContainer">
      <button
        disabled={next ? false : true}
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
        {next ? "Show More" : "No more pages"}
      </button>
    </section>
  );
};
