#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AwsCdkServerlessTemplateStack } from '../lib/aws-cdk-serverless-template-stack';

const app = new cdk.App();
new AwsCdkServerlessTemplateStack(app, 'AwsCdkServerlessTemplateStack');
