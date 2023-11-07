import { Stack, StackProps } from 'aws-cdk-lib';
import { PolicyStatement, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class iamStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const templateRole = new Role(this, 'TemplateRole', {
      roleName: 'TemplateRole',
      assumedBy: new ServicePrincipal('sns.amazonaws.com')
    });
  }
}
