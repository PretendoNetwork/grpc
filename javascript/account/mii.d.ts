/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "account/mii.proto" (package "account", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message account.Mii
 */
export interface Mii {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * @generated from protobuf field: string data = 2;
     */
    data: string;
    /**
     * @generated from protobuf field: string url = 3;
     */
    url: string;
}
declare class Mii$Type extends MessageType<Mii> {
    constructor();
    create(value?: PartialMessage<Mii>): Mii;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mii): Mii;
    internalBinaryWrite(message: Mii, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message account.Mii
 */
export declare const Mii: Mii$Type;
export {};
