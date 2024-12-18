"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: api/v2/forgot_password_rpc.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordResponse = exports.ForgotPasswordRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "api.v2";
function createBaseForgotPasswordRequest() {
    return { emailAddressOrUsername: "" };
}
exports.ForgotPasswordRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.emailAddressOrUsername !== "") {
            writer.uint32(10).string(message.emailAddressOrUsername);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            emailAddressOrUsername: isSet(object.emailAddressOrUsername)
                ? globalThis.String(object.emailAddressOrUsername)
                : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.emailAddressOrUsername !== "") {
            obj.emailAddressOrUsername = message.emailAddressOrUsername;
        }
        return obj;
    },
    create(base) {
        return exports.ForgotPasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseForgotPasswordRequest();
        message.emailAddressOrUsername = object.emailAddressOrUsername ?? "";
        return message;
    },
};
function createBaseForgotPasswordResponse() {
    return {};
}
exports.ForgotPasswordResponse = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseForgotPasswordResponse();
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ForgotPasswordResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseForgotPasswordResponse();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
