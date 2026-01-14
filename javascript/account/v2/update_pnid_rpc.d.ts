import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Mii } from "./mii";
import { PNIDPermissionFlags } from "./pnid_permission_flags";
export declare const protobufPackage = "account.v2";
export interface UpdatePNIDRequest {
    pid: number;
    accessLevel?: number | undefined;
    serverAccessLevel?: string | undefined;
    mii?: Mii | undefined;
    birthdate?: string | undefined;
    gender?: string | undefined;
    country?: string | undefined;
    language?: string | undefined;
    emailAddress?: string | undefined;
    permissions?: PNIDPermissionFlags | undefined;
}
export interface UpdatePNIDResponse {
}
export declare const UpdatePNIDRequest: MessageFns<UpdatePNIDRequest>;
export declare const UpdatePNIDResponse: MessageFns<UpdatePNIDResponse>;
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
