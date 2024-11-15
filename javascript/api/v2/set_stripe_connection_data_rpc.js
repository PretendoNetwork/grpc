/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/v2/set_stripe_connection_data_rpc.proto" (package "api.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetStripeConnectionDataResponse = exports.SetStripeConnectionDataRequest = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class SetStripeConnectionDataRequest$Type extends runtime_4.MessageType {
    constructor() {
        super("api.v2.SetStripeConnectionDataRequest", [
            { no: 1, name: "customer_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "subscription_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "price_id", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "tier_level", kind: "scalar", opt: true, T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "tier_name", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "timestamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.timestamp = 0n;
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* optional string customer_id */ 1:
                    message.customerId = reader.string();
                    break;
                case /* optional string subscription_id */ 2:
                    message.subscriptionId = reader.string();
                    break;
                case /* optional string price_id */ 3:
                    message.priceId = reader.string();
                    break;
                case /* optional uint32 tier_level */ 4:
                    message.tierLevel = reader.uint32();
                    break;
                case /* optional string tier_name */ 5:
                    message.tierName = reader.string();
                    break;
                case /* uint64 timestamp */ 6:
                    message.timestamp = reader.uint64().toBigInt();
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
        /* optional string customer_id = 1; */
        if (message.customerId !== undefined)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.customerId);
        /* optional string subscription_id = 2; */
        if (message.subscriptionId !== undefined)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.subscriptionId);
        /* optional string price_id = 3; */
        if (message.priceId !== undefined)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.priceId);
        /* optional uint32 tier_level = 4; */
        if (message.tierLevel !== undefined)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.tierLevel);
        /* optional string tier_name = 5; */
        if (message.tierName !== undefined)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.tierName);
        /* uint64 timestamp = 6; */
        if (message.timestamp !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.timestamp);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message api.v2.SetStripeConnectionDataRequest
 */
exports.SetStripeConnectionDataRequest = new SetStripeConnectionDataRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetStripeConnectionDataResponse$Type extends runtime_4.MessageType {
    constructor() {
        super("api.v2.SetStripeConnectionDataResponse", []);
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
 * @generated MessageType for protobuf message api.v2.SetStripeConnectionDataResponse
 */
exports.SetStripeConnectionDataResponse = new SetStripeConnectionDataResponse$Type();