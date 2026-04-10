import { type CallContext, type CallOptions } from "nice-grpc-common";
import { GetActiveMatchesRequest, GetActiveMatchesResponse } from "./get_active_matches";
export declare const protobufPackage = "nex.matchmaking.v1";
export type NEXMatchmakingServiceV1Definition = typeof NEXMatchmakingServiceV1Definition;
export declare const NEXMatchmakingServiceV1Definition: {
    readonly name: "NEXMatchmakingServiceV1";
    readonly fullName: "nex.matchmaking.v1.NEXMatchmakingServiceV1";
    readonly methods: {
        /** Fetch active matches */
        readonly getActiveMatches: {
            readonly name: "GetActiveMatches";
            readonly requestType: import("./get_active_matches").MessageFns<GetActiveMatchesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_active_matches").MessageFns<GetActiveMatchesResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface NEXMatchmakingServiceV1ServiceImplementation<CallContextExt = {}> {
    /** Fetch active matches */
    getActiveMatches(request: GetActiveMatchesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetActiveMatchesResponse>>;
}
export interface NEXMatchmakingServiceV1Client<CallOptionsExt = {}> {
    /** Fetch active matches */
    getActiveMatches(request: DeepPartial<GetActiveMatchesRequest>, options?: CallOptions & CallOptionsExt): Promise<GetActiveMatchesResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
