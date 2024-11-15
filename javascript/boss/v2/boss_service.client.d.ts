/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/v2/boss_service.proto" (package "boss.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { DeleteFileResponse } from "./delete_file";
import type { DeleteFileRequest } from "./delete_file";
import type { UpdateFileMetadataResponse } from "./update_file_metadata";
import type { UpdateFileMetadataRequest } from "./update_file_metadata";
import type { UploadFileResponse } from "./upload_file";
import type { UploadFileRequest } from "./upload_file";
import type { ListFilesResponse } from "./list_files";
import type { ListFilesRequest } from "./list_files";
import type { DeleteTaskResponse } from "./delete_task";
import type { DeleteTaskRequest } from "./delete_task";
import type { UpdateTaskResponse } from "./update_task";
import type { UpdateTaskRequest } from "./update_task";
import type { RegisterTaskResponse } from "./register_task";
import type { RegisterTaskRequest } from "./register_task";
import type { ListTasksResponse } from "./list_tasks";
import type { ListTasksRequest } from "./list_tasks";
import type { ListKnownBOSSAppsResponse } from "./list_known_boss_apps";
import type { ListKnownBOSSAppsRequest } from "./list_known_boss_apps";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service boss.v2.BossService
 */
export interface IBossServiceClient {
    /**
     * @generated from protobuf rpc: ListKnownBOSSApps(boss.v2.ListKnownBOSSAppsRequest) returns (boss.v2.ListKnownBOSSAppsResponse);
     */
    listKnownBOSSApps(input: ListKnownBOSSAppsRequest, options?: RpcOptions): UnaryCall<ListKnownBOSSAppsRequest, ListKnownBOSSAppsResponse>;
    /**
     * @generated from protobuf rpc: ListTasks(boss.v2.ListTasksRequest) returns (boss.v2.ListTasksResponse);
     */
    listTasks(input: ListTasksRequest, options?: RpcOptions): UnaryCall<ListTasksRequest, ListTasksResponse>;
    /**
     * @generated from protobuf rpc: RegisterTask(boss.v2.RegisterTaskRequest) returns (boss.v2.RegisterTaskResponse);
     */
    registerTask(input: RegisterTaskRequest, options?: RpcOptions): UnaryCall<RegisterTaskRequest, RegisterTaskResponse>;
    /**
     * @generated from protobuf rpc: UpdateTask(boss.v2.UpdateTaskRequest) returns (boss.v2.UpdateTaskResponse);
     */
    updateTask(input: UpdateTaskRequest, options?: RpcOptions): UnaryCall<UpdateTaskRequest, UpdateTaskResponse>;
    /**
     * @generated from protobuf rpc: DeleteTask(boss.v2.DeleteTaskRequest) returns (boss.v2.DeleteTaskResponse);
     */
    deleteTask(input: DeleteTaskRequest, options?: RpcOptions): UnaryCall<DeleteTaskRequest, DeleteTaskResponse>;
    /**
     * @generated from protobuf rpc: ListFiles(boss.v2.ListFilesRequest) returns (boss.v2.ListFilesResponse);
     */
    listFiles(input: ListFilesRequest, options?: RpcOptions): UnaryCall<ListFilesRequest, ListFilesResponse>;
    /**
     * @generated from protobuf rpc: UploadFile(boss.v2.UploadFileRequest) returns (boss.v2.UploadFileResponse);
     */
    uploadFile(input: UploadFileRequest, options?: RpcOptions): UnaryCall<UploadFileRequest, UploadFileResponse>;
    /**
     * @generated from protobuf rpc: UpdateFileMetadata(boss.v2.UpdateFileMetadataRequest) returns (boss.v2.UpdateFileMetadataResponse);
     */
    updateFileMetadata(input: UpdateFileMetadataRequest, options?: RpcOptions): UnaryCall<UpdateFileMetadataRequest, UpdateFileMetadataResponse>;
    /**
     * @generated from protobuf rpc: DeleteFile(boss.v2.DeleteFileRequest) returns (boss.v2.DeleteFileResponse);
     */
    deleteFile(input: DeleteFileRequest, options?: RpcOptions): UnaryCall<DeleteFileRequest, DeleteFileResponse>;
}
/**
 * @generated from protobuf service boss.v2.BossService
 */
export declare class BossServiceClient implements IBossServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: ListKnownBOSSApps(boss.v2.ListKnownBOSSAppsRequest) returns (boss.v2.ListKnownBOSSAppsResponse);
     */
    listKnownBOSSApps(input: ListKnownBOSSAppsRequest, options?: RpcOptions): UnaryCall<ListKnownBOSSAppsRequest, ListKnownBOSSAppsResponse>;
    /**
     * @generated from protobuf rpc: ListTasks(boss.v2.ListTasksRequest) returns (boss.v2.ListTasksResponse);
     */
    listTasks(input: ListTasksRequest, options?: RpcOptions): UnaryCall<ListTasksRequest, ListTasksResponse>;
    /**
     * @generated from protobuf rpc: RegisterTask(boss.v2.RegisterTaskRequest) returns (boss.v2.RegisterTaskResponse);
     */
    registerTask(input: RegisterTaskRequest, options?: RpcOptions): UnaryCall<RegisterTaskRequest, RegisterTaskResponse>;
    /**
     * @generated from protobuf rpc: UpdateTask(boss.v2.UpdateTaskRequest) returns (boss.v2.UpdateTaskResponse);
     */
    updateTask(input: UpdateTaskRequest, options?: RpcOptions): UnaryCall<UpdateTaskRequest, UpdateTaskResponse>;
    /**
     * @generated from protobuf rpc: DeleteTask(boss.v2.DeleteTaskRequest) returns (boss.v2.DeleteTaskResponse);
     */
    deleteTask(input: DeleteTaskRequest, options?: RpcOptions): UnaryCall<DeleteTaskRequest, DeleteTaskResponse>;
    /**
     * @generated from protobuf rpc: ListFiles(boss.v2.ListFilesRequest) returns (boss.v2.ListFilesResponse);
     */
    listFiles(input: ListFilesRequest, options?: RpcOptions): UnaryCall<ListFilesRequest, ListFilesResponse>;
    /**
     * @generated from protobuf rpc: UploadFile(boss.v2.UploadFileRequest) returns (boss.v2.UploadFileResponse);
     */
    uploadFile(input: UploadFileRequest, options?: RpcOptions): UnaryCall<UploadFileRequest, UploadFileResponse>;
    /**
     * @generated from protobuf rpc: UpdateFileMetadata(boss.v2.UpdateFileMetadataRequest) returns (boss.v2.UpdateFileMetadataResponse);
     */
    updateFileMetadata(input: UpdateFileMetadataRequest, options?: RpcOptions): UnaryCall<UpdateFileMetadataRequest, UpdateFileMetadataResponse>;
    /**
     * @generated from protobuf rpc: DeleteFile(boss.v2.DeleteFileRequest) returns (boss.v2.DeleteFileResponse);
     */
    deleteFile(input: DeleteFileRequest, options?: RpcOptions): UnaryCall<DeleteFileRequest, DeleteFileResponse>;
}