[Amplify Docs React App Tutorial](https://docs.amplify.aws/start/getting-started/setup/q/integration/react/#initialize-a-new-backend)

useEffect - When the component loads, the useEffect hook is called and it invokes the fetchTodos function.

fetchTodos - Uses the Amplify API category to call the AppSync GraphQL API with the listTodos query. Once the data is returned, the items array is passed in to the setTodos function to update the local state.

addTodo - Uses the Amplify API category to call the AppSync GraphQL API with the createTodo mutation. A difference between the listTodos query and the createTodo mutation is that createTodo accepts an argument containing the variables needed for the mutation.