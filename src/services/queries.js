export const categoriesQuery = {
  query: `query categories {
      categories(
        filters: {ids: {}}
      ) {
          items {
            id
            name
            image
          }
          total_count
      }
    }`,
};
