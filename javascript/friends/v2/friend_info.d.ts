import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "friends.v2";
export interface Comment {
    contents: string;
    lastChanged: Date | undefined;
}
/** 3DS Mii */
export interface Mii {
    name: string;
    profanityFlag: boolean;
    characterSet: number;
    miiData: Buffer;
    miiDataEncrypted: Buffer;
}
export interface FriendMii {
    pid: number;
    mii: Mii | undefined;
    modifiedAt: Date | undefined;
}
/** Wii U Mii */
export interface MiiV2 {
    name: string;
    miiData: Buffer;
    datetime: Date | undefined;
}
export interface PrincipalBasicInfo {
    pid: number;
    nnid: string;
    mii: MiiV2 | undefined;
}
export interface NNAInfo {
    principalBasicInfo: PrincipalBasicInfo | undefined;
}
export interface GameKey {
    titleId: bigint;
    titleVersion: number;
}
/** Wii U Presence */
export interface NintendoPresenceV2 {
    changedFlags: number;
    online: boolean;
    gameKey: GameKey | undefined;
    message: string;
    gameServerId: number;
    pid: number;
    gatheringId: number;
    applicationData: Buffer;
}
/** 3DS Presence */
export interface NintendoPresence {
    changedFlags: number;
    gameKey: GameKey | undefined;
    message: string;
    joinAvailableFlag: number;
    matchmakeType: number;
    joinGameId: number;
    joinGameMode: number;
    ownerPid: number;
    joinGroupId: number;
    applicationArg: Buffer;
}
export interface FriendInfoWiiU {
    nnaInfo: NNAInfo | undefined;
    presence: NintendoPresenceV2 | undefined;
    status: Comment | undefined;
    becameFriend: Date | undefined;
    lastOnline: Date | undefined;
}
export interface FriendInfo3DS {
    pid: number;
    region: number;
    country: number;
    area: number;
    language: number;
    platform: number;
    presence: NintendoPresence | undefined;
    gameKey: GameKey | undefined;
    message: string;
    messageUpdatedAt: Date | undefined;
    miiModifiedAt: Date | undefined;
    lastOnline: Date | undefined;
    mii: FriendMii | undefined;
}
export declare const Comment: MessageFns<Comment>;
export declare const Mii: MessageFns<Mii>;
export declare const FriendMii: MessageFns<FriendMii>;
export declare const MiiV2: MessageFns<MiiV2>;
export declare const PrincipalBasicInfo: MessageFns<PrincipalBasicInfo>;
export declare const NNAInfo: MessageFns<NNAInfo>;
export declare const GameKey: MessageFns<GameKey>;
export declare const NintendoPresenceV2: MessageFns<NintendoPresenceV2>;
export declare const NintendoPresence: MessageFns<NintendoPresence>;
export declare const FriendInfoWiiU: MessageFns<FriendInfoWiiU>;
export declare const FriendInfo3DS: MessageFns<FriendInfo3DS>;
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
