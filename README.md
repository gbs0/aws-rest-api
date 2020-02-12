
Less Contracts: A Serverless CLI Framework For Serverless 
=================================

[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/oclif)

[![Version](https://img.shields.io/npm/v/oclif.svg)](https://npmjs.org/package/oclif)

[![CircleCI](https://circleci.com/gh/oclif/oclif/tree/master.svg?style=shield)](https://circleci.com/gh/oclif/oclif/tree/master)

[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/oclif?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/oclif/branch/master)

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
This framework was built out of the [AWS Frameworks](<AWS_SDK_ADDRESSS>) 
It's designed for `curl` CLIs with a few methods options, deployed on Amazon S3.


## 🚀 Getting Started Tutorial

The [Getting Started tutorial](http://oclif.io/docs/introduction) is a step-by-step guide to introduce you to this API. If you have not developed anything in a command line before, this tutorial is a great place to get started.

```
$ heroku info --app=<tab><tab> # will complete with all the Heroku apps a user has in their account
```

## 📌 Requirements

Currently, Node 8+ and 12+ is supported. We support [curl](https://nodejs.org/en/about/releases). You can add the [-X](https://www.npmjs.com/package/node) package to your CLI to ensure that all data w running a specific version of Node.

## 🌈 CLI Types

With this API you can create 2 different CLI types, single and multi.

Single CLIs are like `ls` or `cat`. They can accept arguments and flags. Single CLIs can [optionally be a single file](https://github.com/oclif/command).

Multi CLIs are like `git` or `heroku`. They have subcommands that are themselves single CLIs. In the `package.json` there is a field `oclif.commands` that points to a directory. This directory contains all the subcommands for the CLI. For example, if you had a CLI called `mycli` with the commands `mycli create` and `mycli destroy`, you would have a project like the following:

```
package.json
getItemP/
└── commands/
    ├── create.ts
    └── destroy.ts
```

Multi-command CLIs may also include [plugins](https://oclif.io/docs/plugins).


# 🔨 Usage & Commands

### Routes
<!-- commands -->
* [`*/creations/`](#oclif-command-name)
* [`*/creations/id`](#oclif-help-command)
* [`*/uploads/`](#oclif-hook-name)
* [`*/uploads/id`](#oclif-multi-path)
* [`*/approvals/`](#oclif-plugin-path)
* [`*/approvals/id`](#oclif-single-path)

## `GET ITEMS`

add a command to an existing CLI or plugin

```
curl -XGET -H "Content-type: application/json" 'https://2c8cx5whk0.execute-api.us-east-1.amazonaws.com/dev/user/590b52ff086041000142cedd'
```

_See code: [src/commands/command.ts](https://github.com/oclif/oclif/blob/v1.15.2/src/commands/command.ts)_

## `POST ITEM`

Post a new contract on API on:
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
  "user_id": "6ba7b811"
}' 'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/creations/id'
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_

## `oclif hook NAME`

add a hook to an existing CLI or plugin

```
curl -v -X POST
'https://9sz3tkjso5.execute-api.us-east-2.amazonaws.com/contract-api/creations/id'
-H 'Content-Type: application/json'
-d '{
  "address": "Rua Limeira",
  "birth": "02/02/2020",
  "cpf": 123456792,
  "email": "lais@gmail.com",
  "id": "11346",
  "income": 5000,
  "loan": 1000,
  "maritial": "Divorciada",
  "name": "Lais Torres",
  "user_id": "6ba7b811"
}'
```

_See code: [src/commands/hook.ts](https://github.com/oclif/oclif/blob/v1.15.2/src/commands/hook.ts)_

## `oclif multi [PATH]`

generate a new multi-command CLI

```
USAGE
  $ oclif multi [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (yarn|typescript|eslint|mocha)
```

_See code: [src/commands/multi.ts](https://github.com/oclif/oclif/blob/v1.15.2/src/commands/multi.ts)_

## `oclif plugin [PATH]`

create a new CLI plugin

```
USAGE
  $ oclif plugin [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (yarn|typescript|eslint|mocha)
```

_See code: [src/commands/plugin.ts](https://github.com/oclif/oclif/blob/v1.15.2/src/commands/plugin.ts)_

## `oclif single [PATH]`

generate a new single-command CLI

```
USAGE
  $ oclif single [PATH]

ARGUMENTS
  PATH  path to project, defaults to current directory

OPTIONS
  --defaults         use defaults for every setting
  --force            overwrite existing files
  --options=options  (yarn|typescript|eslint|mocha)
```

_See code: [src/commands/single.ts](https://github.com/oclif/oclif/blob/v1.15.2/src/commands/single.ts)_
<!-- commandsstop -->


# 📣 Feedback

If you have any suggestions or want let me know what you think of this api, send us a message at <gabrielschiavo0@gmail.com>
