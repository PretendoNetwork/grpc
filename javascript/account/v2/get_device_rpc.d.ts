import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Device } from "./device";
export declare const protobufPackage = "account.v2";
export interface GetDeviceRequest {
    deviceId: number;
}
export interface GetDeviceResponse {
    device: Device | undefined;
}
export declare const GetDeviceRequest: MessageFns<GetDeviceRequest>;
export declare const GetDeviceResponse: MessageFns<GetDeviceResponse>;
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
