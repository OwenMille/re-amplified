##### Combination of two tutorials

[AWS Tuorial React App with Amplify](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/)

[Amplify Docs React App Tutorial](https://docs.amplify.aws/start/getting-started/setup/q/integration/react/#initialize-a-new-backend)

## Auth

[AmplifyUI Authenticator customization](https://ui.docs.amplify.aws/react/components/authenticator#customization)

## Deployment

[Continuous Deployment](https://aws.amazon.com/getting-started/hands-on/build-react-app-amplify-graphql/module-one/)

![Front End Amplify Deploy Source Module 1](https://d1.awsstatic.com/webteam/getting_started/GSRC%202020%20updates/Front%20End/Front%20End%20Amplify%20Deploy%20Source%20Module%201.00becc211a8ecd42349cffb87406449074ed2e5c.png)

#### ALTERNATIVE: manual deploy and host

[Publish your app](https://docs.amplify.aws/start/getting-started/hosting/q/integration/react/#publish-your-app)

Run the following command to publish your app.

```bash
amplify publishcopy
```

After publishing, your terminal will display your app URL hosted on a `amplifyapp.com` domain. Whenever you have additional changes to publish, just re-run the `amplify publish` command.

You may get an "AccessDenied" error if your app's distribution directory is not set properly. To fix this, change the distribution directory via `amplify configure project` and then re-run `amplify publish`.

To view your app and hosting configuration in the Amplify Console, run the `amplify console` command.

Note: In order to delete all the environments of the project from the cloud and wipe out all the local files created by Amplify CLI, run `amplify delete` command. Now, to observe that your Amplify project resources have been deleted, run `amplify status` command.