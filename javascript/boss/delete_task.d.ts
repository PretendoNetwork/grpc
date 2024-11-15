/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/delete_task.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message boss.DeleteTaskRequest
 */
export interface DeleteTaskRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string boss_app_id = 2;
     */
    bossAppId: string;
}
declare class DeleteTaskRequest$Type extends MessageType<DeleteTaskRequest> {
    constructor();
    create(value?: PartialMessage<DeleteTaskRequest>): DeleteTaskRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeleteTaskRequest): DeleteTaskRequest;
    internalBinaryWrite(message: DeleteTaskRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.DeleteTaskRequest
 */
export declare const DeleteTaskRequest: DeleteTaskRequest$Type;
export {};
