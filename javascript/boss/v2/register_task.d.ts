import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Task } from "./task";
export declare const protobufPackage = "boss.v2";
export interface RegisterTaskRequest {
    id: string;
    bossAppId: string;
    titleId: bigint;
    status: string;
    interval: number;
    description: string;
}
export interface RegisterTaskResponse {
    task: Task | undefined;
}
export declare const RegisterTaskRequest: MessageFns<RegisterTaskRequest>;
export declare const RegisterTaskResponse: MessageFns<RegisterTaskResponse>;
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
