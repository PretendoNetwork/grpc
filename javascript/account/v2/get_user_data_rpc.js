"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: account/v2/get_user_data_rpc.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserDataResponse = exports.GetUserDataRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
const device_1 = require("./device");
const mii_1 = require("./mii");
const pnid_permission_flags_1 = require("./pnid_permission_flags");
exports.protobufPackage = "account.v2";
function createBaseGetUserDataRequest() {
    return { pid: 0 };
}
exports.GetUserDataRequest = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.pid !== 0) {
            writer.uint32(8).uint32(message.pid);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserDataRequest();
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
        return exports.GetUserDataRequest.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserDataRequest();
        message.pid = object.pid ?? 0;
        return message;
    },
};
function createBaseGetUserDataResponse() {
    return {
        deleted: false,
        pid: 0,
        username: "",
        accessLevel: 0,
        serverAccessLevel: "",
        mii: undefined,
        creationDate: "",
        birthdate: "",
        gender: "",
        country: "",
        language: "",
        emailAddress: "",
        tierName: "",
        permissions: undefined,
        linkedDevices: [],
    };
}
exports.GetUserDataResponse = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.deleted !== false) {
            writer.uint32(8).bool(message.deleted);
        }
        if (message.pid !== 0) {
            writer.uint32(16).uint32(message.pid);
        }
        if (message.username !== "") {
            writer.uint32(26).string(message.username);
        }
        if (message.accessLevel !== 0) {
            writer.uint32(32).int32(message.accessLevel);
        }
        if (message.serverAccessLevel !== "") {
            writer.uint32(42).string(message.serverAccessLevel);
        }
        if (message.mii !== undefined) {
            mii_1.Mii.encode(message.mii, writer.uint32(50).fork()).join();
        }
        if (message.creationDate !== "") {
            writer.uint32(58).string(message.creationDate);
        }
        if (message.birthdate !== "") {
            writer.uint32(66).string(message.birthdate);
        }
        if (message.gender !== "") {
            writer.uint32(74).string(message.gender);
        }
        if (message.country !== "") {
            writer.uint32(82).string(message.country);
        }
        if (message.language !== "") {
            writer.uint32(90).string(message.language);
        }
        if (message.emailAddress !== "") {
            writer.uint32(98).string(message.emailAddress);
        }
        if (message.tierName !== "") {
            writer.uint32(106).string(message.tierName);
        }
        if (message.permissions !== undefined) {
            pnid_permission_flags_1.PNIDPermissionFlags.encode(message.permissions, writer.uint32(114).fork()).join();
        }
        for (const v of message.linkedDevices) {
            device_1.Device.encode(v, writer.uint32(122).fork()).join();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGetUserDataResponse();
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
                    if (tag !== 16) {
                        break;
                    }
                    message.pid = reader.uint32();
                    continue;
                }
                case 3: {
                    if (tag !== 26) {
                        break;
                    }
                    message.username = reader.string();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.accessLevel = reader.int32();
                    continue;
                }
                case 5: {
                    if (tag !== 42) {
                        break;
                    }
                    message.serverAccessLevel = reader.string();
                    continue;
                }
                case 6: {
                    if (tag !== 50) {
                        break;
                    }
                    message.mii = mii_1.Mii.decode(reader, reader.uint32());
                    continue;
                }
                case 7: {
                    if (tag !== 58) {
                        break;
                    }
                    message.creationDate = reader.string();
                    continue;
                }
                case 8: {
                    if (tag !== 66) {
                        break;
                    }
                    message.birthdate = reader.string();
                    continue;
                }
                case 9: {
                    if (tag !== 74) {
                        break;
                    }
                    message.gender = reader.string();
                    continue;
                }
                case 10: {
                    if (tag !== 82) {
                        break;
                    }
                    message.country = reader.string();
                    continue;
                }
                case 11: {
                    if (tag !== 90) {
                        break;
                    }
                    message.language = reader.string();
                    continue;
                }
                case 12: {
                    if (tag !== 98) {
                        break;
                    }
                    message.emailAddress = reader.string();
                    continue;
                }
                case 13: {
                    if (tag !== 106) {
                        break;
                    }
                    message.tierName = reader.string();
                    continue;
                }
                case 14: {
                    if (tag !== 114) {
                        break;
                    }
                    message.permissions = pnid_permission_flags_1.PNIDPermissionFlags.decode(reader, reader.uint32());
                    continue;
                }
                case 15: {
                    if (tag !== 122) {
                        break;
                    }
                    message.linkedDevices.push(device_1.Device.decode(reader, reader.uint32()));
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
            pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0,
            username: isSet(object.username) ? globalThis.String(object.username) : "",
            accessLevel: isSet(object.accessLevel) ? globalThis.Number(object.accessLevel) : 0,
            serverAccessLevel: isSet(object.serverAccessLevel) ? globalThis.String(object.serverAccessLevel) : "",
            mii: isSet(object.mii) ? mii_1.Mii.fromJSON(object.mii) : undefined,
            creationDate: isSet(object.creationDate) ? globalThis.String(object.creationDate) : "",
            birthdate: isSet(object.birthdate) ? globalThis.String(object.birthdate) : "",
            gender: isSet(object.gender) ? globalThis.String(object.gender) : "",
            country: isSet(object.country) ? globalThis.String(object.country) : "",
            language: isSet(object.language) ? globalThis.String(object.language) : "",
            emailAddress: isSet(object.emailAddress) ? globalThis.String(object.emailAddress) : "",
            tierName: isSet(object.tierName) ? globalThis.String(object.tierName) : "",
            permissions: isSet(object.permissions) ? pnid_permission_flags_1.PNIDPermissionFlags.fromJSON(object.permissions) : undefined,
            linkedDevices: globalThis.Array.isArray(object?.linkedDevices)
                ? object.linkedDevices.map((e) => device_1.Device.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.deleted !== false) {
            obj.deleted = message.deleted;
        }
        if (message.pid !== 0) {
            obj.pid = Math.round(message.pid);
        }
        if (message.username !== "") {
            obj.username = message.username;
        }
        if (message.accessLevel !== 0) {
            obj.accessLevel = Math.round(message.accessLevel);
        }
        if (message.serverAccessLevel !== "") {
            obj.serverAccessLevel = message.serverAccessLevel;
        }
        if (message.mii !== undefined) {
            obj.mii = mii_1.Mii.toJSON(message.mii);
        }
        if (message.creationDate !== "") {
            obj.creationDate = message.creationDate;
        }
        if (message.birthdate !== "") {
            obj.birthdate = message.birthdate;
        }
        if (message.gender !== "") {
            obj.gender = message.gender;
        }
        if (message.country !== "") {
            obj.country = message.country;
        }
        if (message.language !== "") {
            obj.language = message.language;
        }
        if (message.emailAddress !== "") {
            obj.emailAddress = message.emailAddress;
        }
        if (message.tierName !== "") {
            obj.tierName = message.tierName;
        }
        if (message.permissions !== undefined) {
            obj.permissions = pnid_permission_flags_1.PNIDPermissionFlags.toJSON(message.permissions);
        }
        if (message.linkedDevices?.length) {
            obj.linkedDevices = message.linkedDevices.map((e) => device_1.Device.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.GetUserDataResponse.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseGetUserDataResponse();
        message.deleted = object.deleted ?? false;
        message.pid = object.pid ?? 0;
        message.username = object.username ?? "";
        message.accessLevel = object.accessLevel ?? 0;
        message.serverAccessLevel = object.serverAccessLevel ?? "";
        message.mii = (object.mii !== undefined && object.mii !== null) ? mii_1.Mii.fromPartial(object.mii) : undefined;
        message.creationDate = object.creationDate ?? "";
        message.birthdate = object.birthdate ?? "";
        message.gender = object.gender ?? "";
        message.country = object.country ?? "";
        message.language = object.language ?? "";
        message.emailAddress = object.emailAddress ?? "";
        message.tierName = object.tierName ?? "";
        message.permissions = (object.permissions !== undefined && object.permissions !== null)
            ? pnid_permission_flags_1.PNIDPermissionFlags.fromPartial(object.permissions)
            : undefined;
        message.linkedDevices = object.linkedDevices?.map((e) => device_1.Device.fromPartial(e)) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
