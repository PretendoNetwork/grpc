import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PostData } from "./post";
export declare const protobufPackage = "miiverse.v2";
export interface GetPostRepliesRequest {
    postId: string;
    limit: number;
    beforeDate?: string | undefined;
    afterDate?: string | undefined;
    offset?: number | undefined;
}
export interface GetPostRepliesResponse {
    posts: PostData[];
}
export declare const GetPostRepliesRequest: MessageFns<GetPostRepliesRequest>;
export declare const GetPostRepliesResponse: MessageFns<GetPostRepliesResponse>;
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
