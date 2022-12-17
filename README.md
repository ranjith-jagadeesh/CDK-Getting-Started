# CDK-Getting-Started

## What is CDK?

AWS CDK is a framework for defining cloud infrastructure in code and provisioning it through AWS CloudFormation. To know more about CDK, visit [CDK Official Website](https://docs.aws.amazon.com/cdk/v2/guide/home.html)

## What CDK Getting Started Pack Offers?

When new project is started, in most of the cases, backend and frontend framework would be Node Js and React Js respectively. This is an AWS Deployment Kit, where Backend Server(Node Js) is deployed as Lambda Application and Frontend Server(React) is deployed as static website in AWS S3 Bucket.

## Steps to get started

1. Install all the dependencies in root folder and cdk/frontend folder.

        `yarn install` 
        `cd cdk/frontend/`
        `yarn install`

2. To build React Application, you should need to be inside frontend directory.

        `yarn build`

3. Deploy your backend and frontend server from root directory. 

        `cd ../../`
        `yarn cdk deploy --all`

Now you have successfully deployed your Node and React Application to AWS.

You can modify the code inside backend and frontend folder to suit your needs and deploy it.

If you are facing any issues, create a [new issue](https://github.com/ranjith-jagadeesh/CDK-Getting-Started/issues/new), I will address as soon as I can.

Thanks! 