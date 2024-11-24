// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: boss/register_task.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Task } from "./task";

export const protobufPackage = "boss";

export interface RegisterTaskRequest {
  id: string;
  bossAppId: string;
  titleId: string;
  country: string;
  description: string;
}

export interface RegisterTaskResponse {
  task: Task | undefined;
}

function createBaseRegisterTaskRequest(): RegisterTaskRequest {
  return { id: "", bossAppId: "", titleId: "", country: "", description: "" };
}

export const RegisterTaskRequest: MessageFns<RegisterTaskRequest> = {
  encode(message: RegisterTaskRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.bossAppId !== "") {
      writer.uint32(18).string(message.bossAppId);
    }
    if (message.titleId !== "") {
      writer.uint32(26).string(message.titleId);
    }
    if (message.country !== "") {
      writer.uint32(34).string(message.country);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RegisterTaskRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterTaskRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.bossAppId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.titleId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.country = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.description = reader.string();
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

  fromJSON(object: any): RegisterTaskRequest {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      bossAppId: isSet(object.bossAppId) ? globalThis.String(object.bossAppId) : "",
      titleId: isSet(object.titleId) ? globalThis.String(object.titleId) : "",
      country: isSet(object.country) ? globalThis.String(object.country) : "",
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: RegisterTaskRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.titleId !== "") {
      obj.titleId = message.titleId;
    }
    if (message.country !== "") {
      obj.country = message.country;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterTaskRequest>): RegisterTaskRequest {
    return RegisterTaskRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterTaskRequest>): RegisterTaskRequest {
    const message = createBaseRegisterTaskRequest();
    message.id = object.id ?? "";
    message.bossAppId = object.bossAppId ?? "";
    message.titleId = object.titleId ?? "";
    message.country = object.country ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseRegisterTaskResponse(): RegisterTaskResponse {
  return { task: undefined };
}

export const RegisterTaskResponse: MessageFns<RegisterTaskResponse> = {
  encode(message: RegisterTaskResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.task !== undefined) {
      Task.encode(message.task, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): RegisterTaskResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRegisterTaskResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.task = Task.decode(reader, reader.uint32());
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

  fromJSON(object: any): RegisterTaskResponse {
    return { task: isSet(object.task) ? Task.fromJSON(object.task) : undefined };
  },

  toJSON(message: RegisterTaskResponse): unknown {
    const obj: any = {};
    if (message.task !== undefined) {
      obj.task = Task.toJSON(message.task);
    }
    return obj;
  },

  create(base?: DeepPartial<RegisterTaskResponse>): RegisterTaskResponse {
    return RegisterTaskResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<RegisterTaskResponse>): RegisterTaskResponse {
    const message = createBaseRegisterTaskResponse();
    message.task = (object.task !== undefined && object.task !== null) ? Task.fromPartial(object.task) : undefined;
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
