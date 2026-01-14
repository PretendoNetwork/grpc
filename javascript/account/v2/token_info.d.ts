import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "account.v2";
/** TODO - Move this to own file */
export declare enum SystemType {
    SYSTEM_TYPE_UNSPECIFIED = 0,
    SYSTEM_TYPE_WUP = 1,
    SYSTEM_TYPE_CTR = 2,
    SYSTEM_TYPE_API = 3,
    SYSTEM_TYPE_PASSWORD_RESET = 255,
    UNRECOGNIZED = -1
}
export declare function systemTypeFromJSON(object: any): SystemType;
export declare function systemTypeToJSON(object: SystemType): string;
/** TODO - Move this to own file */
export declare enum TokenType {
    TOKEN_TYPE_UNSPECIFIED = 0,
    TOKEN_TYPE_OAUTH_ACCESS = 1,
    TOKEN_TYPE_OAUTH_REFRESH = 2,
    TOKEN_TYPE_NEX = 3,
    TOKEN_TYPE_INDEPENDENT_SERVICE = 4,
    TOKEN_TYPE_PASSWORD_RESET = 5,
    UNRECOGNIZED = -1
}
export declare function tokenTypeFromJSON(object: any): TokenType;
export declare function tokenTypeToJSON(object: TokenType): string;
export interface TokenInfo {
    systemType: SystemType;
    tokenType: TokenType;
    pid: bigint;
    accessLevel: number;
    titleId: bigint;
    issueTime: Date | undefined;
    expireTime: Date | undefined;
}
export declare const TokenInfo: MessageFns<TokenInfo>;
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
