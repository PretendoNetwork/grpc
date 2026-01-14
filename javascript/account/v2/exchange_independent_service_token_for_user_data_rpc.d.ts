import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { GetPNIDResponse } from "./get_pnid_rpc";
import { NEXAccount } from "./nex_account";
import { TokenInfo } from "./token_info";
export declare const protobufPackage = "account.v2";
/** TODO - Move this to own file */
export declare enum IndependentServiceTokenProviderType {
    INDEPENDENT_SERVICE_TOKEN_PROVIDER_TYPE_UNSPECIFIED = 0,
    INDEPENDENT_SERVICE_TOKEN_PROVIDER_TYPE_NASC = 1,
    INDEPENDENT_SERVICE_TOKEN_PROVIDER_TYPE_NNAS = 2,
    UNRECOGNIZED = -1
}
export declare function independentServiceTokenProviderTypeFromJSON(object: any): IndependentServiceTokenProviderType;
export declare function independentServiceTokenProviderTypeToJSON(object: IndependentServiceTokenProviderType): string;
export interface ExchangeIndependentServiceTokenForUserDataRequest {
    provider: IndependentServiceTokenProviderType;
    /** For NNAS */
    clientId?: string | undefined;
    /** For NASC */
    titleIds: string[];
    token: string;
}
export interface ExchangeIndependentServiceTokenForUserDataResponse {
    /** May not be present when using a NASC token */
    pnid?: GetPNIDResponse | undefined;
    nexAccount: NEXAccount | undefined;
    tokenInfo: TokenInfo | undefined;
}
export declare const ExchangeIndependentServiceTokenForUserDataRequest: MessageFns<ExchangeIndependentServiceTokenForUserDataRequest>;
export declare const ExchangeIndependentServiceTokenForUserDataResponse: MessageFns<ExchangeIndependentServiceTokenForUserDataResponse>;
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
