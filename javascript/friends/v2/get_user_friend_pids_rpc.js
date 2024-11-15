/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "friends/v2/get_user_friend_pids_rpc.proto" (package "friends.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserFriendPIDsResponse = exports.GetUserFriendPIDsRequest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class GetUserFriendPIDsRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("friends.v2.GetUserFriendPIDsRequest", [
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
 * @generated MessageType for protobuf message friends.v2.GetUserFriendPIDsRequest
 */
exports.GetUserFriendPIDsRequest = new GetUserFriendPIDsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetUserFriendPIDsResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("friends.v2.GetUserFriendPIDsResponse", [
            { no: 1, name: "pids", kind: "scalar", repeat: 1 /*RepeatType.PACKED*/, T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.pids = [];
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated uint32 pids */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.pids.push(reader.uint32());
                    else
                        message.pids.push(reader.uint32());
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
        /* repeated uint32 pids = 1; */
        if (message.pids.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.pids.length; i++)
                writer.uint32(message.pids[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message friends.v2.GetUserFriendPIDsResponse
 */
exports.GetUserFriendPIDsResponse = new GetUserFriendPIDsResponse$Type();
