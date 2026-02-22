import { gql } from '@apollo/client';

export const GET_USER = gql`
  query ($login: String!) {
    user(login: $login) {
      name
      avatarUrl
      bio
      url
      repositories(first: 100) {
        totalCount
        nodes {
          name
          description
          stargazerCount
          forkCount
          url
          languages(first: 5) {
            edges {
              node {
                name
              }
              size
            }
          }
        }
      }
      followers {
        totalCount
      }
      following {
        totalCount
      }
      gists {
        totalCount
      }
    }
  }
`;



export const GET_TRENDING_USERS = gql`
  query GetTrendingUsers {
    search(query: "followers:>10000", type: USER, first: 10) {
      nodes {
        ... on User {
          login
          name
          avatarUrl
          bio
          followers {
            totalCount
          }
          repositories {
            totalCount
          }
        }
      }
    }
  }
`;
