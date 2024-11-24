"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: boss/v2/boss_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.BossServiceDefinition = exports.protobufPackage = void 0;
const delete_file_1 = require("./delete_file");
const delete_task_1 = require("./delete_task");
const list_files_1 = require("./list_files");
const list_known_boss_apps_1 = require("./list_known_boss_apps");
const list_tasks_1 = require("./list_tasks");
const register_task_1 = require("./register_task");
const update_file_metadata_1 = require("./update_file_metadata");
const update_task_1 = require("./update_task");
const upload_file_1 = require("./upload_file");
exports.protobufPackage = "boss.v2";
exports.BossServiceDefinition = {
    name: "BossService",
    fullName: "boss.v2.BossService",
    methods: {
        listKnownBOSSApps: {
            name: "ListKnownBOSSApps",
            requestType: list_known_boss_apps_1.ListKnownBOSSAppsRequest,
            requestStream: false,
            responseType: list_known_boss_apps_1.ListKnownBOSSAppsResponse,
            responseStream: false,
            options: {},
        },
        listTasks: {
            name: "ListTasks",
            requestType: list_tasks_1.ListTasksRequest,
            requestStream: false,
            responseType: list_tasks_1.ListTasksResponse,
            responseStream: false,
            options: {},
        },
        registerTask: {
            name: "RegisterTask",
            requestType: register_task_1.RegisterTaskRequest,
            requestStream: false,
            responseType: register_task_1.RegisterTaskResponse,
            responseStream: false,
            options: {},
        },
        updateTask: {
            name: "UpdateTask",
            requestType: update_task_1.UpdateTaskRequest,
            requestStream: false,
            responseType: update_task_1.UpdateTaskResponse,
            responseStream: false,
            options: {},
        },
        deleteTask: {
            name: "DeleteTask",
            requestType: delete_task_1.DeleteTaskRequest,
            requestStream: false,
            responseType: delete_task_1.DeleteTaskResponse,
            responseStream: false,
            options: {},
        },
        listFiles: {
            name: "ListFiles",
            requestType: list_files_1.ListFilesRequest,
            requestStream: false,
            responseType: list_files_1.ListFilesResponse,
            responseStream: false,
            options: {},
        },
        uploadFile: {
            name: "UploadFile",
            requestType: upload_file_1.UploadFileRequest,
            requestStream: false,
            responseType: upload_file_1.UploadFileResponse,
            responseStream: false,
            options: {},
        },
        updateFileMetadata: {
            name: "UpdateFileMetadata",
            requestType: update_file_metadata_1.UpdateFileMetadataRequest,
            requestStream: false,
            responseType: update_file_metadata_1.UpdateFileMetadataResponse,
            responseStream: false,
            options: {},
        },
        deleteFile: {
            name: "DeleteFile",
            requestType: delete_file_1.DeleteFileRequest,
            requestStream: false,
            responseType: delete_file_1.DeleteFileResponse,
            responseStream: false,
            options: {},
        },
    },
};
