import { SSTConfig } from "sst";
import { ExampleStack } from "./stacks/ExampleStack"
import { Api } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "api-auth-jwt-cognito-user-pool",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(ExampleStack)
  },
} satisfies SSTConfig;
