import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "nex.matchmaking.v1";
export interface GetActiveMatchesRequest {
}
export interface ActiveMatch {
    id: number;
    startTime: bigint;
    participants: number[];
    ownerPid: number;
    hostPid: number;
    gameMode: bigint;
    flags: bigint;
    applicationBuffer?: Buffer | undefined;
}
export interface GetActiveMatchesResponse {
    matches: ActiveMatch[];
}
export declare const GetActiveMatchesRequest: MessageFns<GetActiveMatchesRequest>;
export declare const ActiveMatch: MessageFns<ActiveMatch>;
export declare const GetActiveMatchesResponse: MessageFns<GetActiveMatchesResponse>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
