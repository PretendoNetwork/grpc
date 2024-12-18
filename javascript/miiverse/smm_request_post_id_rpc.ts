// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: miiverse/smm_request_post_id_rpc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "miiverse";

export interface SMMRequestPostIDRequest {
  /** TODO - Other course/user data? */
  courseId: bigint;
}

export interface SMMRequestPostIDResponse {
  postId: bigint;
}

function createBaseSMMRequestPostIDRequest(): SMMRequestPostIDRequest {
  return { courseId: 0n };
}

export const SMMRequestPostIDRequest: MessageFns<SMMRequestPostIDRequest> = {
  encode(message: SMMRequestPostIDRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.courseId !== 0n) {
      if (BigInt.asUintN(64, message.courseId) !== message.courseId) {
        throw new globalThis.Error("value provided for field message.courseId of type uint64 too large");
      }
      writer.uint32(8).uint64(message.courseId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SMMRequestPostIDRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMMRequestPostIDRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.courseId = reader.uint64() as bigint;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SMMRequestPostIDRequest {
    return { courseId: isSet(object.courseId) ? BigInt(object.courseId) : 0n };
  },

  toJSON(message: SMMRequestPostIDRequest): unknown {
    const obj: any = {};
    if (message.courseId !== 0n) {
      obj.courseId = message.courseId.toString();
    }
    return obj;
  },

  create(base?: DeepPartial<SMMRequestPostIDRequest>): SMMRequestPostIDRequest {
    return SMMRequestPostIDRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SMMRequestPostIDRequest>): SMMRequestPostIDRequest {
    const message = createBaseSMMRequestPostIDRequest();
    message.courseId = object.courseId ?? 0n;
    return message;
  },
};

function createBaseSMMRequestPostIDResponse(): SMMRequestPostIDResponse {
  return { postId: 0n };
}

export const SMMRequestPostIDResponse: MessageFns<SMMRequestPostIDResponse> = {
  encode(message: SMMRequestPostIDResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.postId !== 0n) {
      if (BigInt.asUintN(64, message.postId) !== message.postId) {
        throw new globalThis.Error("value provided for field message.postId of type uint64 too large");
      }
      writer.uint32(8).uint64(message.postId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SMMRequestPostIDResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSMMRequestPostIDResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.postId = reader.uint64() as bigint;
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): SMMRequestPostIDResponse {
    return { postId: isSet(object.postId) ? BigInt(object.postId) : 0n };
  },

  toJSON(message: SMMRequestPostIDResponse): unknown {
    const obj: any = {};
    if (message.postId !== 0n) {
      obj.postId = message.postId.toString();
    }
    return obj;
  },

  create(base?: DeepPartial<SMMRequestPostIDResponse>): SMMRequestPostIDResponse {
    return SMMRequestPostIDResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SMMRequestPostIDResponse>): SMMRequestPostIDResponse {
    const message = createBaseSMMRequestPostIDResponse();
    message.postId = object.postId ?? 0n;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
