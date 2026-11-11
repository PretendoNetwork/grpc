import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "friends.v2";
export declare const protobufFileName = "friends/v2/get_user_friend_pids_multi_rpc.proto";
/** TODO - Move this to its own file? */
export interface FriendPIDList {
    pids: bigint[];
}
export interface GetUserFriendPIDsMultiRequest {
    pids: bigint[];
}
export interface GetUserFriendPIDsMultiResponse {
    data: Map<bigint, FriendPIDList>;
}
export interface GetUserFriendPIDsMultiResponse_DataEntry {
    key: bigint;
    value: FriendPIDList | undefined;
}
export declare const FriendPIDList: MessageFns<FriendPIDList>;
export declare const GetUserFriendPIDsMultiRequest: MessageFns<GetUserFriendPIDsMultiRequest>;
export declare const GetUserFriendPIDsMultiResponse: MessageFns<GetUserFriendPIDsMultiResponse>;
export declare const GetUserFriendPIDsMultiResponse_DataEntry: MessageFns<GetUserFriendPIDsMultiResponse_DataEntry>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends bigint ? string | number | bigint : T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
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
