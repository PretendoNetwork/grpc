import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Mii } from "./mii";
import { UserConnections } from "./user_connections";
export declare const protobufPackage = "api.v2";
export interface GetUserDataRequest {
}
export interface GetUserDataResponse {
    deleted: boolean;
    creationDate: string;
    updatedDate: string;
    pid: number;
    username: string;
    accessLevel: number;
    serverAccessLevel: string;
    mii: Mii | undefined;
    birthday: string;
    gender: string;
    country: string;
    timezone: string;
    language: string;
    emailAddress: string;
    connections: UserConnections | undefined;
    marketingFlag: boolean;
}
export declare const GetUserDataRequest: MessageFns<GetUserDataRequest>;
export declare const GetUserDataResponse: MessageFns<GetUserDataResponse>;
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
