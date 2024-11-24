import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../google/protobuf/empty";
import { AcceptFriendRequestRequest, AcceptFriendRequestResponse } from "./accept_friend_request_rpc";
import { DenyFriendRequestRequest, DenyFriendRequestResponse } from "./deny_friend_request_rpc";
import { GetUserFriendPIDsRequest, GetUserFriendPIDsResponse } from "./get_user_friend_pids_rpc";
import { GetUserFriendRequestsIncomingRequest, GetUserFriendRequestsIncomingResponse } from "./get_user_friend_requests_incoming_rpc";
import { SendUserFriendRequestRequest, SendUserFriendRequestResponse } from "./send_user_friend_request_rpc";
import { SendUserNotificationWiiURequest } from "./send_user_notification_wiiu_rpc";
export declare const protobufPackage = "friends";
export type FriendsDefinition = typeof FriendsDefinition;
export declare const FriendsDefinition: {
    readonly name: "Friends";
    readonly fullName: "friends.Friends";
    readonly methods: {
        readonly sendUserNotificationWiiU: {
            readonly name: "SendUserNotificationWiiU";
            readonly requestType: import("./send_user_notification_wiiu_rpc").MessageFns<SendUserNotificationWiiURequest>;
            readonly requestStream: false;
            readonly responseType: import("../google/protobuf/empty").MessageFns<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserFriendPIDs: {
            readonly name: "GetUserFriendPIDs";
            readonly requestType: import("./get_user_friend_pids_rpc").MessageFns<GetUserFriendPIDsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_friend_pids_rpc").MessageFns<GetUserFriendPIDsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly sendUserFriendRequest: {
            readonly name: "SendUserFriendRequest";
            readonly requestType: import("./send_user_friend_request_rpc").MessageFns<SendUserFriendRequestRequest>;
            readonly requestStream: false;
            readonly responseType: import("./send_user_friend_request_rpc").MessageFns<SendUserFriendRequestResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserFriendRequestsIncoming: {
            readonly name: "GetUserFriendRequestsIncoming";
            readonly requestType: import("./get_user_friend_requests_incoming_rpc").MessageFns<GetUserFriendRequestsIncomingRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_friend_requests_incoming_rpc").MessageFns<GetUserFriendRequestsIncomingResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly acceptFriendRequest: {
            readonly name: "AcceptFriendRequest";
            readonly requestType: import("./accept_friend_request_rpc").MessageFns<AcceptFriendRequestRequest>;
            readonly requestStream: false;
            readonly responseType: import("./accept_friend_request_rpc").MessageFns<AcceptFriendRequestResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly denyFriendRequest: {
            readonly name: "DenyFriendRequest";
            readonly requestType: import("./deny_friend_request_rpc").MessageFns<DenyFriendRequestRequest>;
            readonly requestStream: false;
            readonly responseType: import("./deny_friend_request_rpc").MessageFns<DenyFriendRequestResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface FriendsServiceImplementation<CallContextExt = {}> {
    sendUserNotificationWiiU(request: SendUserNotificationWiiURequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    getUserFriendPIDs(request: GetUserFriendPIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFriendPIDsResponse>>;
    sendUserFriendRequest(request: SendUserFriendRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendUserFriendRequestResponse>>;
    getUserFriendRequestsIncoming(request: GetUserFriendRequestsIncomingRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFriendRequestsIncomingResponse>>;
    acceptFriendRequest(request: AcceptFriendRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AcceptFriendRequestResponse>>;
    denyFriendRequest(request: DenyFriendRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DenyFriendRequestResponse>>;
}
export interface FriendsClient<CallOptionsExt = {}> {
    sendUserNotificationWiiU(request: DeepPartial<SendUserNotificationWiiURequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    getUserFriendPIDs(request: DeepPartial<GetUserFriendPIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFriendPIDsResponse>;
    sendUserFriendRequest(request: DeepPartial<SendUserFriendRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<SendUserFriendRequestResponse>;
    getUserFriendRequestsIncoming(request: DeepPartial<GetUserFriendRequestsIncomingRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFriendRequestsIncomingResponse>;
    acceptFriendRequest(request: DeepPartial<AcceptFriendRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<AcceptFriendRequestResponse>;
    denyFriendRequest(request: DeepPartial<DenyFriendRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<DenyFriendRequestResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
