import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "miiverse.v2";
export interface CommunityData {
    communityId: string;
    name: string;
    description: string;
    icons: {
        [key: string]: string;
    };
    /** Owner PID */
    pid: number;
    appData: string;
    isUserCommunity: boolean;
    screenName?: string | undefined;
    mii?: string | undefined;
    createdAt: string;
    hasShopPage: boolean;
    isRecommended: boolean;
    titleId: string[];
}
export interface CommunityData_IconsEntry {
    key: string;
    value: string;
}
export declare const CommunityData: MessageFns<CommunityData>;
export declare const CommunityData_IconsEntry: MessageFns<CommunityData_IconsEntry>;
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
