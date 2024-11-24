// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: miiverse/v2/miiverse_service.proto

/* eslint-disable */
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { SMMRequestPostIdRequest, SMMRequestPostIdResponse } from "./smm_request_post_id_rpc";

export const protobufPackage = "miiverse.v2";

export type MiiverseServiceDefinition = typeof MiiverseServiceDefinition;
export const MiiverseServiceDefinition = {
  name: "MiiverseService",
  fullName: "miiverse.v2.MiiverseService",
  methods: {
    /** Used by Super Mario Maker */
    sMMRequestPostId: {
      name: "SMMRequestPostId",
      requestType: SMMRequestPostIdRequest,
      requestStream: false,
      responseType: SMMRequestPostIdResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface MiiverseServiceImplementation<CallContextExt = {}> {
  /** Used by Super Mario Maker */
  sMMRequestPostId(
    request: SMMRequestPostIdRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SMMRequestPostIdResponse>>;
}

export interface MiiverseServiceClient<CallOptionsExt = {}> {
  /** Used by Super Mario Maker */
  sMMRequestPostId(
    request: DeepPartial<SMMRequestPostIdRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SMMRequestPostIdResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;