# storybook-vis-vitest-docker-example

```bash
$ npm install
$ npm run start-playwright-server # keep open

# in separate process
$ npm run storybook:vitest
```

Error:

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost:63315/__vitest_test__/?sessionId=bebc01db-2f4b-43b3-9712-2f4825b0ccb7
Call log:
  - navigating to "http://localhost:63315/__vitest_test__/?sessionId=bebc01db-2f4b-43b3-9712-2f4825b0ccb7", waiting until "load"
```

(It works if `wsEndpoint` would be commented out in `vite.config.ts`. I assume we need to set `allowedHosts: ['host.docker.internal']` to the vitest server, but I think this is not possible.)
