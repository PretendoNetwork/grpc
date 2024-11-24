"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: friends/deny_friend_request_rpc.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenyFriendRequestResponse = exports.DenyFriendRequestRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "friends";
function createBaseDenyFriendRequestRequest() {
    return { friendRequestId: 0n };
}
exports.DenyFriendRequestRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.friendRequestId !== 0n) {
            if (BigInt.asUintN(64, message.friendRequestId) !== message.friendRequestId) {
                throw new globalThis.Error("value provided for field message.friendRequestId of type uint64 too large");
            }
            writer.uint32(8).uint64(message.friendRequestId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenyFriendRequestRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.friendRequestId = reader.uint64();
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
    fromJSON(object) {
        return { friendRequestId: isSet(object.friendRequestId) ? BigInt(object.friendRequestId) : 0n };
    },
    toJSON(message) {
        const obj = {};
        if (message.friendRequestId !== 0n) {
            obj.friendRequestId = message.friendRequestId.toString();
        }
        return obj;
    },
    create(base) {
        return exports.DenyFriendRequestRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDenyFriendRequestRequest();
        message.friendRequestId = object.friendRequestId ?? 0n;
        return message;
    },
};
function createBaseDenyFriendRequestResponse() {
    return { success: false };
}
exports.DenyFriendRequestResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.success !== false) {
            writer.uint32(8).bool(message.success);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDenyFriendRequestResponse();
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
    fromJSON(object) {
        return { success: isSet(object.success) ? globalThis.Boolean(object.success) : false };
    },
    toJSON(message) {
        const obj = {};
        if (message.success !== false) {
            obj.success = message.success;
        }
        return obj;
    },
    create(base) {
        return exports.DenyFriendRequestResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseDenyFriendRequestResponse();
        message.success = object.success ?? false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
