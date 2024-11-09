/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/v2/upload_file.proto" (package "boss.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { File } from "./file";
/**
 * @generated from protobuf message boss.v2.UploadFileRequest
 */
export interface UploadFileRequest {
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
    /**
     * @generated from protobuf field: bytes data = 13;
     */
    data: Uint8Array;
    /**
     * @generated from protobuf field: bool name_equals_data_id = 14;
     */
    nameEqualsDataId: boolean;
}
/**
 * @generated from protobuf message boss.v2.UploadFileResponse
 */
export interface UploadFileResponse {
    /**
     * @generated from protobuf field: boss.v2.File file = 1;
     */
    file?: File;
}
declare class UploadFileRequest$Type extends MessageType<UploadFileRequest> {
    constructor();
    create(value?: PartialMessage<UploadFileRequest>): UploadFileRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadFileRequest): UploadFileRequest;
    internalBinaryWrite(message: UploadFileRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.UploadFileRequest
 */
export declare const UploadFileRequest: UploadFileRequest$Type;
declare class UploadFileResponse$Type extends MessageType<UploadFileResponse> {
    constructor();
    create(value?: PartialMessage<UploadFileResponse>): UploadFileResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UploadFileResponse): UploadFileResponse;
    internalBinaryWrite(message: UploadFileResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.UploadFileResponse
 */
export declare const UploadFileResponse: UploadFileResponse$Type;
export {};
