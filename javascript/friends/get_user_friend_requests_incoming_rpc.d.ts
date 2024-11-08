/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "friends/get_user_friend_requests_incoming_rpc.proto" (package "friends", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { FriendRequest } from "./friend_request";
/**
 * @generated from protobuf message friends.GetUserFriendRequestsIncomingRequest
 */
export interface GetUserFriendRequestsIncomingRequest {
    /**
     * @generated from protobuf field: uint32 pid = 1;
     */
    pid: number;
}
/**
 * @generated from protobuf message friends.GetUserFriendRequestsIncomingResponse
 */
export interface GetUserFriendRequestsIncomingResponse {
    /**
     * @generated from protobuf field: repeated friends.FriendRequest friend_requests = 1;
     */
    friendRequests: FriendRequest[];
}
declare class GetUserFriendRequestsIncomingRequest$Type extends MessageType<GetUserFriendRequestsIncomingRequest> {
    constructor();
    create(value?: PartialMessage<GetUserFriendRequestsIncomingRequest>): GetUserFriendRequestsIncomingRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserFriendRequestsIncomingRequest): GetUserFriendRequestsIncomingRequest;
    internalBinaryWrite(message: GetUserFriendRequestsIncomingRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message friends.GetUserFriendRequestsIncomingRequest
 */
export declare const GetUserFriendRequestsIncomingRequest: GetUserFriendRequestsIncomingRequest$Type;
declare class GetUserFriendRequestsIncomingResponse$Type extends MessageType<GetUserFriendRequestsIncomingResponse> {
    constructor();
    create(value?: PartialMessage<GetUserFriendRequestsIncomingResponse>): GetUserFriendRequestsIncomingResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetUserFriendRequestsIncomingResponse): GetUserFriendRequestsIncomingResponse;
    internalBinaryWrite(message: GetUserFriendRequestsIncomingResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message friends.GetUserFriendRequestsIncomingResponse
 */
export declare const GetUserFriendRequestsIncomingResponse: GetUserFriendRequestsIncomingResponse$Type;
export {};
