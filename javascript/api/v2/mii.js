"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: api/v2/mii.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mii = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "api.v2";
function createBaseMii() {
    return { name: "", data: "", url: "" };
}
exports.Mii = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.data !== "") {
            writer.uint32(18).string(message.data);
        }
        if (message.url !== "") {
            writer.uint32(26).string(message.url);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMii();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.name = reader.string();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.data = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.url = reader.string();
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
            name: isSet(object.name) ? globalThis.String(object.name) : "",
            data: isSet(object.data) ? globalThis.String(object.data) : "",
            url: isSet(object.url) ? globalThis.String(object.url) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.name !== "") {
            obj.name = message.name;
        }
        if (message.data !== "") {
            obj.data = message.data;
        }
        if (message.url !== "") {
            obj.url = message.url;
        }
        return obj;
    },
    create(base) {
        return exports.Mii.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMii();
        message.name = object.name ?? "";
        message.data = object.data ?? "";
        message.url = object.url ?? "";
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
