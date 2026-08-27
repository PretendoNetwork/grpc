import { type CallContext, type CallOptions } from "nice-grpc-common";
import { DeleteAccountDataRequest, DeleteAccountDataResponse } from "./delete_account_data_rpc";
import { GetCommunityByIDRequest, GetCommunityByIDResponse } from "./get_community_by_id_rpc";
import { GetCommunityByTitleIDRequest, GetCommunityByTitleIDResponse } from "./get_community_by_title_id_rpc";
import { GetCommunityPostsRequest, GetCommunityPostsResponse } from "./get_community_posts_rpc";
import { GetPostRepliesRequest, GetPostRepliesResponse } from "./get_post_replies_rpc";
import { GetPostRequest, GetPostResponse } from "./get_post_rpc";
import { GetUserPostsRequest, GetUserPostsResponse } from "./get_user_posts_rpc";
import { SMMRequestPostIdRequest, SMMRequestPostIdResponse } from "./smm_request_post_id_rpc";
export declare const protobufPackage = "miiverse.v2";
export type MiiverseServiceDefinition = typeof MiiverseServiceDefinition;
export declare const MiiverseServiceDefinition: {
    readonly name: "MiiverseService";
    readonly fullName: "miiverse.v2.MiiverseService";
    readonly methods: {
        readonly deleteAccountData: {
            readonly name: "DeleteAccountData";
            readonly requestType: import("./delete_account_data_rpc").MessageFns<DeleteAccountDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_account_data_rpc").MessageFns<DeleteAccountDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Used by Super Mario Maker */
        readonly sMMRequestPostId: {
            readonly name: "SMMRequestPostId";
            readonly requestType: import("./smm_request_post_id_rpc").MessageFns<SMMRequestPostIdRequest>;
            readonly requestStream: false;
            readonly responseType: import("./smm_request_post_id_rpc").MessageFns<SMMRequestPostIdResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getCommunityByID: {
            readonly name: "GetCommunityByID";
            readonly requestType: import("./get_community_by_id_rpc").MessageFns<GetCommunityByIDRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_community_by_id_rpc").MessageFns<GetCommunityByIDResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getCommunityByTitleID: {
            readonly name: "GetCommunityByTitleID";
            readonly requestType: import("./get_community_by_title_id_rpc").MessageFns<GetCommunityByTitleIDRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_community_by_title_id_rpc").MessageFns<GetCommunityByTitleIDResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getCommunityPosts: {
            readonly name: "GetCommunityPosts";
            readonly requestType: import("./get_community_posts_rpc").MessageFns<GetCommunityPostsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_community_posts_rpc").MessageFns<GetCommunityPostsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPost: {
            readonly name: "GetPost";
            readonly requestType: import("./get_post_rpc").MessageFns<GetPostRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_post_rpc").MessageFns<GetPostResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getPostReplies: {
            readonly name: "GetPostReplies";
            readonly requestType: import("./get_post_replies_rpc").MessageFns<GetPostRepliesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_post_replies_rpc").MessageFns<GetPostRepliesResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserPosts: {
            readonly name: "GetUserPosts";
            readonly requestType: import("./get_user_posts_rpc").MessageFns<GetUserPostsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_posts_rpc").MessageFns<GetUserPostsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface MiiverseServiceImplementation<CallContextExt = {}> {
    deleteAccountData(request: DeleteAccountDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteAccountDataResponse>>;
    /** Used by Super Mario Maker */
    sMMRequestPostId(request: SMMRequestPostIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SMMRequestPostIdResponse>>;
    getCommunityByID(request: GetCommunityByIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCommunityByIDResponse>>;
    getCommunityByTitleID(request: GetCommunityByTitleIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCommunityByTitleIDResponse>>;
    getCommunityPosts(request: GetCommunityPostsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetCommunityPostsResponse>>;
    getPost(request: GetPostRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPostResponse>>;
    getPostReplies(request: GetPostRepliesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPostRepliesResponse>>;
    getUserPosts(request: GetUserPostsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserPostsResponse>>;
}
export interface MiiverseServiceClient<CallOptionsExt = {}> {
    deleteAccountData(request: DeepPartial<DeleteAccountDataRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteAccountDataResponse>;
    /** Used by Super Mario Maker */
    sMMRequestPostId(request: DeepPartial<SMMRequestPostIdRequest>, options?: CallOptions & CallOptionsExt): Promise<SMMRequestPostIdResponse>;
    getCommunityByID(request: DeepPartial<GetCommunityByIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCommunityByIDResponse>;
    getCommunityByTitleID(request: DeepPartial<GetCommunityByTitleIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCommunityByTitleIDResponse>;
    getCommunityPosts(request: DeepPartial<GetCommunityPostsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetCommunityPostsResponse>;
    getPost(request: DeepPartial<GetPostRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPostResponse>;
    getPostReplies(request: DeepPartial<GetPostRepliesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPostRepliesResponse>;
    getUserPosts(request: DeepPartial<GetUserPostsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserPostsResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
