import { GraphQLClient } from "graphql-request";

export const API_URL = 'http://localhost:4000'

export const graphQLClient = new GraphQLClient(API_URL)

