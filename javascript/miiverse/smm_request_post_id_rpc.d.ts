/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "miiverse/smm_request_post_id_rpc.proto" (package "miiverse", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message miiverse.SMMRequestPostIDRequest
 */
export interface SMMRequestPostIDRequest {
    /**
     * @generated from protobuf field: uint64 course_id = 1;
     */
    courseId: bigint;
}
/**
 * @generated from protobuf message miiverse.SMMRequestPostIDResponse
 */
export interface SMMRequestPostIDResponse {
    /**
     * @generated from protobuf field: uint64 post_id = 1;
     */
    postId: bigint;
}
declare class SMMRequestPostIDRequest$Type extends MessageType<SMMRequestPostIDRequest> {
    constructor();
    create(value?: PartialMessage<SMMRequestPostIDRequest>): SMMRequestPostIDRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SMMRequestPostIDRequest): SMMRequestPostIDRequest;
    internalBinaryWrite(message: SMMRequestPostIDRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message miiverse.SMMRequestPostIDRequest
 */
export declare const SMMRequestPostIDRequest: SMMRequestPostIDRequest$Type;
declare class SMMRequestPostIDResponse$Type extends MessageType<SMMRequestPostIDResponse> {
    constructor();
    create(value?: PartialMessage<SMMRequestPostIDResponse>): SMMRequestPostIDResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: SMMRequestPostIDResponse): SMMRequestPostIDResponse;
    internalBinaryWrite(message: SMMRequestPostIDResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message miiverse.SMMRequestPostIDResponse
 */
export declare const SMMRequestPostIDResponse: SMMRequestPostIDResponse$Type;
export {};
