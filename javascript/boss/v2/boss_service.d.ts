import { type CallContext, type CallOptions } from "nice-grpc-common";
import { DeleteFileRequest, DeleteFileResponse } from "./delete_file";
import { DeleteTaskRequest, DeleteTaskResponse } from "./delete_task";
import { ListFilesCTRRequest, ListFilesCTRResponse } from "./list_files_ctr";
import { ListFilesWUPRequest, ListFilesWUPResponse } from "./list_files_wup";
import { ListKnownBOSSAppsRequest, ListKnownBOSSAppsResponse } from "./list_known_boss_apps";
import { ListTasksRequest, ListTasksResponse } from "./list_tasks";
import { RegisterTaskRequest, RegisterTaskResponse } from "./register_task";
import { UpdateFileMetadataCTRRequest, UpdateFileMetadataCTRResponse } from "./update_file_metadata_ctr";
import { UpdateFileMetadataWUPRequest, UpdateFileMetadataWUPResponse } from "./update_file_metadata_wup";
import { UpdateTaskRequest, UpdateTaskResponse } from "./update_task";
import { UploadFileCTRRequest, UploadFileCTRResponse } from "./upload_file_ctr";
import { UploadFileWUPRequest, UploadFileWUPResponse } from "./upload_file_wup";
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
        readonly deleteFile: {
            readonly name: "DeleteFile";
            readonly requestType: import("./delete_file").MessageFns<DeleteFileRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_file").MessageFns<DeleteFileResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listFilesWUP: {
            readonly name: "ListFilesWUP";
            readonly requestType: import("./list_files_wup").MessageFns<ListFilesWUPRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_files_wup").MessageFns<ListFilesWUPResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly uploadFileWUP: {
            readonly name: "UploadFileWUP";
            readonly requestType: import("./upload_file_wup").MessageFns<UploadFileWUPRequest>;
            readonly requestStream: false;
            readonly responseType: import("./upload_file_wup").MessageFns<UploadFileWUPResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateFileMetadataWUP: {
            readonly name: "UpdateFileMetadataWUP";
            readonly requestType: import("./update_file_metadata_wup").MessageFns<UpdateFileMetadataWUPRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_file_metadata_wup").MessageFns<UpdateFileMetadataWUPResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly listFilesCTR: {
            readonly name: "ListFilesCTR";
            readonly requestType: import("./list_files_ctr").MessageFns<ListFilesCTRRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_files_ctr").MessageFns<ListFilesCTRResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly uploadFileCTR: {
            readonly name: "UploadFileCTR";
            readonly requestType: import("./upload_file_ctr").MessageFns<UploadFileCTRRequest>;
            readonly requestStream: false;
            readonly responseType: import("./upload_file_ctr").MessageFns<UploadFileCTRResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateFileMetadataCTR: {
            readonly name: "UpdateFileMetadataCTR";
            readonly requestType: import("./update_file_metadata_ctr").MessageFns<UpdateFileMetadataCTRRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_file_metadata_ctr").MessageFns<UpdateFileMetadataCTRResponse>;
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
    deleteFile(request: DeleteFileRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteFileResponse>>;
    listFilesWUP(request: ListFilesWUPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFilesWUPResponse>>;
    uploadFileWUP(request: UploadFileWUPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UploadFileWUPResponse>>;
    updateFileMetadataWUP(request: UpdateFileMetadataWUPRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateFileMetadataWUPResponse>>;
    listFilesCTR(request: ListFilesCTRRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListFilesCTRResponse>>;
    uploadFileCTR(request: UploadFileCTRRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UploadFileCTRResponse>>;
    updateFileMetadataCTR(request: UpdateFileMetadataCTRRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateFileMetadataCTRResponse>>;
}
export interface BossServiceClient<CallOptionsExt = {}> {
    listKnownBOSSApps(request: DeepPartial<ListKnownBOSSAppsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListKnownBOSSAppsResponse>;
    listTasks(request: DeepPartial<ListTasksRequest>, options?: CallOptions & CallOptionsExt): Promise<ListTasksResponse>;
    registerTask(request: DeepPartial<RegisterTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterTaskResponse>;
    updateTask(request: DeepPartial<UpdateTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateTaskResponse>;
    deleteTask(request: DeepPartial<DeleteTaskRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteTaskResponse>;
    deleteFile(request: DeepPartial<DeleteFileRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteFileResponse>;
    listFilesWUP(request: DeepPartial<ListFilesWUPRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFilesWUPResponse>;
    uploadFileWUP(request: DeepPartial<UploadFileWUPRequest>, options?: CallOptions & CallOptionsExt): Promise<UploadFileWUPResponse>;
    updateFileMetadataWUP(request: DeepPartial<UpdateFileMetadataWUPRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateFileMetadataWUPResponse>;
    listFilesCTR(request: DeepPartial<ListFilesCTRRequest>, options?: CallOptions & CallOptionsExt): Promise<ListFilesCTRResponse>;
    uploadFileCTR(request: DeepPartial<UploadFileCTRRequest>, options?: CallOptions & CallOptionsExt): Promise<UploadFileCTRResponse>;
    updateFileMetadataCTR(request: DeepPartial<UpdateFileMetadataCTRRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateFileMetadataCTRResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
