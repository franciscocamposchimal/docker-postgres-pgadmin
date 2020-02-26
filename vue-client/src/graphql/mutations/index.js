import gql from 'graphql-tag';

export const LOGIN = gql`
mutation Auth($username: String!, $password:  String!){
    auth(username: $username, password: $password){
        token
    }
}`;