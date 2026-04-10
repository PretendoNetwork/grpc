import { type CallContext, type CallOptions } from "nice-grpc-common";
import { GetStatsRequest, GetStatsResponse } from "./get_stats_rpc";
import { KickUserAggressiveRequest, KickUserAggressiveResponse } from "./kick_user_aggressive_rpc";
import { KickUserRequest, KickUserResponse } from "./kick_user_rpc";
import { KillUserConnectionRequest, KillUserConnectionResponse } from "./kill_user_connection_rpc";
export declare const protobufPackage = "nex.v1";
export type NEXServiceV1Definition = typeof NEXServiceV1Definition;
export declare const NEXServiceV1Definition: {
    readonly name: "NEXServiceV1";
    readonly fullName: "nex.v1.NEXServiceV1";
    readonly methods: {
        readonly getStats: {
            readonly name: "GetStats";
            readonly requestType: import("./get_stats_rpc").MessageFns<GetStatsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_stats_rpc").MessageFns<GetStatsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Remove a user gracefully using the built in DISCONNECT system */
        readonly kickUser: {
            readonly name: "KickUser";
            readonly requestType: import("./kick_user_rpc").MessageFns<KickUserRequest>;
            readonly requestStream: false;
            readonly responseType: import("./kick_user_rpc").MessageFns<KickUserResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Remove a user aggressively using methods like killing the internal RC4 stream along with graceful methods */
        readonly kickUserAggressive: {
            readonly name: "KickUserAggressive";
            readonly requestType: import("./kick_user_aggressive_rpc").MessageFns<KickUserAggressiveRequest>;
            readonly requestStream: false;
            readonly responseType: import("./kick_user_aggressive_rpc").MessageFns<KickUserAggressiveResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** Remove a user by any means necessary */
        readonly killUserConnection: {
            readonly name: "KillUserConnection";
            readonly requestType: import("./kill_user_connection_rpc").MessageFns<KillUserConnectionRequest>;
            readonly requestStream: false;
            readonly responseType: import("./kill_user_connection_rpc").MessageFns<KillUserConnectionResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface NEXServiceV1ServiceImplementation<CallContextExt = {}> {
    getStats(request: GetStatsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetStatsResponse>>;
    /** Remove a user gracefully using the built in DISCONNECT system */
    kickUser(request: KickUserRequest, context: CallContext & CallContextExt): Promise<DeepPartial<KickUserResponse>>;
    /** Remove a user aggressively using methods like killing the internal RC4 stream along with graceful methods */
    kickUserAggressive(request: KickUserAggressiveRequest, context: CallContext & CallContextExt): Promise<DeepPartial<KickUserAggressiveResponse>>;
    /** Remove a user by any means necessary */
    killUserConnection(request: KillUserConnectionRequest, context: CallContext & CallContextExt): Promise<DeepPartial<KillUserConnectionResponse>>;
}
export interface NEXServiceV1Client<CallOptionsExt = {}> {
    getStats(request: DeepPartial<GetStatsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetStatsResponse>;
    /** Remove a user gracefully using the built in DISCONNECT system */
    kickUser(request: DeepPartial<KickUserRequest>, options?: CallOptions & CallOptionsExt): Promise<KickUserResponse>;
    /** Remove a user aggressively using methods like killing the internal RC4 stream along with graceful methods */
    kickUserAggressive(request: DeepPartial<KickUserAggressiveRequest>, options?: CallOptions & CallOptionsExt): Promise<KickUserAggressiveResponse>;
    /** Remove a user by any means necessary */
    killUserConnection(request: DeepPartial<KillUserConnectionRequest>, options?: CallOptions & CallOptionsExt): Promise<KillUserConnectionResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
