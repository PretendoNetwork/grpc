import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../google/protobuf/empty";
import { ActiveMatchesResponse } from "./get_active_matches";
export declare const protobufPackage = "nex";
export type NEXDefinition = typeof NEXDefinition;
export declare const NEXDefinition: {
    readonly name: "NEX";
    readonly fullName: "nex.NEX";
    readonly methods: {
        readonly getActiveMatches: {
            readonly name: "GetActiveMatches";
            readonly requestType: import("../google/protobuf/empty").MessageFns<Empty>;
            readonly requestStream: false;
            readonly responseType: import("./get_active_matches").MessageFns<ActiveMatchesResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface NEXServiceImplementation<CallContextExt = {}> {
    getActiveMatches(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<ActiveMatchesResponse>>;
}
export interface NEXClient<CallOptionsExt = {}> {
    getActiveMatches(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<ActiveMatchesResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
