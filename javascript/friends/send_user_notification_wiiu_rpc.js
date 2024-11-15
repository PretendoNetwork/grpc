/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "friends/send_user_notification_wiiu_rpc.proto" (package "friends", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendUserNotificationWiiURequest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SendUserNotificationWiiURequest$Type extends runtime_4.MessageType {
    constructor() {
        super("friends.SendUserNotificationWiiURequest", [
            { no: 1, name: "pid", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "notification_data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.pid = 0;
        message.notificationData = new Uint8Array(0);
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
                case /* bytes notification_data */ 2:
                    message.notificationData = reader.bytes();
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
        /* bytes notification_data = 2; */
        if (message.notificationData.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.notificationData);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message friends.SendUserNotificationWiiURequest
 */
exports.SendUserNotificationWiiURequest = new SendUserNotificationWiiURequest$Type();
