import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FileAttributes } from "./file_attributes";
export declare const protobufPackage = "boss.v2";
export interface UpdateFileMetadataDataWUP {
    taskId: string;
    bossAppId: string;
    supportedCountries: string[];
    supportedLanguages: string[];
    attributes: FileAttributes | undefined;
    name: string;
    type: string;
    notifyOnNew: string[];
    notifyLed: boolean;
    conditionPlayed: bigint;
    autoDelete: boolean;
}
export interface UpdateFileMetadataWUPRequest {
    dataId: bigint;
    updateData: UpdateFileMetadataDataWUP | undefined;
}
export interface UpdateFileMetadataWUPResponse {
}
export declare const UpdateFileMetadataDataWUP: MessageFns<UpdateFileMetadataDataWUP>;
export declare const UpdateFileMetadataWUPRequest: MessageFns<UpdateFileMetadataWUPRequest>;
export declare const UpdateFileMetadataWUPResponse: MessageFns<UpdateFileMetadataWUPResponse>;
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
