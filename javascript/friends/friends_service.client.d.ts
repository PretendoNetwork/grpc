/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "friends/friends_service.proto" (package "friends", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { DenyFriendRequestResponse } from "./deny_friend_request_rpc";
import type { DenyFriendRequestRequest } from "./deny_friend_request_rpc";
import type { AcceptFriendRequestResponse } from "./accept_friend_request_rpc";
import type { AcceptFriendRequestRequest } from "./accept_friend_request_rpc";
import type { GetUserFriendRequestsIncomingResponse } from "./get_user_friend_requests_incoming_rpc";
import type { GetUserFriendRequestsIncomingRequest } from "./get_user_friend_requests_incoming_rpc";
import type { SendUserFriendRequestResponse } from "./send_user_friend_request_rpc";
import type { SendUserFriendRequestRequest } from "./send_user_friend_request_rpc";
import type { GetUserFriendPIDsResponse } from "./get_user_friend_pids_rpc";
import type { GetUserFriendPIDsRequest } from "./get_user_friend_pids_rpc";
import type { Empty } from "../google/protobuf/empty";
import type { SendUserNotificationWiiURequest } from "./send_user_notification_wiiu_rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service friends.Friends
 */
export interface IFriendsClient {
    /**
     * @generated from protobuf rpc: SendUserNotificationWiiU(friends.SendUserNotificationWiiURequest) returns (google.protobuf.Empty);
     */
    sendUserNotificationWiiU(input: SendUserNotificationWiiURequest, options?: RpcOptions): UnaryCall<SendUserNotificationWiiURequest, Empty>;
    /**
     * @generated from protobuf rpc: GetUserFriendPIDs(friends.GetUserFriendPIDsRequest) returns (friends.GetUserFriendPIDsResponse);
     */
    getUserFriendPIDs(input: GetUserFriendPIDsRequest, options?: RpcOptions): UnaryCall<GetUserFriendPIDsRequest, GetUserFriendPIDsResponse>;
    /**
     * @generated from protobuf rpc: SendUserFriendRequest(friends.SendUserFriendRequestRequest) returns (friends.SendUserFriendRequestResponse);
     */
    sendUserFriendRequest(input: SendUserFriendRequestRequest, options?: RpcOptions): UnaryCall<SendUserFriendRequestRequest, SendUserFriendRequestResponse>;
    /**
     * @generated from protobuf rpc: GetUserFriendRequestsIncoming(friends.GetUserFriendRequestsIncomingRequest) returns (friends.GetUserFriendRequestsIncomingResponse);
     */
    getUserFriendRequestsIncoming(input: GetUserFriendRequestsIncomingRequest, options?: RpcOptions): UnaryCall<GetUserFriendRequestsIncomingRequest, GetUserFriendRequestsIncomingResponse>;
    /**
     * @generated from protobuf rpc: AcceptFriendRequest(friends.AcceptFriendRequestRequest) returns (friends.AcceptFriendRequestResponse);
     */
    acceptFriendRequest(input: AcceptFriendRequestRequest, options?: RpcOptions): UnaryCall<AcceptFriendRequestRequest, AcceptFriendRequestResponse>;
    /**
     * @generated from protobuf rpc: DenyFriendRequest(friends.DenyFriendRequestRequest) returns (friends.DenyFriendRequestResponse);
     */
    denyFriendRequest(input: DenyFriendRequestRequest, options?: RpcOptions): UnaryCall<DenyFriendRequestRequest, DenyFriendRequestResponse>;
}
/**
 * @generated from protobuf service friends.Friends
 */
export declare class FriendsClient implements IFriendsClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: SendUserNotificationWiiU(friends.SendUserNotificationWiiURequest) returns (google.protobuf.Empty);
     */
    sendUserNotificationWiiU(input: SendUserNotificationWiiURequest, options?: RpcOptions): UnaryCall<SendUserNotificationWiiURequest, Empty>;
    /**
     * @generated from protobuf rpc: GetUserFriendPIDs(friends.GetUserFriendPIDsRequest) returns (friends.GetUserFriendPIDsResponse);
     */
    getUserFriendPIDs(input: GetUserFriendPIDsRequest, options?: RpcOptions): UnaryCall<GetUserFriendPIDsRequest, GetUserFriendPIDsResponse>;
    /**
     * @generated from protobuf rpc: SendUserFriendRequest(friends.SendUserFriendRequestRequest) returns (friends.SendUserFriendRequestResponse);
     */
    sendUserFriendRequest(input: SendUserFriendRequestRequest, options?: RpcOptions): UnaryCall<SendUserFriendRequestRequest, SendUserFriendRequestResponse>;
    /**
     * @generated from protobuf rpc: GetUserFriendRequestsIncoming(friends.GetUserFriendRequestsIncomingRequest) returns (friends.GetUserFriendRequestsIncomingResponse);
     */
    getUserFriendRequestsIncoming(input: GetUserFriendRequestsIncomingRequest, options?: RpcOptions): UnaryCall<GetUserFriendRequestsIncomingRequest, GetUserFriendRequestsIncomingResponse>;
    /**
     * @generated from protobuf rpc: AcceptFriendRequest(friends.AcceptFriendRequestRequest) returns (friends.AcceptFriendRequestResponse);
     */
    acceptFriendRequest(input: AcceptFriendRequestRequest, options?: RpcOptions): UnaryCall<AcceptFriendRequestRequest, AcceptFriendRequestResponse>;
    /**
     * @generated from protobuf rpc: DenyFriendRequest(friends.DenyFriendRequestRequest) returns (friends.DenyFriendRequestResponse);
     */
    denyFriendRequest(input: DenyFriendRequestRequest, options?: RpcOptions): UnaryCall<DenyFriendRequestRequest, DenyFriendRequestResponse>;
}