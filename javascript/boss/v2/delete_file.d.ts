/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/v2/delete_file.proto" (package "boss.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message boss.v2.DeleteFileRequest
 */
export interface DeleteFileRequest {
    /**
     * @generated from protobuf field: uint64 data_id = 1;
     */
    dataId: bigint;
    /**
     * @generated from protobuf field: string boss_app_id = 2;
     */
    bossAppId: string;
}
/**
 * @generated from protobuf message boss.v2.DeleteFileResponse
 */
export interface DeleteFileResponse {
}
declare class DeleteFileRequest$Type extends MessageType<DeleteFileRequest> {
    constructor();
    create(value?: PartialMessage<DeleteFileRequest>): DeleteFileRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteFileRequest): DeleteFileRequest;
    internalBinaryWrite(message: DeleteFileRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.DeleteFileRequest
 */
export declare const DeleteFileRequest: DeleteFileRequest$Type;
declare class DeleteFileResponse$Type extends MessageType<DeleteFileResponse> {
    constructor();
    create(value?: PartialMessage<DeleteFileResponse>): DeleteFileResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteFileResponse): DeleteFileResponse;
    internalBinaryWrite(message: DeleteFileResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.DeleteFileResponse
 */
export declare const DeleteFileResponse: DeleteFileResponse$Type;
export {};