import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
    UserPoolId: "us-west-1_AjH6u46W6",
    ClientId: "3jevanqtlq8fo8cmf4ph09sjg"
}

export default new CognitoUserPool(poolData)