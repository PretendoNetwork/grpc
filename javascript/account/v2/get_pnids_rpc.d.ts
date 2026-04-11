import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { GetPNIDResponse } from "./get_pnid_rpc";
export declare const protobufPackage = "account.v2";
export interface GetPNIDsRequest {
    pid: number[];
}
export interface GetPNIDsResponse {
    userData: {
        [key: number]: GetPNIDResponse;
    };
}
export interface GetPNIDsResponse_UserDataEntry {
    key: number;
    value: GetPNIDResponse | undefined;
}
export declare const GetPNIDsRequest: MessageFns<GetPNIDsRequest>;
export declare const GetPNIDsResponse: MessageFns<GetPNIDsResponse>;
export declare const GetPNIDsResponse_UserDataEntry: MessageFns<GetPNIDsResponse_UserDataEntry>;
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
