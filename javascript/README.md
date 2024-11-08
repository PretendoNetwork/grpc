# gRPC Protobufs

gRPC protobuf definitions for Pretendo micro-services

## Structure

Each folder contains the protobuf definitions for the _server_ intended on receiving the requests. Meaning, for example, `account` contains protobuf files intended for requests to the account server

## Build

- Install the protobuf compiler (protoc) from [here](https://grpc.io/docs/protoc-installation/#install-pre-compiled-binaries-any-os) (Use the pre-compiled binaries, the `protoc` package in the package manager is outdated)
- Install go
- Install the go protobuf plugin: `go install google.golang.org/protobuf/cmd/protoc-gen-go@latest`
- Run `npm i`
- Run `npm run generate`
