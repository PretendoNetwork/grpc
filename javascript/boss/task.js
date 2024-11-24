"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: boss/task.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "boss";
function createBaseTask() {
    return {
        deleted: false,
        id: "",
        inGameId: "",
        bossAppId: "",
        creatorPid: 0,
        status: "",
        titleId: "",
        description: "",
        createdTimestamp: 0n,
        updatedTimestamp: 0n,
    };
}
exports.Task = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.deleted !== false) {
            writer.uint32(8).bool(message.deleted);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.inGameId !== "") {
            writer.uint32(26).string(message.inGameId);
        }
        if (message.bossAppId !== "") {
            writer.uint32(34).string(message.bossAppId);
        }
        if (message.creatorPid !== 0) {
            writer.uint32(40).uint32(message.creatorPid);
        }
        if (message.status !== "") {
            writer.uint32(50).string(message.status);
        }
        if (message.titleId !== "") {
            writer.uint32(58).string(message.titleId);
        }
        if (message.description !== "") {
            writer.uint32(66).string(message.description);
        }
        if (message.createdTimestamp !== 0n) {
            if (BigInt.asUintN(64, message.createdTimestamp) !== message.createdTimestamp) {
                throw new globalThis.Error("value provided for field message.createdTimestamp of type uint64 too large");
            }
            writer.uint32(72).uint64(message.createdTimestamp);
        }
        if (message.updatedTimestamp !== 0n) {
            if (BigInt.asUintN(64, message.updatedTimestamp) !== message.updatedTimestamp) {
                throw new globalThis.Error("value provided for field message.updatedTimestamp of type uint64 too large");
            }
            writer.uint32(80).uint64(message.updatedTimestamp);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseTask();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.deleted = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 18) {
                        break;
                    }
                    message.id = reader.string();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.inGameId = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 34) {
                        break;
                    }
                    message.bossAppId = reader.string();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.creatorPid = reader.uint32();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.status = reader.string();
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.titleId = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.description = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 72) {
                        break;
                    }
                    message.createdTimestamp = reader.uint64();
                    continue;
                }
                case 10: {
                    if (tag !== 80) {
                        break;
                    }
                    message.updatedTimestamp = reader.uint64();
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
            deleted: isSet(object.deleted) ? globalThis.Boolean(object.deleted) : false,
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            inGameId: isSet(object.inGameId) ? globalThis.String(object.inGameId) : "",
            bossAppId: isSet(object.bossAppId) ? globalThis.String(object.bossAppId) : "",
            creatorPid: isSet(object.creatorPid) ? globalThis.Number(object.creatorPid) : 0,
            status: isSet(object.status) ? globalThis.String(object.status) : "",
            titleId: isSet(object.titleId) ? globalThis.String(object.titleId) : "",
            description: isSet(object.description) ? globalThis.String(object.description) : "",
            createdTimestamp: isSet(object.createdTimestamp) ? BigInt(object.createdTimestamp) : 0n,
            updatedTimestamp: isSet(object.updatedTimestamp) ? BigInt(object.updatedTimestamp) : 0n,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deleted !== false) {
            obj.deleted = message.deleted;
        }
        if (message.id !== "") {
            obj.id = message.id;
        }
        if (message.inGameId !== "") {
            obj.inGameId = message.inGameId;
        }
        if (message.bossAppId !== "") {
            obj.bossAppId = message.bossAppId;
        }
        if (message.creatorPid !== 0) {
            obj.creatorPid = Math.round(message.creatorPid);
        }
        if (message.status !== "") {
            obj.status = message.status;
        }
        if (message.titleId !== "") {
            obj.titleId = message.titleId;
        }
        if (message.description !== "") {
            obj.description = message.description;
        }
        if (message.createdTimestamp !== 0n) {
            obj.createdTimestamp = message.createdTimestamp.toString();
        }
        if (message.updatedTimestamp !== 0n) {
            obj.updatedTimestamp = message.updatedTimestamp.toString();
        }
        return obj;
    },
    create(base) {
        return exports.Task.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseTask();
        message.deleted = object.deleted ?? false;
        message.id = object.id ?? "";
        message.inGameId = object.inGameId ?? "";
        message.bossAppId = object.bossAppId ?? "";
        message.creatorPid = object.creatorPid ?? 0;
        message.status = object.status ?? "";
        message.titleId = object.titleId ?? "";
        message.description = object.description ?? "";
        message.createdTimestamp = object.createdTimestamp ?? 0n;
        message.updatedTimestamp = object.updatedTimestamp ?? 0n;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
