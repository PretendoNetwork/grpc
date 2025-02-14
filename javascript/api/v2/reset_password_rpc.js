"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: api/v2/reset_password_rpc.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetPasswordResponse = exports.ResetPasswordRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "api.v2";
function createBaseResetPasswordRequest() {
    return { password: "", passwordConfirm: "", token: "" };
}
exports.ResetPasswordRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
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
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
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
    fromJSON(object) {
        return {
            password: isSet(object.password) ? globalThis.String(object.password) : "",
            passwordConfirm: isSet(object.passwordConfirm) ? globalThis.String(object.passwordConfirm) : "",
            token: isSet(object.token) ? globalThis.String(object.token) : "",
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.ResetPasswordRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResetPasswordRequest();
        message.password = object.password ?? "";
        message.passwordConfirm = object.passwordConfirm ?? "";
        message.token = object.token ?? "";
        return message;
    },
};
function createBaseResetPasswordResponse() {
    return {};
}
exports.ResetPasswordResponse = {
    encode(_, writer = new wire_1.BinaryWriter()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    create(base) {
        return exports.ResetPasswordResponse.fromPartial(base ?? {});
    },
    fromPartial(_) {
        const message = createBaseResetPasswordResponse();
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
