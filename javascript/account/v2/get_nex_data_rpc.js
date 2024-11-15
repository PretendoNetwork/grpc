/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "account/v2/get_nex_data_rpc.proto" (package "account.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetNEXDataResponse = exports.GetNEXDataRequest = exports.DeviceType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
/**
 * @generated from protobuf enum account.v2.DeviceType
 */
var DeviceType;
(function (DeviceType) {
    /**
     * @generated from protobuf enum value: DEVICE_TYPE_UNSPECIFIED = 0;
     */
    DeviceType[DeviceType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * @generated from protobuf enum value: DEVICE_TYPE_CTR = 1;
     */
    DeviceType[DeviceType["CTR"] = 1] = "CTR";
    /**
     * @generated from protobuf enum value: DEVICE_TYPE_WUP = 2;
     */
    DeviceType[DeviceType["WUP"] = 2] = "WUP";
})(DeviceType = exports.DeviceType || (exports.DeviceType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class GetNEXDataRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("account.v2.GetNEXDataRequest", [
            { no: 1, name: "pid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.pid = 0;
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 pid */ 1:
                    message.pid = reader.uint32();
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
        /* uint32 pid = 1; */
        if (message.pid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.pid);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message account.v2.GetNEXDataRequest
 */
exports.GetNEXDataRequest = new GetNEXDataRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNEXDataResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("account.v2.GetNEXDataResponse", [
            { no: 1, name: "pid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "owning_pid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "access_level", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 5, name: "server_access_level", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "friend_code", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "device_type", kind: "enum", T: () => ["account.v2.DeviceType", DeviceType, "DEVICE_TYPE_"] }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.pid = 0;
        message.password = "";
        message.owningPid = 0;
        message.accessLevel = 0;
        message.serverAccessLevel = "";
        message.friendCode = "";
        message.deviceType = 0;
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 pid */ 1:
                    message.pid = reader.uint32();
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
                    break;
                case /* uint32 owning_pid */ 3:
                    message.owningPid = reader.uint32();
                    break;
                case /* int32 access_level */ 4:
                    message.accessLevel = reader.int32();
                    break;
                case /* string server_access_level */ 5:
                    message.serverAccessLevel = reader.string();
                    break;
                case /* string friend_code */ 6:
                    message.friendCode = reader.string();
                    break;
                case /* account.v2.DeviceType device_type */ 7:
                    message.deviceType = reader.int32();
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
        /* uint32 pid = 1; */
        if (message.pid !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.pid);
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.password);
        /* uint32 owning_pid = 3; */
        if (message.owningPid !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.owningPid);
        /* int32 access_level = 4; */
        if (message.accessLevel !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.accessLevel);
        /* string server_access_level = 5; */
        if (message.serverAccessLevel !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.serverAccessLevel);
        /* string friend_code = 6; */
        if (message.friendCode !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.friendCode);
        /* account.v2.DeviceType device_type = 7; */
        if (message.deviceType !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.deviceType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message account.v2.GetNEXDataResponse
 */
exports.GetNEXDataResponse = new GetNEXDataResponse$Type();