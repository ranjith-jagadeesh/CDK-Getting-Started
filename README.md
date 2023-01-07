# CDK-Getting-Started

## What is CDK?

AWS CDK is a framework for defining cloud infrastructure in code and provisioning it through AWS CloudFormation. To know more about CDK, visit [CDK Official Website](https://docs.aws.amazon.com/cdk/v2/guide/home.html)

## What CDK Getting Started Pack Offers?

When we are starting a new project, we want to start the project with language/framework which is more matured and has large community support. One thing that comes to our mind with respect to backend and frontend framework would be NodeJs and ReactJs respectively. Here, Backend Server(Node Js) is deployed as Lambda Application and Frontend Server(React) is deployed as static website in AWS S3 Bucket using Cloud Development Kit(CDK).

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

Now you can start modifying the code inside backend and frontend folder and deploy the same seamlessly.

If you are facing any issues, create a [new issue](https://github.com/ranjith-jagadeesh/CDK-Getting-Started/issues/new), I will address as soon as I can.

Thanks! 