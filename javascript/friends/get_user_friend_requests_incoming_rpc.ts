// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: friends/get_user_friend_requests_incoming_rpc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FriendRequest } from "./friend_request";

export const protobufPackage = "friends";

export interface GetUserFriendRequestsIncomingRequest {
  pid: number;
}

export interface GetUserFriendRequestsIncomingResponse {
  friendRequests: FriendRequest[];
}

function createBaseGetUserFriendRequestsIncomingRequest(): GetUserFriendRequestsIncomingRequest {
  return { pid: 0 };
}

export const GetUserFriendRequestsIncomingRequest: MessageFns<GetUserFriendRequestsIncomingRequest> = {
  encode(message: GetUserFriendRequestsIncomingRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserFriendRequestsIncomingRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserFriendRequestsIncomingRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.pid = reader.uint32();
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

  fromJSON(object: any): GetUserFriendRequestsIncomingRequest {
    return { pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0 };
  },

  toJSON(message: GetUserFriendRequestsIncomingRequest): unknown {
    const obj: any = {};
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserFriendRequestsIncomingRequest>): GetUserFriendRequestsIncomingRequest {
    return GetUserFriendRequestsIncomingRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserFriendRequestsIncomingRequest>): GetUserFriendRequestsIncomingRequest {
    const message = createBaseGetUserFriendRequestsIncomingRequest();
    message.pid = object.pid ?? 0;
    return message;
  },
};

function createBaseGetUserFriendRequestsIncomingResponse(): GetUserFriendRequestsIncomingResponse {
  return { friendRequests: [] };
}

export const GetUserFriendRequestsIncomingResponse: MessageFns<GetUserFriendRequestsIncomingResponse> = {
  encode(message: GetUserFriendRequestsIncomingResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.friendRequests) {
      FriendRequest.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserFriendRequestsIncomingResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserFriendRequestsIncomingResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.friendRequests.push(FriendRequest.decode(reader, reader.uint32()));
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

  fromJSON(object: any): GetUserFriendRequestsIncomingResponse {
    return {
      friendRequests: globalThis.Array.isArray(object?.friendRequests)
        ? object.friendRequests.map((e: any) => FriendRequest.fromJSON(e))
        : [],
    };
  },

  toJSON(message: GetUserFriendRequestsIncomingResponse): unknown {
    const obj: any = {};
    if (message.friendRequests?.length) {
      obj.friendRequests = message.friendRequests.map((e) => FriendRequest.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserFriendRequestsIncomingResponse>): GetUserFriendRequestsIncomingResponse {
    return GetUserFriendRequestsIncomingResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserFriendRequestsIncomingResponse>): GetUserFriendRequestsIncomingResponse {
    const message = createBaseGetUserFriendRequestsIncomingResponse();
    message.friendRequests = object.friendRequests?.map((e) => FriendRequest.fromPartial(e)) || [];
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
