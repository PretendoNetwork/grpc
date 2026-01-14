import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Ban } from "./ban_details";
import { IndependentServiceTokenProviderType } from "./exchange_independent_service_token_for_user_data_rpc";
export declare const protobufPackage = "account.v2";
export interface ValidateIndependentServiceTokenRequest {
    provider: IndependentServiceTokenProviderType;
    /** For NNAS */
    clientId?: string | undefined;
    /** For NASC */
    titleIds: string[];
    token: string;
}
export interface ValidateIndependentServiceTokenResponse {
    isValid: boolean;
    /** Not present if is_valid is false */
    userInfo?: ValidateIndependentServiceTokenResponse_UserInfo | undefined;
}
export interface ValidateIndependentServiceTokenResponse_UserInfo {
    accessBetaServers: boolean;
    accessDeveloperServers: boolean;
    /** Not present if not banned */
    ban?: Ban | undefined;
}
export declare const ValidateIndependentServiceTokenRequest: MessageFns<ValidateIndependentServiceTokenRequest>;
export declare const ValidateIndependentServiceTokenResponse: MessageFns<ValidateIndependentServiceTokenResponse>;
export declare const ValidateIndependentServiceTokenResponse_UserInfo: MessageFns<ValidateIndependentServiceTokenResponse_UserInfo>;
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
