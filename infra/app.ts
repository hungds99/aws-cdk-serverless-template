#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { iamStack } from './stacks/iam-stack';
import { lambdaStack } from './stacks/lambda-stack';

const app = new App();
new iamStack(app, 'iamStack');
new lambdaStack(app, 'lambdaStack');
