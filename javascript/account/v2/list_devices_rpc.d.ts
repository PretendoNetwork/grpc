import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Device } from "./device";
import { PageInput, PageResults } from "./page";
export declare const protobufPackage = "account.v2";
export interface ListDevicesRequest {
    page: PageInput | undefined;
    filter: ListDevicesRequest_Filter | undefined;
}
export interface ListDevicesRequest_Filter {
    pid: number[];
    deviceId?: number | undefined;
    serial?: string | undefined;
    extraJson?: string | undefined;
}
export interface ListDevicesResponse {
    page: PageResults | undefined;
    items: Device[];
}
export declare const ListDevicesRequest: MessageFns<ListDevicesRequest>;
export declare const ListDevicesRequest_Filter: MessageFns<ListDevicesRequest_Filter>;
export declare const ListDevicesResponse: MessageFns<ListDevicesResponse>;
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
