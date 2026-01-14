import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Device } from "./device";
import { Mii } from "./mii";
import { PNIDPermissionFlags } from "./pnid_permission_flags";
export declare const protobufPackage = "account.v2";
export interface GetPNIDRequest {
    pid: number;
}
export interface GetPNIDResponse {
    deleted: boolean;
    pid: number;
    username: string;
    accessLevel: number;
    serverAccessLevel: string;
    mii: Mii | undefined;
    creationDate: string;
    birthdate: string;
    gender: string;
    country: string;
    language: string;
    emailAddress: string;
    tierName: string;
    permissions: PNIDPermissionFlags | undefined;
    linkedDevices: Device[];
}
export declare const GetPNIDRequest: MessageFns<GetPNIDRequest>;
export declare const GetPNIDResponse: MessageFns<GetPNIDResponse>;
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
