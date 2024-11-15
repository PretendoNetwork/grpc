/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/v2/update_task.proto" (package "boss.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTaskResponse = exports.UpdateTaskRequest = exports.UpdateTaskData = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class UpdateTaskData$Type extends runtime_4.MessageType {
    constructor() {
        super("boss.v2.UpdateTaskData", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "boss_app_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "title_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "status", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.id = "";
        message.bossAppId = "";
        message.titleId = "";
        message.status = "";
        message.description = "";
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string boss_app_id */ 2:
                    message.bossAppId = reader.string();
                    break;
                case /* string title_id */ 3:
                    message.titleId = reader.string();
                    break;
                case /* string status */ 4:
                    message.status = reader.string();
                    break;
                case /* string description */ 5:
                    message.description = reader.string();
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
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.id);
        /* string boss_app_id = 2; */
        if (message.bossAppId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.bossAppId);
        /* string title_id = 3; */
        if (message.titleId !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.titleId);
        /* string status = 4; */
        if (message.status !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.status);
        /* string description = 5; */
        if (message.description !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.description);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message boss.v2.UpdateTaskData
 */
exports.UpdateTaskData = new UpdateTaskData$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateTaskRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("boss.v2.UpdateTaskRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "boss_app_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "update_data", kind: "message", T: () => exports.UpdateTaskData }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.id = "";
        message.bossAppId = "";
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string boss_app_id */ 2:
                    message.bossAppId = reader.string();
                    break;
                case /* boss.v2.UpdateTaskData update_data */ 3:
                    message.updateData = exports.UpdateTaskData.internalBinaryRead(reader, reader.uint32(), options, message.updateData);
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
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.id);
        /* string boss_app_id = 2; */
        if (message.bossAppId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.bossAppId);
        /* boss.v2.UpdateTaskData update_data = 3; */
        if (message.updateData)
            exports.UpdateTaskData.internalBinaryWrite(message.updateData, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message boss.v2.UpdateTaskRequest
 */
exports.UpdateTaskRequest = new UpdateTaskRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpdateTaskResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("boss.v2.UpdateTaskResponse", []);
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
 * @generated MessageType for protobuf message boss.v2.UpdateTaskResponse
 */
exports.UpdateTaskResponse = new UpdateTaskResponse$Type();
