#!/usr/bin/env node
import "./env";
import { App, RemovalPolicy, Stack } from "aws-cdk-lib";
import { Construct } from "constructs";
import path from "path";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";

const app = new App();

class BackendStack extends Stack {
  public lambdaRestApi: LambdaRestApi;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const lambda = new NodejsFunction(this, "backend-lambda", {
      entry: path.resolve(__dirname, "backend/index.js"),
      memorySize: 128,
    });

    this.lambdaRestApi = new LambdaRestApi(this, "rest-api", {
      handler: lambda,
    });
  }
}

class FrontendStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const bucket = new Bucket(this, "react-bucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      removalPolicy: RemovalPolicy.DESTROY,
    });

    new BucketDeployment(this, "react-deploy", {
      destinationBucket: bucket,
      sources: [Source.asset("./cdk/frontend/build")],
    });
  }
}

new BackendStack(app, "backend");
new FrontendStack(app, "frontend");
