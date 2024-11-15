/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/task.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message boss.Task
 */
export interface Task {
    /**
     * @generated from protobuf field: bool deleted = 1;
     */
    deleted: boolean;
    /**
     * @generated from protobuf field: string id = 2;
     */
    id: string;
    /**
     * @generated from protobuf field: string in_game_id = 3;
     */
    inGameId: string;
    /**
     * @generated from protobuf field: string boss_app_id = 4;
     */
    bossAppId: string;
    /**
     * @generated from protobuf field: uint32 creator_pid = 5;
     */
    creatorPid: number;
    /**
     * @generated from protobuf field: string status = 6;
     */
    status: string;
    /**
     * @generated from protobuf field: string title_id = 7;
     */
    titleId: string;
    /**
     * @generated from protobuf field: string description = 8;
     */
    description: string;
    /**
     * @generated from protobuf field: uint64 created_timestamp = 9;
     */
    createdTimestamp: bigint;
    /**
     * @generated from protobuf field: uint64 updated_timestamp = 10;
     */
    updatedTimestamp: bigint;
}
declare class Task$Type extends MessageType<Task> {
    constructor();
    create(value?: PartialMessage<Task>): Task;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Task): Task;
    internalBinaryWrite(message: Task, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message boss.Task
 */
export declare const Task: Task$Type;
export {};
