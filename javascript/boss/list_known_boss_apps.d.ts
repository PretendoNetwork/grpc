/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/list_known_boss_apps.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message boss.BOSSApp
 */
export interface BOSSApp {
    /**
     * @generated from protobuf field: string boss_app_id = 1;
     */
    bossAppId: string;
    /**
     * @generated from protobuf field: string title_id = 2;
     */
    titleId: string;
    /**
     * @generated from protobuf field: string title_region = 3;
     */
    titleRegion: string;
    /**
     * @generated from protobuf field: string name = 4;
     */
    name: string;
    /**
     * @generated from protobuf field: repeated string tasks = 5;
     */
    tasks: string[];
}
/**
 * @generated from protobuf message boss.ListKnownBOSSAppsResponse
 */
export interface ListKnownBOSSAppsResponse {
    /**
     * @generated from protobuf field: repeated boss.BOSSApp apps = 1;
     */
    apps: BOSSApp[];
}
declare class BOSSApp$Type extends MessageType<BOSSApp> {
    constructor();
    create(value?: PartialMessage<BOSSApp>): BOSSApp;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BOSSApp): BOSSApp;
    internalBinaryWrite(message: BOSSApp, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.BOSSApp
 */
export declare const BOSSApp: BOSSApp$Type;
declare class ListKnownBOSSAppsResponse$Type extends MessageType<ListKnownBOSSAppsResponse> {
    constructor();
    create(value?: PartialMessage<ListKnownBOSSAppsResponse>): ListKnownBOSSAppsResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ListKnownBOSSAppsResponse): ListKnownBOSSAppsResponse;
    internalBinaryWrite(message: ListKnownBOSSAppsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.ListKnownBOSSAppsResponse
 */
export declare const ListKnownBOSSAppsResponse: ListKnownBOSSAppsResponse$Type;
export {};