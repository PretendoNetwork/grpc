import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "api.v2";
export interface SetStripeConnectionDataRequest {
    customerId?: string | undefined;
    subscriptionId?: string | undefined;
    priceId?: string | undefined;
    tierLevel?: number | undefined;
    tierName?: string | undefined;
    timestamp: bigint;
}
export interface SetStripeConnectionDataResponse {
}
export declare const SetStripeConnectionDataRequest: MessageFns<SetStripeConnectionDataRequest>;
export declare const SetStripeConnectionDataResponse: MessageFns<SetStripeConnectionDataResponse>;
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
