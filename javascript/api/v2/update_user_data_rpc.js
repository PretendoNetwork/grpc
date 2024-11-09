/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/v2/update_user_data_rpc.proto" (package "api.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDataResponse = exports.UpdateUserDataRequest = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/v2/update_user_data_rpc.proto" (package "api.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const user_connections_1 = require("./user_connections");
const mii_1 = require("./mii");
// @generated message type with reflection information, may provide speed optimized methods
class UpdateUserDataRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("api.v2.UpdateUserDataRequest", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message api.v2.UpdateUserDataRequest
 */
exports.UpdateUserDataRequest = new UpdateUserDataRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateUserDataResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("api.v2.UpdateUserDataResponse", [
            { no: 1, name: "deleted", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "creation_date", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "updated_date", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "pid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "access_level", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 7, name: "server_access_level", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "mii", kind: "message", T: () => mii_1.Mii },
            { no: 9, name: "birthday", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "gender", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "country", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "timezone", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "language", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "email_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "connections", kind: "message", T: () => user_connections_1.UserConnections },
            { no: 16, name: "marketing_flag", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.deleted = false;
        message.creationDate = "";
        message.updatedDate = "";
        message.pid = 0;
        message.username = "";
        message.accessLevel = 0;
        message.serverAccessLevel = "";
        message.birthday = "";
        message.gender = "";
        message.country = "";
        message.timezone = "";
        message.language = "";
        message.emailAddress = "";
        message.marketingFlag = false;
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool deleted */ 1:
                    message.deleted = reader.bool();
                    break;
                case /* string creation_date */ 2:
                    message.creationDate = reader.string();
                    break;
                case /* string updated_date */ 3:
                    message.updatedDate = reader.string();
                    break;
                case /* uint32 pid */ 4:
                    message.pid = reader.uint32();
                    break;
                case /* string username */ 5:
                    message.username = reader.string();
                    break;
                case /* int32 access_level */ 6:
                    message.accessLevel = reader.int32();
                    break;
                case /* string server_access_level */ 7:
                    message.serverAccessLevel = reader.string();
                    break;
                case /* api.v2.Mii mii */ 8:
                    message.mii = mii_1.Mii.internalBinaryRead(reader, reader.uint32(), options, message.mii);
                    break;
                case /* string birthday */ 9:
                    message.birthday = reader.string();
                    break;
                case /* string gender */ 10:
                    message.gender = reader.string();
                    break;
                case /* string country */ 11:
                    message.country = reader.string();
                    break;
                case /* string timezone */ 12:
                    message.timezone = reader.string();
                    break;
                case /* string language */ 13:
                    message.language = reader.string();
                    break;
                case /* string email_address */ 14:
                    message.emailAddress = reader.string();
                    break;
                case /* api.v2.UserConnections connections */ 15:
                    message.connections = user_connections_1.UserConnections.internalBinaryRead(reader, reader.uint32(), options, message.connections);
                    break;
                case /* bool marketing_flag */ 16:
                    message.marketingFlag = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* bool deleted = 1; */
        if (message.deleted !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.deleted);
        /* string creation_date = 2; */
        if (message.creationDate !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.creationDate);
        /* string updated_date = 3; */
        if (message.updatedDate !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.updatedDate);
        /* uint32 pid = 4; */
        if (message.pid !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.pid);
        /* string username = 5; */
        if (message.username !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.username);
        /* int32 access_level = 6; */
        if (message.accessLevel !== 0)
            writer.tag(6, runtime_1.WireType.Varint).int32(message.accessLevel);
        /* string server_access_level = 7; */
        if (message.serverAccessLevel !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.serverAccessLevel);
        /* api.v2.Mii mii = 8; */
        if (message.mii)
            mii_1.Mii.internalBinaryWrite(message.mii, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string birthday = 9; */
        if (message.birthday !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.birthday);
        /* string gender = 10; */
        if (message.gender !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.gender);
        /* string country = 11; */
        if (message.country !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.country);
        /* string timezone = 12; */
        if (message.timezone !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.timezone);
        /* string language = 13; */
        if (message.language !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.language);
        /* string email_address = 14; */
        if (message.emailAddress !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.emailAddress);
        /* api.v2.UserConnections connections = 15; */
        if (message.connections)
            user_connections_1.UserConnections.internalBinaryWrite(message.connections, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool marketing_flag = 16; */
        if (message.marketingFlag !== false)
            writer.tag(16, runtime_1.WireType.Varint).bool(message.marketingFlag);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message api.v2.UpdateUserDataResponse
 */
exports.UpdateUserDataResponse = new UpdateUserDataResponse$Type();
