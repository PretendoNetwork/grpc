import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { FriendRequest } from "./friend_request";
export declare const protobufPackage = "friends.v2";
export interface GetUserFriendRequestsIncomingRequest {
    pid: number;
}
export interface GetUserFriendRequestsIncomingResponse {
    friendRequests: FriendRequest[];
}
export declare const GetUserFriendRequestsIncomingRequest: MessageFns<GetUserFriendRequestsIncomingRequest>;
export declare const GetUserFriendRequestsIncomingResponse: MessageFns<GetUserFriendRequestsIncomingResponse>;
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
