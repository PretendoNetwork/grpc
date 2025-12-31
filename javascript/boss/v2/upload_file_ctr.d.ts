import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CTRBOSSFlags } from "./ctr_boss_flags";
import { FileAttributes } from "./file_attributes";
import { FileCTR } from "./file_ctr";
import { PayloadContentCTR } from "./payload_content_ctr";
export declare const protobufPackage = "boss.v2";
export interface UploadFileCTRRequest {
    taskId: string;
    bossAppId: string;
    supportedCountries: string[];
    supportedLanguages: string[];
    attributes: FileAttributes | undefined;
    name: string;
    serialNumber: bigint;
    payloadContents: PayloadContentCTR[];
    flags: CTRBOSSFlags | undefined;
}
export interface UploadFileCTRResponse {
    file: FileCTR | undefined;
}
export declare const UploadFileCTRRequest: MessageFns<UploadFileCTRRequest>;
export declare const UploadFileCTRResponse: MessageFns<UploadFileCTRResponse>;
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
