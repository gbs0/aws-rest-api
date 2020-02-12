
Less Contracts: A Serverless CLI Framework For Serverless 
=================================

[![Version](https://img.shields.io/npm/v/oclif.svg)](https://npmjs.org/package/oclif)

[![License](https://img.shields.io/npm/l/oclif.svg)](https://github.com/oclif/oclif/blob/master/package.json)

<!-- toc -->
* [🗒 Description](#-description)
* [🚀 Getting Started Tutorial](#-getting-started-tutorial)
* [📌 Requirements](#-requirements)
* [🌈 CLI Types](#-cli-types)
* [🔨 Usage & Commands](#-commands)
* [📣 Feedback](#-feedback)
<!-- tocstop -->

## 🗒 Description

This is a framework for building new contracts using serverless lambdas.
This framework was built out of the [AWS Frameworks](<AWS_SDK_ADDRESSS>), and 
it's designed for `curl` CLIs with a few methods options, deployed on Amazon S3.


## 🚀 Getting Started Tutorial

This is a step-by-step guide to introduce you to this API. If you have not developed anything in a command line before, this tutorial is a great place to get started.

```
$ git clone https://github.com/gbs0/aws-rest-api.git
```

## 📌 Requirements

Currently, Node 8+ and 12+ is supported. We support [curl](https://nodejs.org/en/about/releases). You can add the [-X](https://www.npmjs.com/package/node) actions (`POST` or `GET`) to your CLI to ensure that all data il'be send for a specific lambda function.

## 🌈 CLI Types

With this API you can create 2 different CLI types, POST and GET.

Single CLIs are like `ls` or `cat`. They can accept arguments and flags. 
See more of then for [optionally retrieve other methods](https://github.com/oclif/command).

CLIs are like `git` or `heroku`. They have commands that are themselves single CLIs. In the `src` folder there are files that points to a lambda function. This directory contains the main files for the CLI. For `models`, you would have a project like the following:

```
package.json
models/
└──├── approvalModel.json
   ├── creationModel.json
   └── uploadModel.json
src/
└──├── approvalGet.js
   ├── approvalGet.js
   ├── approvalGet.json
   ├── approvalGet.js
   ├── approvalGet.js
   └── destroy.ts
```



# 🔨 Commands

### Routes
<!-- commands -->
> Creations GET
* [`*.amazonaws.com/contract-api/creations/`](#creations-get-path)
> Creations POST
* [`*.amazonaws.com/contract-api/creations/id`](#creations-post-path)
> Uploads GET
* [`*.amazonaws.com/contract-api/uploads/`](#uploads-get-path)
> Uploads POST
* [`*.amazonaws.com/contract-api/uploads/id`](#uploads-post-path)
> Approvals GET
* [`*.amazonaws.com/contract-api/approvals/`](#approvals-get-path)
> Approvals POST
* [`*.amazonaws.com/contract-api/approvals/id`](#approvals-post-path)


## `Creations GET Method`

Retrieve all available contracts in API using:
> https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/creations


```
curl -XGET -H "Content-type: application/json" 'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/creations'
```



## `Creations POST Method`

Post a new contract in API using:
> https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/creations/id

```
curl -XPOST -H "Content-type: application/json" -d '{
  "address": "Rua Pacaembu",
  "birth": "02/02/2020",
  "cpf": 123456792,
  "email": "lais@gmail.com",
  "id": "11346",
  "income": 5000,
  "loan": 1000,
  "maritial": "Divorciada",
  "name": "Lais Torres",
  "user_id": "6ba7b822"
}' 'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/creations/id'
```


## `Uploads GET Method`

Retrieve all availables uploads in API using:
> https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/uploads

```
curl -XGET -H "Content-type: application/json" 'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/uploads'
```



## `Uploads POST Method`

Post a new contract in API using:
> https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/uploads/id


```
curl -XPOST -H "Content-type: application/json" -d '{
  "id": "11346",
  "address_proof": "edbr01.jpg",
  "document": "cnh0001.jpg",
  "property_img": "whatsapp-image-000001.jpg",
  "user_id": "6ba7b822"
}'
 'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/uploads/id'
```


## `Approvals GET [PATH]`

Retrieve all approvals contracts in API using:
> https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/approvals

```
curl -XGET -H "Content-type: application/json" 'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/approvals'
```



## `Approvals POST [PATH]`

Post a new approval in API using:
> https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/approvals/id


```
curl -XPOST -H "Content-type: application/json" -d '{
  "id": "11346",
  "approved": "false",
  "user_id": "6ba7b822"
}'
 'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/uploads/id'
```



# 📣 Feedback

If you have any suggestions or want let me know what you think of this api, send us a message at <gabrielschiavo0@gmail.com>
