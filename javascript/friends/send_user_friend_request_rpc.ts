// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: friends/send_user_friend_request_rpc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "friends";

export interface SendUserFriendRequestRequest {
  sender: number;
  recipient: number;
  message: string;
}

export interface SendUserFriendRequestResponse {
  success: boolean;
}

function createBaseSendUserFriendRequestRequest(): SendUserFriendRequestRequest {
  return { sender: 0, recipient: 0, message: "" };
}

export const SendUserFriendRequestRequest: MessageFns<SendUserFriendRequestRequest> = {
  encode(message: SendUserFriendRequestRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.sender !== 0) {
      writer.uint32(8).uint32(message.sender);
    }
    if (message.recipient !== 0) {
      writer.uint32(16).uint32(message.recipient);
    }
    if (message.message !== "") {
      writer.uint32(26).string(message.message);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SendUserFriendRequestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendUserFriendRequestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.sender = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.recipient = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
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

  fromJSON(object: any): SendUserFriendRequestRequest {
    return {
      sender: isSet(object.sender) ? globalThis.Number(object.sender) : 0,
      recipient: isSet(object.recipient) ? globalThis.Number(object.recipient) : 0,
      message: isSet(object.message) ? globalThis.String(object.message) : "",
    };
  },

  toJSON(message: SendUserFriendRequestRequest): unknown {
    const obj: any = {};
    if (message.sender !== 0) {
      obj.sender = Math.round(message.sender);
    }
    if (message.recipient !== 0) {
      obj.recipient = Math.round(message.recipient);
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    return obj;
  },

  create(base?: DeepPartial<SendUserFriendRequestRequest>): SendUserFriendRequestRequest {
    return SendUserFriendRequestRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendUserFriendRequestRequest>): SendUserFriendRequestRequest {
    const message = createBaseSendUserFriendRequestRequest();
    message.sender = object.sender ?? 0;
    message.recipient = object.recipient ?? 0;
    message.message = object.message ?? "";
    return message;
  },
};

function createBaseSendUserFriendRequestResponse(): SendUserFriendRequestResponse {
  return { success: false };
}

export const SendUserFriendRequestResponse: MessageFns<SendUserFriendRequestResponse> = {
  encode(message: SendUserFriendRequestResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.success !== false) {
      writer.uint32(8).bool(message.success);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SendUserFriendRequestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendUserFriendRequestResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.success = reader.bool();
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

  fromJSON(object: any): SendUserFriendRequestResponse {
    return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
  },

  toJSON(message: SendUserFriendRequestResponse): unknown {
    const obj: any = {};
    if (message.success !== false) {
      obj.success = message.success;
    }
    return obj;
  },

  create(base?: DeepPartial<SendUserFriendRequestResponse>): SendUserFriendRequestResponse {
    return SendUserFriendRequestResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SendUserFriendRequestResponse>): SendUserFriendRequestResponse {
    const message = createBaseSendUserFriendRequestResponse();
    message.success = object.success ?? false;
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
