import { Stack, StackProps } from 'aws-cdk-lib';
import { PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class lambdaStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const templateFn = new NodejsFunction(this, 'TemplateFunction', {
      entry: 'src/lambda/template.ts',
      handler: 'handler',
      bundling: {
        minify: true,
        sourceMap: true,
        target: 'es2020'
      }
    });
    templateFn.addToRolePolicy(
      new PolicyStatement({
        resources: ['*'],
        actions: ['s3:GetObject']
      })
    );
  }
}
