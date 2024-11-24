import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "boss";
export interface UpdateTaskData {
    id: string;
    bossAppId: string;
    titleId: string;
    status: string;
    description: string;
}
export interface UpdateTaskRequest {
    id: string;
    bossAppId: string;
    updateData: UpdateTaskData | undefined;
}
export declare const UpdateTaskData: MessageFns<UpdateTaskData>;
export declare const UpdateTaskRequest: MessageFns<UpdateTaskRequest>;
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
