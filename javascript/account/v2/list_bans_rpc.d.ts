import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Ban, BanScopeType, BanTargetType } from "./ban_details";
import { PageInput, PageResults } from "./page";
export declare const protobufPackage = "account.v2";
export interface ListBansRequest {
    page: PageInput | undefined;
    filter: ListBansRequest_Filter | undefined;
}
export interface ListBansRequest_Filter {
    targetType: BanTargetType[];
    target: string[];
    issuer: string[];
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    scopeType: BanScopeType[];
    scopeTarget: string[];
    issuedDate?: Date | undefined;
}
export interface ListBansResponse {
    page: PageResults | undefined;
    items: Ban[];
}
export declare const ListBansRequest: MessageFns<ListBansRequest>;
export declare const ListBansRequest_Filter: MessageFns<ListBansRequest_Filter>;
export declare const ListBansResponse: MessageFns<ListBansResponse>;
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
