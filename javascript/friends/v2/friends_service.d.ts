import { type CallContext, type CallOptions } from "nice-grpc-common";
import { AcceptFriendRequestRequest, AcceptFriendRequestResponse } from "./accept_friend_request_rpc";
import { DenyFriendRequestRequest, DenyFriendRequestResponse } from "./deny_friend_request_rpc";
import { GetUserData3DSRequest, GetUserData3DSResponse } from "./get_user_data_3ds_rpc";
import { GetUserDataWiiURequest, GetUserDataWiiUResponse } from "./get_user_data_wiiu_rpc";
import { GetUserFriendsData3DSRequest, GetUserFriendsData3DSResponse } from "./get_user_friend_data_3ds_rpc";
import { GetUserFriendsDataWiiURequest, GetUserFriendsDataWiiUResponse } from "./get_user_friend_data_wiiu_rpc";
import { GetUserFriendPIDsRequest, GetUserFriendPIDsResponse } from "./get_user_friend_pids_rpc";
import { GetUserFriendRequestsIncomingRequest, GetUserFriendRequestsIncomingResponse } from "./get_user_friend_requests_incoming_rpc";
import { SendUserFriendRequestRequest, SendUserFriendRequestResponse } from "./send_user_friend_request_rpc";
import { SendUserNotificationWiiURequest, SendUserNotificationWiiUResponse } from "./send_user_notification_wiiu_rpc";
export declare const protobufPackage = "friends.v2";
export type FriendsServiceDefinition = typeof FriendsServiceDefinition;
export declare const FriendsServiceDefinition: {
    readonly name: "FriendsService";
    readonly fullName: "friends.v2.FriendsService";
    readonly methods: {
        readonly sendUserNotificationWiiU: {
            readonly name: "SendUserNotificationWiiU";
            readonly requestType: import("./send_user_notification_wiiu_rpc").MessageFns<SendUserNotificationWiiURequest>;
            readonly requestStream: false;
            readonly responseType: import("./send_user_notification_wiiu_rpc").MessageFns<SendUserNotificationWiiUResponse>;
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
        /** GetUserFriendsDataWiiU returns a list of Wii U friends and their associated data */
        readonly getUserFriendsDataWiiU: {
            readonly name: "GetUserFriendsDataWiiU";
            readonly requestType: import("./get_user_friend_data_wiiu_rpc").MessageFns<GetUserFriendsDataWiiURequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_friend_data_wiiu_rpc").MessageFns<GetUserFriendsDataWiiUResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetUserFriendsData3DS returns a list of 3DS friends and their associated data */
        readonly getUserFriendsData3DS: {
            readonly name: "GetUserFriendsData3DS";
            readonly requestType: import("./get_user_friend_data_3ds_rpc").MessageFns<GetUserFriendsData3DSRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_friend_data_3ds_rpc").MessageFns<GetUserFriendsData3DSResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetUserDataWiiU returns the Wii U data for a specified user */
        readonly getUserDataWiiU: {
            readonly name: "GetUserDataWiiU";
            readonly requestType: import("./get_user_data_wiiu_rpc").MessageFns<GetUserDataWiiURequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_data_wiiu_rpc").MessageFns<GetUserDataWiiUResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetUserData3DS returns the 3DS data for a specified user */
        readonly getUserData3DS: {
            readonly name: "GetUserData3DS";
            readonly requestType: import("./get_user_data_3ds_rpc").MessageFns<GetUserData3DSRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_data_3ds_rpc").MessageFns<GetUserData3DSResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface FriendsServiceImplementation<CallContextExt = {}> {
    sendUserNotificationWiiU(request: SendUserNotificationWiiURequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendUserNotificationWiiUResponse>>;
    getUserFriendPIDs(request: GetUserFriendPIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFriendPIDsResponse>>;
    sendUserFriendRequest(request: SendUserFriendRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SendUserFriendRequestResponse>>;
    getUserFriendRequestsIncoming(request: GetUserFriendRequestsIncomingRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFriendRequestsIncomingResponse>>;
    acceptFriendRequest(request: AcceptFriendRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<AcceptFriendRequestResponse>>;
    denyFriendRequest(request: DenyFriendRequestRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DenyFriendRequestResponse>>;
    /** GetUserFriendsDataWiiU returns a list of Wii U friends and their associated data */
    getUserFriendsDataWiiU(request: GetUserFriendsDataWiiURequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFriendsDataWiiUResponse>>;
    /** GetUserFriendsData3DS returns a list of 3DS friends and their associated data */
    getUserFriendsData3DS(request: GetUserFriendsData3DSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserFriendsData3DSResponse>>;
    /** GetUserDataWiiU returns the Wii U data for a specified user */
    getUserDataWiiU(request: GetUserDataWiiURequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataWiiUResponse>>;
    /** GetUserData3DS returns the 3DS data for a specified user */
    getUserData3DS(request: GetUserData3DSRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserData3DSResponse>>;
}
export interface FriendsServiceClient<CallOptionsExt = {}> {
    sendUserNotificationWiiU(request: DeepPartial<SendUserNotificationWiiURequest>, options?: CallOptions & CallOptionsExt): Promise<SendUserNotificationWiiUResponse>;
    getUserFriendPIDs(request: DeepPartial<GetUserFriendPIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFriendPIDsResponse>;
    sendUserFriendRequest(request: DeepPartial<SendUserFriendRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<SendUserFriendRequestResponse>;
    getUserFriendRequestsIncoming(request: DeepPartial<GetUserFriendRequestsIncomingRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFriendRequestsIncomingResponse>;
    acceptFriendRequest(request: DeepPartial<AcceptFriendRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<AcceptFriendRequestResponse>;
    denyFriendRequest(request: DeepPartial<DenyFriendRequestRequest>, options?: CallOptions & CallOptionsExt): Promise<DenyFriendRequestResponse>;
    /** GetUserFriendsDataWiiU returns a list of Wii U friends and their associated data */
    getUserFriendsDataWiiU(request: DeepPartial<GetUserFriendsDataWiiURequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFriendsDataWiiUResponse>;
    /** GetUserFriendsData3DS returns a list of 3DS friends and their associated data */
    getUserFriendsData3DS(request: DeepPartial<GetUserFriendsData3DSRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserFriendsData3DSResponse>;
    /** GetUserDataWiiU returns the Wii U data for a specified user */
    getUserDataWiiU(request: DeepPartial<GetUserDataWiiURequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataWiiUResponse>;
    /** GetUserData3DS returns the 3DS data for a specified user */
    getUserData3DS(request: DeepPartial<GetUserData3DSRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserData3DSResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
