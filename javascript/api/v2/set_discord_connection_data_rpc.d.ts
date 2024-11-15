/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/v2/set_discord_connection_data_rpc.proto" (package "api.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message api.v2.SetDiscordConnectionDataRequest
 */
export interface SetDiscordConnectionDataRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
}
/**
 * @generated from protobuf message api.v2.SetDiscordConnectionDataResponse
 */
export interface SetDiscordConnectionDataResponse {
}
declare class SetDiscordConnectionDataRequest$Type extends MessageType<SetDiscordConnectionDataRequest> {
    constructor();
    create(value?: PartialMessage<SetDiscordConnectionDataRequest>): SetDiscordConnectionDataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetDiscordConnectionDataRequest): SetDiscordConnectionDataRequest;
    internalBinaryWrite(message: SetDiscordConnectionDataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message api.v2.SetDiscordConnectionDataRequest
 */
export declare const SetDiscordConnectionDataRequest: SetDiscordConnectionDataRequest$Type;
declare class SetDiscordConnectionDataResponse$Type extends MessageType<SetDiscordConnectionDataResponse> {
    constructor();
    create(value?: PartialMessage<SetDiscordConnectionDataResponse>): SetDiscordConnectionDataResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SetDiscordConnectionDataResponse): SetDiscordConnectionDataResponse;
    internalBinaryWrite(message: SetDiscordConnectionDataResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message api.v2.SetDiscordConnectionDataResponse
 */
export declare const SetDiscordConnectionDataResponse: SetDiscordConnectionDataResponse$Type;
export {};
