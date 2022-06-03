## [Designing a GraphQL API](https://docs.aws.amazon.com/appsync/latest/devguide/designing-a-graphql-api.html)


### Update schema
If you want to update your API, open your project's 
`amplify/backend/api/<api-name>/schema.graphql`
file (NOT the one in the `amplify/backend/api/<api-name>/build` folder) and edit it in your favorite code editor. You can compile the `amplify/backend/api/<api-name>/schema.graphql` file by running:
 `amplify api gql-compile`
and view the compiled schema output in backend/api/~apiname~/build/schema.graphql.

You can then push updated changes with: `amplify push`

The following schema updates require replacement of the underlying DynamoDB table:
Removing or renaming a model,
Modifying the primary key of a model,
Modifying a Local Secondary Index of a model (only applies to projects with secondaryKeyAsGSI turned off)