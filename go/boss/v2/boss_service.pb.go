// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        (unknown)
// source: boss/v2/boss_service.proto

package bossv2

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_boss_v2_boss_service_proto protoreflect.FileDescriptor

var file_boss_v2_boss_service_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x62, 0x6f, 0x73, 0x73, 0x5f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x62, 0x6f,
	0x73, 0x73, 0x2e, 0x76, 0x32, 0x1a, 0x19, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x64,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x19, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x5f, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x62, 0x6f, 0x73,
	0x73, 0x2f, 0x76, 0x32, 0x2f, 0x6c, 0x69, 0x73, 0x74, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x22, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x6c,
	0x69, 0x73, 0x74, 0x5f, 0x6b, 0x6e, 0x6f, 0x77, 0x6e, 0x5f, 0x62, 0x6f, 0x73, 0x73, 0x5f, 0x61,
	0x70, 0x70, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x18, 0x62, 0x6f, 0x73, 0x73, 0x2f,
	0x76, 0x32, 0x2f, 0x6c, 0x69, 0x73, 0x74, 0x5f, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x1b, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x72, 0x65, 0x67,
	0x69, 0x73, 0x74, 0x65, 0x72, 0x5f, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x22, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x5f, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a,
	0x19, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x5f,
	0x66, 0x69, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xcb, 0x05, 0x0a, 0x0b, 0x42,
	0x6f, 0x73, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5c, 0x0a, 0x11, 0x4c, 0x69,
	0x73, 0x74, 0x4b, 0x6e, 0x6f, 0x77, 0x6e, 0x42, 0x4f, 0x53, 0x53, 0x41, 0x70, 0x70, 0x73, 0x12,
	0x21, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x4b, 0x6e,
	0x6f, 0x77, 0x6e, 0x42, 0x4f, 0x53, 0x53, 0x41, 0x70, 0x70, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x22, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x69, 0x73,
	0x74, 0x4b, 0x6e, 0x6f, 0x77, 0x6e, 0x42, 0x4f, 0x53, 0x53, 0x41, 0x70, 0x70, 0x73, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x44, 0x0a, 0x09, 0x4c, 0x69, 0x73, 0x74,
	0x54, 0x61, 0x73, 0x6b, 0x73, 0x12, 0x19, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e,
	0x4c, 0x69, 0x73, 0x74, 0x54, 0x61, 0x73, 0x6b, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1a, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x54,
	0x61, 0x73, 0x6b, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4d,
	0x0a, 0x0c, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x54, 0x61, 0x73, 0x6b, 0x12, 0x1c,
	0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65,
	0x72, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e, 0x62,
	0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x54,
	0x61, 0x73, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x47, 0x0a,
	0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x12, 0x1a, 0x2e, 0x62, 0x6f,
	0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x61, 0x73, 0x6b,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76,
	0x32, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x47, 0x0a, 0x0a, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x54, 0x61, 0x73, 0x6b, 0x12, 0x1a, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x44,
	0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1b, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x44, 0x0a, 0x09, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x12, 0x19, 0x2e, 0x62,
	0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76,
	0x32, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x47, 0x0a, 0x0a, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x46,
	0x69, 0x6c, 0x65, 0x12, 0x1a, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x55, 0x70,
	0x6c, 0x6f, 0x61, 0x64, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x1b, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64,
	0x46, 0x69, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5f,
	0x0a, 0x12, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x4d, 0x65, 0x74, 0x61,
	0x64, 0x61, 0x74, 0x61, 0x12, 0x22, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e,
	0x76, 0x32, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x4d, 0x65, 0x74,
	0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x47, 0x0a, 0x0a, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x1a, 0x2e,
	0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x46, 0x69,
	0x6c, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x62, 0x6f, 0x73, 0x73,
	0x2e, 0x76, 0x32, 0x2e, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x8f, 0x01, 0x0a, 0x0b, 0x63, 0x6f, 0x6d,
	0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x42, 0x10, 0x42, 0x6f, 0x73, 0x73, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x31, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64,
	0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f,
	0x2f, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x3b, 0x62, 0x6f, 0x73, 0x73, 0x76, 0x32, 0xa2,
	0x02, 0x03, 0x42, 0x58, 0x58, 0xaa, 0x02, 0x07, 0x42, 0x6f, 0x73, 0x73, 0x2e, 0x56, 0x32, 0xca,
	0x02, 0x07, 0x42, 0x6f, 0x73, 0x73, 0x5c, 0x56, 0x32, 0xe2, 0x02, 0x13, 0x42, 0x6f, 0x73, 0x73,
	0x5c, 0x56, 0x32, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea,
	0x02, 0x08, 0x42, 0x6f, 0x73, 0x73, 0x3a, 0x3a, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x33,
}

var file_boss_v2_boss_service_proto_goTypes = []any{
	(*ListKnownBOSSAppsRequest)(nil),   // 0: boss.v2.ListKnownBOSSAppsRequest
	(*ListTasksRequest)(nil),           // 1: boss.v2.ListTasksRequest
	(*RegisterTaskRequest)(nil),        // 2: boss.v2.RegisterTaskRequest
	(*UpdateTaskRequest)(nil),          // 3: boss.v2.UpdateTaskRequest
	(*DeleteTaskRequest)(nil),          // 4: boss.v2.DeleteTaskRequest
	(*ListFilesRequest)(nil),           // 5: boss.v2.ListFilesRequest
	(*UploadFileRequest)(nil),          // 6: boss.v2.UploadFileRequest
	(*UpdateFileMetadataRequest)(nil),  // 7: boss.v2.UpdateFileMetadataRequest
	(*DeleteFileRequest)(nil),          // 8: boss.v2.DeleteFileRequest
	(*ListKnownBOSSAppsResponse)(nil),  // 9: boss.v2.ListKnownBOSSAppsResponse
	(*ListTasksResponse)(nil),          // 10: boss.v2.ListTasksResponse
	(*RegisterTaskResponse)(nil),       // 11: boss.v2.RegisterTaskResponse
	(*UpdateTaskResponse)(nil),         // 12: boss.v2.UpdateTaskResponse
	(*DeleteTaskResponse)(nil),         // 13: boss.v2.DeleteTaskResponse
	(*ListFilesResponse)(nil),          // 14: boss.v2.ListFilesResponse
	(*UploadFileResponse)(nil),         // 15: boss.v2.UploadFileResponse
	(*UpdateFileMetadataResponse)(nil), // 16: boss.v2.UpdateFileMetadataResponse
	(*DeleteFileResponse)(nil),         // 17: boss.v2.DeleteFileResponse
}
var file_boss_v2_boss_service_proto_depIdxs = []int32{
	0,  // 0: boss.v2.BossService.ListKnownBOSSApps:input_type -> boss.v2.ListKnownBOSSAppsRequest
	1,  // 1: boss.v2.BossService.ListTasks:input_type -> boss.v2.ListTasksRequest
	2,  // 2: boss.v2.BossService.RegisterTask:input_type -> boss.v2.RegisterTaskRequest
	3,  // 3: boss.v2.BossService.UpdateTask:input_type -> boss.v2.UpdateTaskRequest
	4,  // 4: boss.v2.BossService.DeleteTask:input_type -> boss.v2.DeleteTaskRequest
	5,  // 5: boss.v2.BossService.ListFiles:input_type -> boss.v2.ListFilesRequest
	6,  // 6: boss.v2.BossService.UploadFile:input_type -> boss.v2.UploadFileRequest
	7,  // 7: boss.v2.BossService.UpdateFileMetadata:input_type -> boss.v2.UpdateFileMetadataRequest
	8,  // 8: boss.v2.BossService.DeleteFile:input_type -> boss.v2.DeleteFileRequest
	9,  // 9: boss.v2.BossService.ListKnownBOSSApps:output_type -> boss.v2.ListKnownBOSSAppsResponse
	10, // 10: boss.v2.BossService.ListTasks:output_type -> boss.v2.ListTasksResponse
	11, // 11: boss.v2.BossService.RegisterTask:output_type -> boss.v2.RegisterTaskResponse
	12, // 12: boss.v2.BossService.UpdateTask:output_type -> boss.v2.UpdateTaskResponse
	13, // 13: boss.v2.BossService.DeleteTask:output_type -> boss.v2.DeleteTaskResponse
	14, // 14: boss.v2.BossService.ListFiles:output_type -> boss.v2.ListFilesResponse
	15, // 15: boss.v2.BossService.UploadFile:output_type -> boss.v2.UploadFileResponse
	16, // 16: boss.v2.BossService.UpdateFileMetadata:output_type -> boss.v2.UpdateFileMetadataResponse
	17, // 17: boss.v2.BossService.DeleteFile:output_type -> boss.v2.DeleteFileResponse
	9,  // [9:18] is the sub-list for method output_type
	0,  // [0:9] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_boss_v2_boss_service_proto_init() }
func file_boss_v2_boss_service_proto_init() {
	if File_boss_v2_boss_service_proto != nil {
		return
	}
	file_boss_v2_delete_file_proto_init()
	file_boss_v2_delete_task_proto_init()
	file_boss_v2_list_files_proto_init()
	file_boss_v2_list_known_boss_apps_proto_init()
	file_boss_v2_list_tasks_proto_init()
	file_boss_v2_register_task_proto_init()
	file_boss_v2_update_file_metadata_proto_init()
	file_boss_v2_update_task_proto_init()
	file_boss_v2_upload_file_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_boss_v2_boss_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_boss_v2_boss_service_proto_goTypes,
		DependencyIndexes: file_boss_v2_boss_service_proto_depIdxs,
	}.Build()
	File_boss_v2_boss_service_proto = out.File
	file_boss_v2_boss_service_proto_rawDesc = nil
	file_boss_v2_boss_service_proto_goTypes = nil
	file_boss_v2_boss_service_proto_depIdxs = nil
}
