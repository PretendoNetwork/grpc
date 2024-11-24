import { type CallContext, type CallOptions } from "nice-grpc-common";
import { DeleteFileRequest, DeleteFileResponse } from "./delete_file";
import { DeleteTaskRequest, DeleteTaskResponse } from "./delete_task";
import { ListFilesRequest, ListFilesResponse } from "./list_files";
import { ListKnownBOSSAppsRequest, ListKnownBOSSAppsResponse } from "./list_known_boss_apps";
import { ListTasksRequest, ListTasksResponse } from "./list_tasks";
import { RegisterTaskRequest, RegisterTaskResponse } from "./register_task";
import { UpdateFileMetadataRequest, UpdateFileMetadataResponse } from "./update_file_metadata";
import { UpdateTaskRequest, UpdateTaskResponse } from "./update_task";
import { UploadFileRequest, UploadFileResponse } from "./upload_file";
export declare const protobufPackage = "boss.v2";
export type BossServiceDefinition = typeof BossServiceDefinition;
export declare const BossServiceDefinition: {
    readonly name: "BossService";
    readonly fullName: "boss.v2.BossService";
    readonly methods: {
        readonly listKnownBOSSApps: {
            readonly name: "ListKnownBOSSApps";
            readonly requestType: import("./list_known_boss_apps").MessageFns<ListKnownBOSSAppsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_known_boss_apps").MessageFns<ListKnownBOSSAppsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listTasks: {
            readonly name: "ListTasks";
            readonly requestType: import("./list_tasks").MessageFns<ListTasksRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_tasks").MessageFns<ListTasksResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly registerTask: {
            readonly name: "RegisterTask";
            readonly requestType: import("./register_task").MessageFns<RegisterTaskRequest>;
            readonly requestStream: false;
            readonly responseType: import("./register_task").MessageFns<RegisterTaskResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateTask: {
            readonly name: "UpdateTask";
            readonly requestType: import("./update_task").MessageFns<UpdateTaskRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_task").MessageFns<UpdateTaskResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly deleteTask: {
            readonly name: "DeleteTask";
            readonly requestType: import("./delete_task").MessageFns<DeleteTaskRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_task").MessageFns<DeleteTaskResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listFiles: {
            readonly name: "ListFiles";
            readonly requestType: import("./list_files").MessageFns<ListFilesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_files").MessageFns<ListFilesResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly uploadFile: {
            readonly name: "UploadFile";
            readonly requestType: import("./upload_file").MessageFns<UploadFileRequest>;
            readonly requestStream: false;
            readonly responseType: import("./upload_file").MessageFns<UploadFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateFileMetadata: {
            readonly name: "UpdateFileMetadata";
            readonly requestType: import("./update_file_metadata").MessageFns<UpdateFileMetadataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_file_metadata").MessageFns<UpdateFileMetadataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly deleteFile: {
            readonly name: "DeleteFile";
            readonly requestType: import("./delete_file").MessageFns<DeleteFileRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_file").MessageFns<DeleteFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface BossServiceImplementation<CallContextExt = {}> {
    listKnownBOSSApps(request: ListKnownBOSSAppsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListKnownBOSSAppsResponse>>;
    listTasks(request: ListTasksRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListTasksResponse>>;
    registerTask(request: RegisterTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterTaskResponse>>;
    updateTask(request: UpdateTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateTaskResponse>>;
    deleteTask(request: DeleteTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteTaskResponse>>;
    listFiles(request: ListFilesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFilesResponse>>;
    uploadFile(request: UploadFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UploadFileResponse>>;
    updateFileMetadata(request: UpdateFileMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateFileMetadataResponse>>;
    deleteFile(request: DeleteFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteFileResponse>>;
}
export interface BossServiceClient<CallOptionsExt = {}> {
    listKnownBOSSApps(request: DeepPartial<ListKnownBOSSAppsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListKnownBOSSAppsResponse>;
    listTasks(request: DeepPartial<ListTasksRequest>, options?: CallOptions & CallOptionsExt): Promise<ListTasksResponse>;
    registerTask(request: DeepPartial<RegisterTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterTaskResponse>;
    updateTask(request: DeepPartial<UpdateTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateTaskResponse>;
    deleteTask(request: DeepPartial<DeleteTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteTaskResponse>;
    listFiles(request: DeepPartial<ListFilesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFilesResponse>;
    uploadFile(request: DeepPartial<UploadFileRequest>, options?: CallOptions & CallOptionsExt): Promise<UploadFileResponse>;
    updateFileMetadata(request: DeepPartial<UpdateFileMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateFileMetadataResponse>;
    deleteFile(request: DeepPartial<DeleteFileRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteFileResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
