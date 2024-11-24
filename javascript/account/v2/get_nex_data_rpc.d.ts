import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "account.v2";
export declare enum DeviceType {
    DEVICE_TYPE_UNSPECIFIED = 0,
    DEVICE_TYPE_CTR = 1,
    DEVICE_TYPE_WUP = 2,
    UNRECOGNIZED = -1
}
export declare function deviceTypeFromJSON(object: any): DeviceType;
export declare function deviceTypeToJSON(object: DeviceType): string;
export interface GetNEXDataRequest {
    pid: number;
}
export interface GetNEXDataResponse {
    pid: number;
    password: string;
    owningPid: number;
    accessLevel: number;
    serverAccessLevel: string;
    friendCode: string;
    deviceType: DeviceType;
}
export declare const GetNEXDataRequest: MessageFns<GetNEXDataRequest>;
export declare const GetNEXDataResponse: MessageFns<GetNEXDataResponse>;
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
