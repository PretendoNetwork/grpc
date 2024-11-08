/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/user_connections.proto" (package "api", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message api.DiscordConnection
 */
export interface DiscordConnection {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message api.StripeConnection
 */
export interface StripeConnection {
    /**
     * @generated from protobuf field: optional string customer_id = 1;
     */
    customerId?: string;
    /**
     * @generated from protobuf field: optional string subscription_id = 2;
     */
    subscriptionId?: string;
    /**
     * @generated from protobuf field: optional string price_id = 3;
     */
    priceId?: string;
    /**
     * @generated from protobuf field: optional uint32 tier_level = 4;
     */
    tierLevel?: number;
    /**
     * @generated from protobuf field: optional string tier_name = 5;
     */
    tierName?: string;
    /**
     * @generated from protobuf field: uint64 latest_webhook_timestamp = 6;
     */
    latestWebhookTimestamp: bigint;
}
/**
 * @generated from protobuf message api.UserConnections
 */
export interface UserConnections {
    /**
     * @generated from protobuf field: api.DiscordConnection discord = 1;
     */
    discord?: DiscordConnection;
    /**
     * @generated from protobuf field: api.StripeConnection stripe = 2;
     */
    stripe?: StripeConnection;
}
declare class DiscordConnection$Type extends MessageType<DiscordConnection> {
    constructor();
    create(value?: PartialMessage<DiscordConnection>): DiscordConnection;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DiscordConnection): DiscordConnection;
    internalBinaryWrite(message: DiscordConnection, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message api.DiscordConnection
 */
export declare const DiscordConnection: DiscordConnection$Type;
declare class StripeConnection$Type extends MessageType<StripeConnection> {
    constructor();
    create(value?: PartialMessage<StripeConnection>): StripeConnection;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StripeConnection): StripeConnection;
    internalBinaryWrite(message: StripeConnection, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message api.StripeConnection
 */
export declare const StripeConnection: StripeConnection$Type;
declare class UserConnections$Type extends MessageType<UserConnections> {
    constructor();
    create(value?: PartialMessage<UserConnections>): UserConnections;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UserConnections): UserConnections;
    internalBinaryWrite(message: UserConnections, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message api.UserConnections
 */
export declare const UserConnections: UserConnections$Type;
export {};