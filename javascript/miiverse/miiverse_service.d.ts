import { type CallContext, type CallOptions } from "nice-grpc-common";
import { SMMRequestPostIDRequest, SMMRequestPostIDResponse } from "./smm_request_post_id_rpc";
export declare const protobufPackage = "miiverse";
export type MiiverseDefinition = typeof MiiverseDefinition;
export declare const MiiverseDefinition: {
    readonly name: "Miiverse";
    readonly fullName: "miiverse.Miiverse";
    readonly methods: {
        /** Used by Super Mario Maker */
        readonly sMMRequestPostId: {
            readonly name: "SMMRequestPostId";
            readonly requestType: import("./smm_request_post_id_rpc").MessageFns<SMMRequestPostIDRequest>;
            readonly requestStream: false;
            readonly responseType: import("./smm_request_post_id_rpc").MessageFns<SMMRequestPostIDResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface MiiverseServiceImplementation<CallContextExt = {}> {
    /** Used by Super Mario Maker */
    sMMRequestPostId(request: SMMRequestPostIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SMMRequestPostIDResponse>>;
}
export interface MiiverseClient<CallOptionsExt = {}> {
    /** Used by Super Mario Maker */
    sMMRequestPostId(request: DeepPartial<SMMRequestPostIDRequest>, options?: CallOptions & CallOptionsExt): Promise<SMMRequestPostIDResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
