import { useInfiniteQuery, useQuery } from "react-query";
import { GraphQLClient, request, RequestDocument } from "graphql-request";
import { DocumentNode } from "graphql";
import { TypedDocumentNode } from '@graphql-typed-document-node/core';


export const pokemonQuery = ( key: string, query: DocumentNode) => {
    const endpoint = 'https://graphql-pokeapi.graphcdn.app/';
    const headers = {
        headers: {
            authorization: 'Bearer token goes here'
        }
    }

    const graphQLClient = new GraphQLClient(endpoint, headers);

    const fetchData = async () => await graphQLClient.request(query);

    // const fetchData = async () => 
    //    await request (endpoint, query, variables)

        return useInfiniteQuery(key, fetchData);
};

