// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: api/forgot_password_rpc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "api";

export interface ForgotPasswordRequest {
  emailAddressOrUsername: string;
}

function createBaseForgotPasswordRequest(): ForgotPasswordRequest {
  return { emailAddressOrUsername: "" };
}

export const ForgotPasswordRequest: MessageFns<ForgotPasswordRequest> = {
  encode(message: ForgotPasswordRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.emailAddressOrUsername !== "") {
      writer.uint32(10).string(message.emailAddressOrUsername);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ForgotPasswordRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForgotPasswordRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.emailAddressOrUsername = reader.string();
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

  fromJSON(object: any): ForgotPasswordRequest {
    return {
      emailAddressOrUsername: isSet(object.emailAddressOrUsername)
        ? globalThis.String(object.emailAddressOrUsername)
        : "",
    };
  },

  toJSON(message: ForgotPasswordRequest): unknown {
    const obj: any = {};
    if (message.emailAddressOrUsername !== "") {
      obj.emailAddressOrUsername = message.emailAddressOrUsername;
    }
    return obj;
  },

  create(base?: DeepPartial<ForgotPasswordRequest>): ForgotPasswordRequest {
    return ForgotPasswordRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ForgotPasswordRequest>): ForgotPasswordRequest {
    const message = createBaseForgotPasswordRequest();
    message.emailAddressOrUsername = object.emailAddressOrUsername ?? "";
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
