import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "account.v2";
/** TODO - Move this to own file */
export declare enum BanTargetType {
    BAN_TARGET_TYPE_UNSPECIFIED = 0,
    BAN_TARGET_TYPE_NEX_ACCOUNT = 1,
    BAN_TARGET_TYPE_NETWORK_ACCOUNT = 2,
    BAN_TARGET_TYPE_DEVICE = 3,
    UNRECOGNIZED = -1
}
export declare function banTargetTypeFromJSON(object: any): BanTargetType;
export declare function banTargetTypeToJSON(object: BanTargetType): string;
/**
 * TODO - Move this to own file
 * * Relates to the official ban error codes:
 * * 102-2800 BANNED
 * * 102-2801 BANNED_ACCOUNT
 * * 102-2802 BANNED_ACCOUNT_ALL
 * * 102-2803 BANNED_ACCOUNT_IN_APPLICATION
 * * 102-2804 BANNED_ACCOUNT_IN_NEX_SERVICE
 * * 102-2805 BANNED_ACCOUNT_IN_INDEPENDENT_SERVICE
 * * 102-2811 BANNED_DEVICE
 * * 102-2812 BANNED_DEVICE_ALL
 * * 102-2813 BANNED_DEVICE_IN_APPLICATION
 * * 102-2814 BANNED_DEVICE_IN_NEX_SERVICE
 * * 102-2815 BANNED_DEVICE_IN_INDEPENDENT_SERVICE
 * * 102-2821 BANNED_ACCOUNT_TEMPORARILY
 * * 102-2822 BANNED_ACCOUNT_ALL_TEMPORARILY
 * * 102-2823 BANNED_ACCOUNT_IN_APPLICATION_TEMPORARILY
 * * 102-2824 BANNED_ACCOUNT_IN_NEX_SERVICE_TEMPORARILY
 * * 102-2825 BANNED_ACCOUNT_IN_INDEPENDENT_SERVICE_TEMPORARILY
 * * 102-2831 BANNED_DEVICE_TEMPORARILY
 * * 102-2832 BANNED_DEVICE_ALL_TEMPORARILY
 * * 102-2833 BANNED_DEVICE_IN_APPLICATION_TEMPORARILY
 * * 102-2834 BANNED_DEVICE_IN_NEX_SERVICE_TEMPORARILY
 * * 102-2835 BANNED_DEVICE_IN_INDEPENDENT_SERVICE_TEMPORARILY
 */
export declare enum BanScopeType {
    BAN_SCOPE_TYPE_UNSPECIFIED = 0,
    BAN_SCOPE_TYPE_ALL = 1,
    BAN_SCOPE_TYPE_APPLICATION = 2,
    BAN_SCOPE_TYPE_NEX_SERVICE = 3,
    BAN_SCOPE_TYPE_INDEPENDENT_SERVICE = 4,
    UNRECOGNIZED = -1
}
export declare function banScopeTypeFromJSON(object: any): BanScopeType;
export declare function banScopeTypeToJSON(object: BanScopeType): string;
export interface BanDetails {
    targetType: BanTargetType;
    target: string;
    /** Set as a string to not limit this to PIDs */
    issuer: string;
    startDate: Date | undefined;
    endDate: Date | undefined;
    scopeType: BanScopeType;
    scopeTarget: string;
    reason: string;
}
/** TODO - Move this to own file */
export interface Ban {
    id: string;
    details: BanDetails | undefined;
    issuedDate: Date | undefined;
    updatedDate: Date | undefined;
    pardonedDate?: Date | undefined;
    pardonedReason?: string | undefined;
}
export declare const BanDetails: MessageFns<BanDetails>;
export declare const Ban: MessageFns<Ban>;
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
