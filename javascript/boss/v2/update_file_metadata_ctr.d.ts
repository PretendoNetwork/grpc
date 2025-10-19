import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { CTRBOSSFlags } from "./ctr_boss_flags";
import { FileAttributes } from "./file_attributes";
import { PayloadContentInfoCTR } from "./payload_content_info_ctr";
export declare const protobufPackage = "boss.v2";
export interface UpdateFileMetadataDataCTR {
    taskId: string;
    bossAppId: string;
    supportedCountries: string[];
    supportedLanguages: string[];
    attributes: FileAttributes | undefined;
    name: string;
    payloadContents: PayloadContentInfoCTR[];
    flags: CTRBOSSFlags | undefined;
}
export interface UpdateFileMetadataCTRRequest {
    dataId: bigint;
    updateData: UpdateFileMetadataDataCTR | undefined;
}
export interface UpdateFileMetadataCTRResponse {
}
export declare const UpdateFileMetadataDataCTR: MessageFns<UpdateFileMetadataDataCTR>;
export declare const UpdateFileMetadataCTRRequest: MessageFns<UpdateFileMetadataCTRRequest>;
export declare const UpdateFileMetadataCTRResponse: MessageFns<UpdateFileMetadataCTRResponse>;
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
