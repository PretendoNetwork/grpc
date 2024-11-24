import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "boss.v2";
export interface BOSSApp {
    bossAppId: string;
    titleId: string;
    titleRegion: string;
    name: string;
    tasks: string[];
}
export interface ListKnownBOSSAppsRequest {
}
export interface ListKnownBOSSAppsResponse {
    apps: BOSSApp[];
}
export declare const BOSSApp: MessageFns<BOSSApp>;
export declare const ListKnownBOSSAppsRequest: MessageFns<ListKnownBOSSAppsRequest>;
export declare const ListKnownBOSSAppsResponse: MessageFns<ListKnownBOSSAppsResponse>;
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
