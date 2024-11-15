/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/v2/forgot_password_rpc.proto" (package "api.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForgotPasswordResponse = exports.ForgotPasswordRequest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class ForgotPasswordRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("api.v2.ForgotPasswordRequest", [
            { no: 1, name: "email_address_or_username", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.emailAddressOrUsername = "";
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string email_address_or_username */ 1:
                    message.emailAddressOrUsername = reader.string();
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
        /* string email_address_or_username = 1; */
        if (message.emailAddressOrUsername !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.emailAddressOrUsername);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message api.v2.ForgotPasswordRequest
 */
exports.ForgotPasswordRequest = new ForgotPasswordRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ForgotPasswordResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("api.v2.ForgotPasswordResponse", []);
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
 * @generated MessageType for protobuf message api.v2.ForgotPasswordResponse
 */
exports.ForgotPasswordResponse = new ForgotPasswordResponse$Type();
