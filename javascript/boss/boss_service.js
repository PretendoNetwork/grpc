/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/boss_service.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BOSS = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "boss/boss_service.proto" (package "boss", syntax proto3)
// tslint:disable
// @ts-nocheck
const delete_file_1 = require("./delete_file");
const update_file_metadata_1 = require("./update_file_metadata");
const upload_file_1 = require("./upload_file");
const upload_file_2 = require("./upload_file");
const list_files_1 = require("./list_files");
const list_files_2 = require("./list_files");
const delete_task_1 = require("./delete_task");
const update_task_1 = require("./update_task");
const register_task_1 = require("./register_task");
const register_task_2 = require("./register_task");
const list_tasks_1 = require("./list_tasks");
const list_known_boss_apps_1 = require("./list_known_boss_apps");
const empty_1 = require("../google/protobuf/empty");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated ServiceType for protobuf service boss.BOSS
 */
exports.BOSS = new runtime_rpc_1.ServiceType("boss.BOSS", [
    { name: "ListKnownBOSSApps", options: {}, I: empty_1.Empty, O: list_known_boss_apps_1.ListKnownBOSSAppsResponse },
    { name: "ListTasks", options: {}, I: empty_1.Empty, O: list_tasks_1.ListTasksResponse },
    { name: "RegisterTask", options: {}, I: register_task_2.RegisterTaskRequest, O: register_task_1.RegisterTaskResponse },
    { name: "UpdateTask", options: {}, I: update_task_1.UpdateTaskRequest, O: empty_1.Empty },
    { name: "DeleteTask", options: {}, I: delete_task_1.DeleteTaskRequest, O: empty_1.Empty },
    { name: "ListFiles", options: {}, I: list_files_2.ListFilesRequest, O: list_files_1.ListFilesResponse },
    { name: "UploadFile", options: {}, I: upload_file_2.UploadFileRequest, O: upload_file_1.UploadFileResponse },
    { name: "UpdateFileMetadata", options: {}, I: update_file_metadata_1.UpdateFileMetadataRequest, O: empty_1.Empty },
    { name: "DeleteFile", options: {}, I: delete_file_1.DeleteFileRequest, O: empty_1.Empty }
]);
