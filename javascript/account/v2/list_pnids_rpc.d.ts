import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { GetUserDataResponse } from "./get_user_data_rpc";
import { PageInput, PageResults } from "./page";
export declare const protobufPackage = "account.v2";
export interface ListPNIDsRequest {
    page: PageInput | undefined;
    filter: ListPNIDsRequest_Filter | undefined;
}
export interface ListPNIDsRequest_Filter {
    pid?: number | undefined;
    friendCode?: string | undefined;
    extraJson?: string | undefined;
}
export interface ListPNIDsResponse {
    page: PageResults | undefined;
    items: GetUserDataResponse[];
}
export declare const ListPNIDsRequest: MessageFns<ListPNIDsRequest>;
export declare const ListPNIDsRequest_Filter: MessageFns<ListPNIDsRequest_Filter>;
export declare const ListPNIDsResponse: MessageFns<ListPNIDsResponse>;
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
