/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMyPracTable = /* GraphQL */ `
  query GetMyPracTable($pk: String!) {
    getMyPracTable(pk: $pk) {
      pk
      fruit
      level
      __typename
    }
  }
`;
export const listMyPracTables = /* GraphQL */ `
  query ListMyPracTables(
    $filter: TableMyPracTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMyPracTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        pk
        fruit
        level
        __typename
      }
      nextToken
      __typename
    }
  }
`;
