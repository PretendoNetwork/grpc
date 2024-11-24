"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: account/get_nex_password_rpc.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNEXPasswordResponse = exports.GetNEXPasswordRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "account";
function createBaseGetNEXPasswordRequest() {
    return { pid: 0 };
}
exports.GetNEXPasswordRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pid !== 0) {
            writer.uint32(8).uint32(message.pid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNEXPasswordRequest();
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
    fromJSON(object) {
        return { pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0 };
    },
    toJSON(message) {
        const obj = {};
        if (message.pid !== 0) {
            obj.pid = Math.round(message.pid);
        }
        return obj;
    },
    create(base) {
        return exports.GetNEXPasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetNEXPasswordRequest();
        message.pid = object.pid ?? 0;
        return message;
    },
};
function createBaseGetNEXPasswordResponse() {
    return { password: "" };
}
exports.GetNEXPasswordResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.password !== "") {
            writer.uint32(10).string(message.password);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetNEXPasswordResponse();
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
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skip(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return { password: isSet(object.password) ? globalThis.String(object.password) : "" };
    },
    toJSON(message) {
        const obj = {};
        if (message.password !== "") {
            obj.password = message.password;
        }
        return obj;
    },
    create(base) {
        return exports.GetNEXPasswordResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetNEXPasswordResponse();
        message.password = object.password ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
