/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "friends/accept_friend_request_rpc.proto" (package "friends", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message friends.AcceptFriendRequestRequest
 */
export interface AcceptFriendRequestRequest {
    /**
     * @generated from protobuf field: uint64 friend_request_id = 1;
     */
    friendRequestId: bigint;
}
/**
 * @generated from protobuf message friends.AcceptFriendRequestResponse
 */
export interface AcceptFriendRequestResponse {
    /**
     * @generated from protobuf field: bool success = 1;
     */
    success: boolean;
}
declare class AcceptFriendRequestRequest$Type extends MessageType<AcceptFriendRequestRequest> {
    constructor();
    create(value?: PartialMessage<AcceptFriendRequestRequest>): AcceptFriendRequestRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AcceptFriendRequestRequest): AcceptFriendRequestRequest;
    internalBinaryWrite(message: AcceptFriendRequestRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message friends.AcceptFriendRequestRequest
 */
export declare const AcceptFriendRequestRequest: AcceptFriendRequestRequest$Type;
declare class AcceptFriendRequestResponse$Type extends MessageType<AcceptFriendRequestResponse> {
    constructor();
    create(value?: PartialMessage<AcceptFriendRequestResponse>): AcceptFriendRequestResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AcceptFriendRequestResponse): AcceptFriendRequestResponse;
    internalBinaryWrite(message: AcceptFriendRequestResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message friends.AcceptFriendRequestResponse
 */
export declare const AcceptFriendRequestResponse: AcceptFriendRequestResponse$Type;
export {};
