/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/list_tasks.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTasksResponse = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const task_1 = require("./task");
// @generated message type with reflection information, may provide speed optimized methods
class ListTasksResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("boss.ListTasksResponse", [
            { no: 1, name: "tasks", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => task_1.Task }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.tasks = [];
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated boss.Task tasks */ 1:
                    message.tasks.push(task_1.Task.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated boss.Task tasks = 1; */
        for (let i = 0; i < message.tasks.length; i++)
            task_1.Task.internalBinaryWrite(message.tasks[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message boss.ListTasksResponse
 */
exports.ListTasksResponse = new ListTasksResponse$Type();