import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Ban, BanScopeType } from "./ban_details";
export declare const protobufPackage = "account.v2";
export interface UpdateBanRequest {
    id: string;
    startDate?: Date | undefined;
    endDate?: Date | undefined;
    scopeType?: BanScopeType | undefined;
    scopeTarget?: string | undefined;
    reason?: string | undefined;
    pardonReason?: string | undefined;
}
export interface UpdateBanResponse {
    ban: Ban | undefined;
}
export declare const UpdateBanRequest: MessageFns<UpdateBanRequest>;
export declare const UpdateBanResponse: MessageFns<UpdateBanResponse>;
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
