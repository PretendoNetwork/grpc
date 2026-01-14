import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { NEXAccount } from "./nex_account";
import { PageInput, PageResults } from "./page";
export declare const protobufPackage = "account.v2";
export interface ListNEXAccountsRequest {
    page: PageInput | undefined;
    filter: ListNEXAccountsRequest_Filter | undefined;
}
export interface ListNEXAccountsRequest_Filter {
    pid?: number | undefined;
    friendCode?: number | undefined;
    extraJson?: string | undefined;
}
export interface ListNEXAccountsResponse {
    page: PageResults | undefined;
    items: NEXAccount[];
}
export declare const ListNEXAccountsRequest: MessageFns<ListNEXAccountsRequest>;
export declare const ListNEXAccountsRequest_Filter: MessageFns<ListNEXAccountsRequest_Filter>;
export declare const ListNEXAccountsResponse: MessageFns<ListNEXAccountsResponse>;
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
