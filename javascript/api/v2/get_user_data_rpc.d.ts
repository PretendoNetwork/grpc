/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/v2/get_user_data_rpc.proto" (package "api.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { UserConnections } from "./user_connections";
import { Mii } from "./mii";
/**
 * @generated from protobuf message api.v2.GetUserDataRequest
 */
export interface GetUserDataRequest {
}
/**
 * @generated from protobuf message api.v2.GetUserDataResponse
 */
export interface GetUserDataResponse {
    /**
     * @generated from protobuf field: bool deleted = 1;
     */
    deleted: boolean;
    /**
     * @generated from protobuf field: string creation_date = 2;
     */
    creationDate: string;
    /**
     * @generated from protobuf field: string updated_date = 3;
     */
    updatedDate: string;
    /**
     * @generated from protobuf field: uint32 pid = 4;
     */
    pid: number;
    /**
     * @generated from protobuf field: string username = 5;
     */
    username: string;
    /**
     * @generated from protobuf field: int32 access_level = 6;
     */
    accessLevel: number;
    /**
     * @generated from protobuf field: string server_access_level = 7;
     */
    serverAccessLevel: string;
    /**
     * @generated from protobuf field: api.v2.Mii mii = 8;
     */
    mii?: Mii;
    /**
     * @generated from protobuf field: string birthday = 9;
     */
    birthday: string;
    /**
     * @generated from protobuf field: string gender = 10;
     */
    gender: string;
    /**
     * @generated from protobuf field: string country = 11;
     */
    country: string;
    /**
     * @generated from protobuf field: string timezone = 12;
     */
    timezone: string;
    /**
     * @generated from protobuf field: string language = 13;
     */
    language: string;
    /**
     * @generated from protobuf field: string email_address = 14;
     */
    emailAddress: string;
    /**
     * @generated from protobuf field: api.v2.UserConnections connections = 15;
     */
    connections?: UserConnections;
    /**
     * @generated from protobuf field: bool marketing_flag = 16;
     */
    marketingFlag: boolean;
}
declare class GetUserDataRequest$Type extends MessageType<GetUserDataRequest> {
    constructor();
    create(value?: PartialMessage<GetUserDataRequest>): GetUserDataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserDataRequest): GetUserDataRequest;
    internalBinaryWrite(message: GetUserDataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message api.v2.GetUserDataRequest
 */
export declare const GetUserDataRequest: GetUserDataRequest$Type;
declare class GetUserDataResponse$Type extends MessageType<GetUserDataResponse> {
    constructor();
    create(value?: PartialMessage<GetUserDataResponse>): GetUserDataResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserDataResponse): GetUserDataResponse;
    internalBinaryWrite(message: GetUserDataResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message api.v2.GetUserDataResponse
 */
export declare const GetUserDataResponse: GetUserDataResponse$Type;
export {};
