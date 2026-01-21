import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { BasicUserInfo } from "./basic_user_info";
import { GetPNIDResponse } from "./get_pnid_rpc";
import { NEXAccount } from "./nex_account";
import { TokenInfo } from "./token_info";
export declare const protobufPackage = "account.v2";
export interface ExchangeIndependentServiceTokenForUserDataRequest {
    clientIds: string[];
    token: string;
}
export interface ExchangeIndependentServiceTokenForUserDataResponse {
    /** May not be present when using a NASC token */
    pnid?: GetPNIDResponse | undefined;
    nexAccount: NEXAccount | undefined;
    tokenInfo: TokenInfo | undefined;
    basicUserInfo: BasicUserInfo | undefined;
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
