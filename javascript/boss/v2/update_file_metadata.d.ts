/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/v2/update_file_metadata.proto" (package "boss.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message boss.v2.UpdateFileMetadataData
 */
export interface UpdateFileMetadataData {
    /**
     * @generated from protobuf field: string task_id = 1;
     */
    taskId: string;
    /**
     * @generated from protobuf field: string boss_app_id = 2;
     */
    bossAppId: string;
    /**
     * @generated from protobuf field: repeated string supported_countries = 3;
     */
    supportedCountries: string[];
    /**
     * @generated from protobuf field: repeated string supported_languages = 4;
     */
    supportedLanguages: string[];
    /**
     * @generated from protobuf field: string password = 5;
     */
    password: string;
    /**
     * @generated from protobuf field: string attribute1 = 6;
     */
    attribute1: string;
    /**
     * @generated from protobuf field: string attribute2 = 7;
     */
    attribute2: string;
    /**
     * @generated from protobuf field: string attribute3 = 8;
     */
    attribute3: string;
    /**
     * @generated from protobuf field: string name = 9;
     */
    name: string;
    /**
     * @generated from protobuf field: string type = 10;
     */
    type: string;
    /**
     * @generated from protobuf field: repeated string notify_on_new = 11;
     */
    notifyOnNew: string[];
    /**
     * @generated from protobuf field: bool notify_led = 12;
     */
    notifyLed: boolean;
}
/**
 * @generated from protobuf message boss.v2.UpdateFileMetadataRequest
 */
export interface UpdateFileMetadataRequest {
    /**
     * @generated from protobuf field: uint64 data_id = 1;
     */
    dataId: bigint;
    /**
     * @generated from protobuf field: boss.v2.UpdateFileMetadataData update_data = 2;
     */
    updateData?: UpdateFileMetadataData;
}
/**
 * @generated from protobuf message boss.v2.UpdateFileMetadataResponse
 */
export interface UpdateFileMetadataResponse {
}
declare class UpdateFileMetadataData$Type extends MessageType<UpdateFileMetadataData> {
    constructor();
    create(value?: PartialMessage<UpdateFileMetadataData>): UpdateFileMetadataData;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateFileMetadataData): UpdateFileMetadataData;
    internalBinaryWrite(message: UpdateFileMetadataData, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.UpdateFileMetadataData
 */
export declare const UpdateFileMetadataData: UpdateFileMetadataData$Type;
declare class UpdateFileMetadataRequest$Type extends MessageType<UpdateFileMetadataRequest> {
    constructor();
    create(value?: PartialMessage<UpdateFileMetadataRequest>): UpdateFileMetadataRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateFileMetadataRequest): UpdateFileMetadataRequest;
    internalBinaryWrite(message: UpdateFileMetadataRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.UpdateFileMetadataRequest
 */
export declare const UpdateFileMetadataRequest: UpdateFileMetadataRequest$Type;
declare class UpdateFileMetadataResponse$Type extends MessageType<UpdateFileMetadataResponse> {
    constructor();
    create(value?: PartialMessage<UpdateFileMetadataResponse>): UpdateFileMetadataResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpdateFileMetadataResponse): UpdateFileMetadataResponse;
    internalBinaryWrite(message: UpdateFileMetadataResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.UpdateFileMetadataResponse
 */
export declare const UpdateFileMetadataResponse: UpdateFileMetadataResponse$Type;
export {};