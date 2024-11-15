/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "miiverse/v2/smm_request_post_id_rpc.proto" (package "miiverse.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message miiverse.v2.SMMRequestPostIdRequest
 */
export interface SMMRequestPostIdRequest {
    /**
     * @generated from protobuf field: uint64 course_id = 1;
     */
    courseId: bigint;
}
/**
 * @generated from protobuf message miiverse.v2.SMMRequestPostIdResponse
 */
export interface SMMRequestPostIdResponse {
    /**
     * @generated from protobuf field: uint64 post_id = 1;
     */
    postId: bigint;
}
declare class SMMRequestPostIdRequest$Type extends MessageType<SMMRequestPostIdRequest> {
    constructor();
    create(value?: PartialMessage<SMMRequestPostIdRequest>): SMMRequestPostIdRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SMMRequestPostIdRequest): SMMRequestPostIdRequest;
    internalBinaryWrite(message: SMMRequestPostIdRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message miiverse.v2.SMMRequestPostIdRequest
 */
export declare const SMMRequestPostIdRequest: SMMRequestPostIdRequest$Type;
declare class SMMRequestPostIdResponse$Type extends MessageType<SMMRequestPostIdResponse> {
    constructor();
    create(value?: PartialMessage<SMMRequestPostIdResponse>): SMMRequestPostIdResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SMMRequestPostIdResponse): SMMRequestPostIdResponse;
    internalBinaryWrite(message: SMMRequestPostIdResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message miiverse.v2.SMMRequestPostIdResponse
 */
export declare const SMMRequestPostIdResponse: SMMRequestPostIdResponse$Type;
export {};
