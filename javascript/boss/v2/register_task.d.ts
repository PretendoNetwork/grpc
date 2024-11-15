/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/v2/register_task.proto" (package "boss.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Task } from "./task";
/**
 * @generated from protobuf message boss.v2.RegisterTaskRequest
 */
export interface RegisterTaskRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string boss_app_id = 2;
     */
    bossAppId: string;
    /**
     * @generated from protobuf field: string title_id = 3;
     */
    titleId: string;
    /**
     * @generated from protobuf field: string country = 4;
     */
    country: string;
    /**
     * @generated from protobuf field: string description = 5;
     */
    description: string;
}
/**
 * @generated from protobuf message boss.v2.RegisterTaskResponse
 */
export interface RegisterTaskResponse {
    /**
     * @generated from protobuf field: boss.v2.Task task = 1;
     */
    task?: Task;
}
declare class RegisterTaskRequest$Type extends MessageType<RegisterTaskRequest> {
    constructor();
    create(value?: PartialMessage<RegisterTaskRequest>): RegisterTaskRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterTaskRequest): RegisterTaskRequest;
    internalBinaryWrite(message: RegisterTaskRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.RegisterTaskRequest
 */
export declare const RegisterTaskRequest: RegisterTaskRequest$Type;
declare class RegisterTaskResponse$Type extends MessageType<RegisterTaskResponse> {
    constructor();
    create(value?: PartialMessage<RegisterTaskResponse>): RegisterTaskResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegisterTaskResponse): RegisterTaskResponse;
    internalBinaryWrite(message: RegisterTaskResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.v2.RegisterTaskResponse
 */
export declare const RegisterTaskResponse: RegisterTaskResponse$Type;
export {};
