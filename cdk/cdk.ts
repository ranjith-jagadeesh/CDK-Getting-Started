#!/usr/bin/env node
import "./env";
import { App, RemovalPolicy, Stack, CfnOutput } from "aws-cdk-lib";
import { Construct } from "constructs";
import path from "path";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";

const app = new App();

/**
 * Backend Stack deploys Nodejs application as Lambda and create's a Rest Api
 */
class BackendStack extends Stack {
  public lambdaRestApi: LambdaRestApi;
  constructor(scope: Construct, id: string) {
    super(scope, id);

    /**
     * Create a new Lambda Function
     */
    const lambda = new NodejsFunction(this, "backend-lambda", {
      entry: path.resolve(__dirname, "backend/index.js"),
      memorySize: 128,
    });

    /**
     * Create a Rest Api for Lambda
     */
    this.lambdaRestApi = new LambdaRestApi(this, "rest-api", {
      handler: lambda,
    });
  }
}

/**
 * Frontend Stack deploy's React application in S3 Bucket
 */
class FrontendStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    /**
     * Create new S3 Bucket
     */
    const bucket = new Bucket(this, "react-bucket", {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    /**
     * Deploy React application in S3 Bucket
     */
    new BucketDeployment(this, "react-deploy", {
      destinationBucket: bucket,
      sources: [Source.asset("./cdk/frontend/build")],
    });

    /**
     * Prints the s3 bucket website url in the console
     */
    new CfnOutput(this, "s3-bucket-website-url", {
      value: bucket.bucketWebsiteUrl,
    });
  }
}

/**
 * Create a instance of Backend and Frontend Stack
 */
new BackendStack(app, "backend");
new FrontendStack(app, "frontend");
