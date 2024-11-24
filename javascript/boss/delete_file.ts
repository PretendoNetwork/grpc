// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: boss/delete_file.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "boss";

export interface DeleteFileRequest {
  dataId: bigint;
  bossAppId: string;
}

function createBaseDeleteFileRequest(): DeleteFileRequest {
  return { dataId: 0n, bossAppId: "" };
}

export const DeleteFileRequest: MessageFns<DeleteFileRequest> = {
  encode(message: DeleteFileRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.dataId !== 0n) {
      if (BigInt.asUintN(64, message.dataId) !== message.dataId) {
        throw new globalThis.Error("value provided for field message.dataId of type uint64 too large");
      }
      writer.uint32(8).uint64(message.dataId);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteFileRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteFileRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.dataId = reader.uint64() as bigint;
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.bossAppId = reader.string();
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

  fromJSON(object: any): DeleteFileRequest {
    return {
      dataId: isSet(object.dataId) ? BigInt(object.dataId) : 0n,
      bossAppId: isSet(object.bossAppId) ? globalThis.String(object.bossAppId) : "",
    };
  },

  toJSON(message: DeleteFileRequest): unknown {
    const obj: any = {};
    if (message.dataId !== 0n) {
      obj.dataId = message.dataId.toString();
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    return obj;
  },

  create(base?: DeepPartial<DeleteFileRequest>): DeleteFileRequest {
    return DeleteFileRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<DeleteFileRequest>): DeleteFileRequest {
    const message = createBaseDeleteFileRequest();
    message.dataId = object.dataId ?? 0n;
    message.bossAppId = object.bossAppId ?? "";
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
