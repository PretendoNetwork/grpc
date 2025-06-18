# gRPC Protobufs

[![NPM Version](https://img.shields.io/npm/v/%40pretendonetwork%2Fgrpc)](https://www.npmjs.com/package/@pretendonetwork/grpc)

gRPC protobuf definitions for Pretendo micro-services

## Structure

Each folder contains the protobuf definitions for the _server_ intended on receiving the requests. Meaning, for example, `account` contains protobuf files intended for requests to the account server

## Install Language Bindings

To install

- Go: `github.com/PretendoNetwork/grpc/go` - `go get github.com/PretendoNetwork/grpc/go`
- JavaScript: [`@pretendnetwork/grpc`](https://www.npmjs.com/package/@pretendonetwork/grpc) - `npm i @pretendonetwork/grpc`

## Build

- Install the protobuf compiler (protoc) from [here](https://grpc.io/docs/protoc-installation/#install-pre-compiled-binaries-any-os) (Use the pre-compiled binaries, the `protoc` package in the package manager is outdated)
- Install go
- Run `npm i` to install the JS dependencies needed for building
- Run `npm run install:go` to install the Go dependencies
- Run `npm run build`
