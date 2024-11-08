/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/file.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class File$Type extends runtime_4.MessageType {
    constructor() {
        super("boss.File", [
            { no: 1, name: "deleted", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "data_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "task_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "boss_app_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "supported_countries", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "supported_languages", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 7, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 8, name: "attribute1", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "attribute2", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 10, name: "attribute3", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "creator_pid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 12, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 13, name: "type", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 14, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 15, name: "size", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 16, name: "notify_on_new", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 17, name: "notify_led", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 18, name: "created_timestamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 19, name: "updated_timestamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.deleted = false;
        message.dataId = 0n;
        message.taskId = "";
        message.bossAppId = "";
        message.supportedCountries = [];
        message.supportedLanguages = [];
        message.password = "";
        message.attribute1 = "";
        message.attribute2 = "";
        message.attribute3 = "";
        message.creatorPid = 0;
        message.name = "";
        message.type = "";
        message.hash = "";
        message.size = 0n;
        message.notifyOnNew = [];
        message.notifyLed = false;
        message.createdTimestamp = 0n;
        message.updatedTimestamp = 0n;
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
                case /* uint64 data_id */ 2:
                    message.dataId = reader.uint64().toBigInt();
                    break;
                case /* string task_id */ 3:
                    message.taskId = reader.string();
                    break;
                case /* string boss_app_id */ 4:
                    message.bossAppId = reader.string();
                    break;
                case /* repeated string supported_countries */ 5:
                    message.supportedCountries.push(reader.string());
                    break;
                case /* repeated string supported_languages */ 6:
                    message.supportedLanguages.push(reader.string());
                    break;
                case /* string password */ 7:
                    message.password = reader.string();
                    break;
                case /* string attribute1 */ 8:
                    message.attribute1 = reader.string();
                    break;
                case /* string attribute2 */ 9:
                    message.attribute2 = reader.string();
                    break;
                case /* string attribute3 */ 10:
                    message.attribute3 = reader.string();
                    break;
                case /* uint32 creator_pid */ 11:
                    message.creatorPid = reader.uint32();
                    break;
                case /* string name */ 12:
                    message.name = reader.string();
                    break;
                case /* string type */ 13:
                    message.type = reader.string();
                    break;
                case /* string hash */ 14:
                    message.hash = reader.string();
                    break;
                case /* uint64 size */ 15:
                    message.size = reader.uint64().toBigInt();
                    break;
                case /* repeated string notify_on_new */ 16:
                    message.notifyOnNew.push(reader.string());
                    break;
                case /* bool notify_led */ 17:
                    message.notifyLed = reader.bool();
                    break;
                case /* uint64 created_timestamp */ 18:
                    message.createdTimestamp = reader.uint64().toBigInt();
                    break;
                case /* uint64 updated_timestamp */ 19:
                    message.updatedTimestamp = reader.uint64().toBigInt();
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
        /* uint64 data_id = 2; */
        if (message.dataId !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.dataId);
        /* string task_id = 3; */
        if (message.taskId !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.taskId);
        /* string boss_app_id = 4; */
        if (message.bossAppId !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.bossAppId);
        /* repeated string supported_countries = 5; */
        for (let i = 0; i < message.supportedCountries.length; i++)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.supportedCountries[i]);
        /* repeated string supported_languages = 6; */
        for (let i = 0; i < message.supportedLanguages.length; i++)
            writer.tag(6, runtime_1.WireType.LengthDelimited).string(message.supportedLanguages[i]);
        /* string password = 7; */
        if (message.password !== "")
            writer.tag(7, runtime_1.WireType.LengthDelimited).string(message.password);
        /* string attribute1 = 8; */
        if (message.attribute1 !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.attribute1);
        /* string attribute2 = 9; */
        if (message.attribute2 !== "")
            writer.tag(9, runtime_1.WireType.LengthDelimited).string(message.attribute2);
        /* string attribute3 = 10; */
        if (message.attribute3 !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.attribute3);
        /* uint32 creator_pid = 11; */
        if (message.creatorPid !== 0)
            writer.tag(11, runtime_1.WireType.Varint).uint32(message.creatorPid);
        /* string name = 12; */
        if (message.name !== "")
            writer.tag(12, runtime_1.WireType.LengthDelimited).string(message.name);
        /* string type = 13; */
        if (message.type !== "")
            writer.tag(13, runtime_1.WireType.LengthDelimited).string(message.type);
        /* string hash = 14; */
        if (message.hash !== "")
            writer.tag(14, runtime_1.WireType.LengthDelimited).string(message.hash);
        /* uint64 size = 15; */
        if (message.size !== 0n)
            writer.tag(15, runtime_1.WireType.Varint).uint64(message.size);
        /* repeated string notify_on_new = 16; */
        for (let i = 0; i < message.notifyOnNew.length; i++)
            writer.tag(16, runtime_1.WireType.LengthDelimited).string(message.notifyOnNew[i]);
        /* bool notify_led = 17; */
        if (message.notifyLed !== false)
            writer.tag(17, runtime_1.WireType.Varint).bool(message.notifyLed);
        /* uint64 created_timestamp = 18; */
        if (message.createdTimestamp !== 0n)
            writer.tag(18, runtime_1.WireType.Varint).uint64(message.createdTimestamp);
        /* uint64 updated_timestamp = 19; */
        if (message.updatedTimestamp !== 0n)
            writer.tag(19, runtime_1.WireType.Varint).uint64(message.updatedTimestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message boss.File
 */
exports.File = new File$Type();