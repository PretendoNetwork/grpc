import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { File } from "./file";
export declare const protobufPackage = "boss.v2";
export interface UploadFileRequest {
    taskId: string;
    bossAppId: string;
    supportedCountries: string[];
    supportedLanguages: string[];
    password: string;
    attribute1: string;
    attribute2: string;
    attribute3: string;
    name: string;
    type: string;
    notifyOnNew: string[];
    notifyLed: boolean;
    data: Buffer;
    nameEqualsDataId: boolean;
}
export interface UploadFileResponse {
    file: File | undefined;
}
export declare const UploadFileRequest: MessageFns<UploadFileRequest>;
export declare const UploadFileResponse: MessageFns<UploadFileResponse>;
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
