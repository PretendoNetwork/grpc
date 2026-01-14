import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Server } from "./server";
export declare const protobufPackage = "account.v2";
export interface UpdateServerRequest {
    id: string;
    ip?: string | undefined;
    port?: number | undefined;
    serviceName?: string | undefined;
    serviceType?: string | undefined;
    gameServerId?: string | undefined;
    titleIds?: UpdateServerRequest_UpdateStringList | undefined;
    accessMode?: string | undefined;
    maintenanceMode?: boolean | undefined;
    device?: number | undefined;
    aesKey?: string | undefined;
    clientId?: UpdateServerRequest_NullableString | undefined;
}
export interface UpdateServerRequest_NullableString {
    value?: string | undefined;
}
export interface UpdateServerRequest_UpdateStringList {
    add: string[];
    remove: string[];
}
export interface UpdateServerResponse {
    server: Server | undefined;
}
export declare const UpdateServerRequest: MessageFns<UpdateServerRequest>;
export declare const UpdateServerRequest_NullableString: MessageFns<UpdateServerRequest_NullableString>;
export declare const UpdateServerRequest_UpdateStringList: MessageFns<UpdateServerRequest_UpdateStringList>;
export declare const UpdateServerResponse: MessageFns<UpdateServerResponse>;
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
