import type { CallContext, CallOptions } from "nice-grpc-common";
import { Empty } from "../google/protobuf/empty";
import { DeleteFileRequest } from "./delete_file";
import { DeleteTaskRequest } from "./delete_task";
import { ListFilesRequest, ListFilesResponse } from "./list_files";
import { ListKnownBOSSAppsResponse } from "./list_known_boss_apps";
import { ListTasksResponse } from "./list_tasks";
import { RegisterTaskRequest, RegisterTaskResponse } from "./register_task";
import { UpdateFileMetadataRequest } from "./update_file_metadata";
import { UpdateTaskRequest } from "./update_task";
import { UploadFileRequest, UploadFileResponse } from "./upload_file";
export declare const protobufPackage = "boss";
export declare const protobufFileName = "boss/boss_service.proto";
export type BOSSDefinition = typeof BOSSDefinition;
export declare const BOSSDefinition: {
    readonly name: "BOSS";
    readonly fullName: "boss.BOSS";
    readonly methods: {
        readonly listKnownBOSSApps: {
            readonly name: "ListKnownBOSSApps";
            readonly requestType: typeof Empty;
            readonly requestStream: false;
            readonly responseType: typeof ListKnownBOSSAppsResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listTasks: {
            readonly name: "ListTasks";
            readonly requestType: typeof Empty;
            readonly requestStream: false;
            readonly responseType: typeof ListTasksResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly registerTask: {
            readonly name: "RegisterTask";
            readonly requestType: typeof RegisterTaskRequest;
            readonly requestStream: false;
            readonly responseType: typeof RegisterTaskResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateTask: {
            readonly name: "UpdateTask";
            readonly requestType: typeof UpdateTaskRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly deleteTask: {
            readonly name: "DeleteTask";
            readonly requestType: typeof DeleteTaskRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listFiles: {
            readonly name: "ListFiles";
            readonly requestType: typeof ListFilesRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListFilesResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly uploadFile: {
            readonly name: "UploadFile";
            readonly requestType: typeof UploadFileRequest;
            readonly requestStream: false;
            readonly responseType: typeof UploadFileResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateFileMetadata: {
            readonly name: "UpdateFileMetadata";
            readonly requestType: typeof UpdateFileMetadataRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly deleteFile: {
            readonly name: "DeleteFile";
            readonly requestType: typeof DeleteFileRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface BOSSServiceImplementation<CallContextExt = {}> {
    listKnownBOSSApps(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<ListKnownBOSSAppsResponse>>;
    listTasks(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<ListTasksResponse>>;
    registerTask(request: RegisterTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterTaskResponse>>;
    updateTask(request: UpdateTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    deleteTask(request: DeleteTaskRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    listFiles(request: ListFilesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFilesResponse>>;
    uploadFile(request: UploadFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UploadFileResponse>>;
    updateFileMetadata(request: UpdateFileMetadataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    deleteFile(request: DeleteFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}
export interface BOSSClient<CallOptionsExt = {}> {
    listKnownBOSSApps(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<ListKnownBOSSAppsResponse>;
    listTasks(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<ListTasksResponse>;
    registerTask(request: DeepPartial<RegisterTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterTaskResponse>;
    updateTask(request: DeepPartial<UpdateTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    deleteTask(request: DeepPartial<DeleteTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    listFiles(request: DeepPartial<ListFilesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFilesResponse>;
    uploadFile(request: DeepPartial<UploadFileRequest>, options?: CallOptions & CallOptionsExt): Promise<UploadFileResponse>;
    updateFileMetadata(request: DeepPartial<UpdateFileMetadataRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    deleteFile(request: DeepPartial<DeleteFileRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends bigint ? string | number | bigint : T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
