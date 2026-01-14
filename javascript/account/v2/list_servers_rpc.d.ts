import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PageInput, PageResults } from "./page";
import { Server } from "./server";
export declare const protobufPackage = "account.v2";
export interface ListServersRequest {
    page: PageInput | undefined;
    filter: ListServersRequest_Filter | undefined;
}
export interface ListServersRequest_Filter {
    serviceName?: string | undefined;
    extraJson?: string | undefined;
}
export interface ListServersResponse {
    page: PageResults | undefined;
    items: Server[];
}
export declare const ListServersRequest: MessageFns<ListServersRequest>;
export declare const ListServersRequest_Filter: MessageFns<ListServersRequest_Filter>;
export declare const ListServersResponse: MessageFns<ListServersResponse>;
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
