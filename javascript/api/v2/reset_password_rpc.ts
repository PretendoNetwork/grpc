// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: api/v2/reset_password_rpc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "api.v2";

export interface ResetPasswordRequest {
  password: string;
  passwordConfirm: string;
  token: string;
}

export interface ResetPasswordResponse {
}

function createBaseResetPasswordRequest(): ResetPasswordRequest {
  return { password: "", passwordConfirm: "", token: "" };
}

export const ResetPasswordRequest: MessageFns<ResetPasswordRequest> = {
  encode(message: ResetPasswordRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.password !== "") {
      writer.uint32(10).string(message.password);
    }
    if (message.passwordConfirm !== "") {
      writer.uint32(18).string(message.passwordConfirm);
    }
    if (message.token !== "") {
      writer.uint32(26).string(message.token);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResetPasswordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.password = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.passwordConfirm = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.token = reader.string();
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

  fromJSON(object: any): ResetPasswordRequest {
    return {
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      passwordConfirm: isSet(object.passwordConfirm) ? globalThis.String(object.passwordConfirm) : "",
      token: isSet(object.token) ? globalThis.String(object.token) : "",
    };
  },

  toJSON(message: ResetPasswordRequest): unknown {
    const obj: any = {};
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.passwordConfirm !== "") {
      obj.passwordConfirm = message.passwordConfirm;
    }
    if (message.token !== "") {
      obj.token = message.token;
    }
    return obj;
  },

  create(base?: DeepPartial<ResetPasswordRequest>): ResetPasswordRequest {
    return ResetPasswordRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ResetPasswordRequest>): ResetPasswordRequest {
    const message = createBaseResetPasswordRequest();
    message.password = object.password ?? "";
    message.passwordConfirm = object.passwordConfirm ?? "";
    message.token = object.token ?? "";
    return message;
  },
};

function createBaseResetPasswordResponse(): ResetPasswordResponse {
  return {};
}

export const ResetPasswordResponse: MessageFns<ResetPasswordResponse> = {
  encode(_: ResetPasswordResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ResetPasswordResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResetPasswordResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ResetPasswordResponse {
    return {};
  },

  toJSON(_: ResetPasswordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ResetPasswordResponse>): ResetPasswordResponse {
    return ResetPasswordResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ResetPasswordResponse>): ResetPasswordResponse {
    const message = createBaseResetPasswordResponse();
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
