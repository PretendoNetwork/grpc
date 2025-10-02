import { type CallContext, type CallOptions } from "nice-grpc-common";
import { DeleteAccountDataRequest, DeleteAccountDataResponse } from "./delete_account_data_rpc";
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
    };
};
export interface MiiverseServiceImplementation<CallContextExt = {}> {
    deleteAccountData(request: DeleteAccountDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteAccountDataResponse>>;
    /** Used by Super Mario Maker */
    sMMRequestPostId(request: SMMRequestPostIdRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SMMRequestPostIdResponse>>;
}
export interface MiiverseServiceClient<CallOptionsExt = {}> {
    deleteAccountData(request: DeepPartial<DeleteAccountDataRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteAccountDataResponse>;
    /** Used by Super Mario Maker */
    sMMRequestPostId(request: DeepPartial<SMMRequestPostIdRequest>, options?: CallOptions & CallOptionsExt): Promise<SMMRequestPostIdResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
