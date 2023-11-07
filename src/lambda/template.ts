import {
  GetObjectCommand,
  GetObjectCommandInput,
  S3Client
} from '@aws-sdk/client-s3';

const s3Client = new S3Client({ region: 'ap-southeast-1' });

export const handler = async () => {
  const params: GetObjectCommandInput = {
    Bucket: 'test-read-bucket-1',
    Key: 'customer-1.jsonl'
  };
  const getObjectCommand = new GetObjectCommand(params);
  const response = await s3Client.send(getObjectCommand);

  console.log(response);

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World!'
    })
  };
};
