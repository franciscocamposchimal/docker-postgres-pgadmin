import gql from 'graphql-tag';

export const CLIENT_ADDED = gql`
    subscription {
        clientAdded{
            id
            nombre
            apellido
            empresa
        }
    }
`;