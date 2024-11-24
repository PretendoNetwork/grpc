"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: boss/list_files.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListFilesResponse = exports.ListFilesRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const file_1 = require("./file");
exports.protobufPackage = "boss";
function createBaseListFilesRequest() {
    return { taskId: "", bossAppId: "", country: undefined, language: undefined };
}
exports.ListFilesRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.taskId !== "") {
            writer.uint32(10).string(message.taskId);
        }
        if (message.bossAppId !== "") {
            writer.uint32(18).string(message.bossAppId);
        }
        if (message.country !== undefined) {
            writer.uint32(26).string(message.country);
        }
        if (message.language !== undefined) {
            writer.uint32(34).string(message.language);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListFilesRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.taskId = reader.string();
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
                    message.country = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.language = reader.string();
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
            taskId: isSet(object.taskId) ? globalThis.String(object.taskId) : "",
            bossAppId: isSet(object.bossAppId) ? globalThis.String(object.bossAppId) : "",
            country: isSet(object.country) ? globalThis.String(object.country) : undefined,
            language: isSet(object.language) ? globalThis.String(object.language) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.taskId !== "") {
            obj.taskId = message.taskId;
        }
        if (message.bossAppId !== "") {
            obj.bossAppId = message.bossAppId;
        }
        if (message.country !== undefined) {
            obj.country = message.country;
        }
        if (message.language !== undefined) {
            obj.language = message.language;
        }
        return obj;
    },
    create(base) {
        return exports.ListFilesRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListFilesRequest();
        message.taskId = object.taskId ?? "";
        message.bossAppId = object.bossAppId ?? "";
        message.country = object.country ?? undefined;
        message.language = object.language ?? undefined;
        return message;
    },
};
function createBaseListFilesResponse() {
    return { files: [] };
}
exports.ListFilesResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        for (const v of message.files) {
            file_1.File.encode(v, writer.uint32(10).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseListFilesResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 10) {
                        break;
                    }
                    message.files.push(file_1.File.decode(reader, reader.uint32()));
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
        return { files: globalThis.Array.isArray(object?.files) ? object.files.map((e) => file_1.File.fromJSON(e)) : [] };
    },
    toJSON(message) {
        const obj = {};
        if (message.files?.length) {
            obj.files = message.files.map((e) => file_1.File.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ListFilesResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseListFilesResponse();
        message.files = object.files?.map((e) => file_1.File.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
