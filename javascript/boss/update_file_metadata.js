/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/update_file_metadata.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFileMetadataRequest = exports.UpdateFileMetadataData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class UpdateFileMetadataData$Type extends runtime_4.MessageType {
    constructor() {
        super("boss.UpdateFileMetadataData", [
            { no: 1, name: "task_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "boss_app_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "supported_countries", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "supported_languages", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "attribute1", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "attribute2", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "attribute3", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "notify_on_new", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "notify_led", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.taskId = "";
        message.bossAppId = "";
        message.supportedCountries = [];
        message.supportedLanguages = [];
        message.password = "";
        message.attribute1 = "";
        message.attribute2 = "";
        message.attribute3 = "";
        message.name = "";
        message.type = "";
        message.notifyOnNew = [];
        message.notifyLed = false;
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string task_id */ 1:
                    message.taskId = reader.string();
                    break;
                case /* string boss_app_id */ 2:
                    message.bossAppId = reader.string();
                    break;
                case /* repeated string supported_countries */ 3:
                    message.supportedCountries.push(reader.string());
                    break;
                case /* repeated string supported_languages */ 4:
                    message.supportedLanguages.push(reader.string());
                    break;
                case /* string password */ 5:
                    message.password = reader.string();
                    break;
                case /* string attribute1 */ 6:
                    message.attribute1 = reader.string();
                    break;
                case /* string attribute2 */ 7:
                    message.attribute2 = reader.string();
                    break;
                case /* string attribute3 */ 8:
                    message.attribute3 = reader.string();
                    break;
                case /* string name */ 9:
                    message.name = reader.string();
                    break;
                case /* string type */ 10:
                    message.type = reader.string();
                    break;
                case /* repeated string notify_on_new */ 11:
                    message.notifyOnNew.push(reader.string());
                    break;
                case /* bool notify_led */ 12:
                    message.notifyLed = reader.bool();
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
        /* string task_id = 1; */
        if (message.taskId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.taskId);
        /* string boss_app_id = 2; */
        if (message.bossAppId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.bossAppId);
        /* repeated string supported_countries = 3; */
        for (let i = 0; i < message.supportedCountries.length; i++)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.supportedCountries[i]);
        /* repeated string supported_languages = 4; */
        for (let i = 0; i < message.supportedLanguages.length; i++)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.supportedLanguages[i]);
        /* string password = 5; */
        if (message.password !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.password);
        /* string attribute1 = 6; */
        if (message.attribute1 !== "")
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.attribute1);
        /* string attribute2 = 7; */
        if (message.attribute2 !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.attribute2);
        /* string attribute3 = 8; */
        if (message.attribute3 !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.attribute3);
        /* string name = 9; */
        if (message.name !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.name);
        /* string type = 10; */
        if (message.type !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.type);
        /* repeated string notify_on_new = 11; */
        for (let i = 0; i < message.notifyOnNew.length; i++)
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.notifyOnNew[i]);
        /* bool notify_led = 12; */
        if (message.notifyLed !== false)
            writer.tag(12, runtime_1.WireType.Varint).bool(message.notifyLed);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message boss.UpdateFileMetadataData
 */
exports.UpdateFileMetadataData = new UpdateFileMetadataData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateFileMetadataRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("boss.UpdateFileMetadataRequest", [
            { no: 1, name: "data_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "update_data", kind: "message", T: () => exports.UpdateFileMetadataData }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.dataId = 0n;
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 data_id */ 1:
                    message.dataId = reader.uint64().toBigInt();
                    break;
                case /* boss.UpdateFileMetadataData update_data */ 2:
                    message.updateData = exports.UpdateFileMetadataData.internalBinaryRead(reader, reader.uint32(), options, message.updateData);
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
        /* uint64 data_id = 1; */
        if (message.dataId !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.dataId);
        /* boss.UpdateFileMetadataData update_data = 2; */
        if (message.updateData)
            exports.UpdateFileMetadataData.internalBinaryWrite(message.updateData, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message boss.UpdateFileMetadataRequest
 */
exports.UpdateFileMetadataRequest = new UpdateFileMetadataRequest$Type();
