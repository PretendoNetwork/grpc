// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: boss/boss_service.proto

package boss

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
	reflect "reflect"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_boss_boss_service_proto protoreflect.FileDescriptor

const file_boss_boss_service_proto_rawDesc = "" +
	"\n" +
	"\x17boss/boss_service.proto\x12\x04boss\x1a\x16boss/delete_file.proto\x1a\x16boss/delete_task.proto\x1a\x15boss/list_files.proto\x1a\x1fboss/list_known_boss_apps.proto\x1a\x15boss/list_tasks.proto\x1a\x18boss/register_task.proto\x1a\x1fboss/update_file_metadata.proto\x1a\x16boss/update_task.proto\x1a\x16boss/upload_file.proto\x1a\x1bgoogle/protobuf/empty.proto2\xf6\x04\n" +
	"\x04BOSS\x12N\n" +
	"\x11ListKnownBOSSApps\x12\x16.google.protobuf.Empty\x1a\x1f.boss.ListKnownBOSSAppsResponse\"\x00\x12>\n" +
	"\tListTasks\x12\x16.google.protobuf.Empty\x1a\x17.boss.ListTasksResponse\"\x00\x12G\n" +
	"\fRegisterTask\x12\x19.boss.RegisterTaskRequest\x1a\x1a.boss.RegisterTaskResponse\"\x00\x12?\n" +
	"\n" +
	"UpdateTask\x12\x17.boss.UpdateTaskRequest\x1a\x16.google.protobuf.Empty\"\x00\x12?\n" +
	"\n" +
	"DeleteTask\x12\x17.boss.DeleteTaskRequest\x1a\x16.google.protobuf.Empty\"\x00\x12>\n" +
	"\tListFiles\x12\x16.boss.ListFilesRequest\x1a\x17.boss.ListFilesResponse\"\x00\x12A\n" +
	"\n" +
	"UploadFile\x12\x17.boss.UploadFileRequest\x1a\x18.boss.UploadFileResponse\"\x00\x12O\n" +
	"\x12UpdateFileMetadata\x12\x1f.boss.UpdateFileMetadataRequest\x1a\x16.google.protobuf.Empty\"\x00\x12?\n" +
	"\n" +
	"DeleteFile\x12\x17.boss.DeleteFileRequest\x1a\x16.google.protobuf.Empty\"\x00Bu\n" +
	"\bcom.bossB\x10BossServiceProtoP\x01Z'github.com/PretendoNetwork/grpc/go/boss\xa2\x02\x03BXX\xaa\x02\x04Boss\xca\x02\x04Boss\xe2\x02\x10Boss\\GPBMetadata\xea\x02\x04Bossb\x06proto3"

var file_boss_boss_service_proto_goTypes = []any{
	(*emptypb.Empty)(nil),             // 0: google.protobuf.Empty
	(*RegisterTaskRequest)(nil),       // 1: boss.RegisterTaskRequest
	(*UpdateTaskRequest)(nil),         // 2: boss.UpdateTaskRequest
	(*DeleteTaskRequest)(nil),         // 3: boss.DeleteTaskRequest
	(*ListFilesRequest)(nil),          // 4: boss.ListFilesRequest
	(*UploadFileRequest)(nil),         // 5: boss.UploadFileRequest
	(*UpdateFileMetadataRequest)(nil), // 6: boss.UpdateFileMetadataRequest
	(*DeleteFileRequest)(nil),         // 7: boss.DeleteFileRequest
	(*ListKnownBOSSAppsResponse)(nil), // 8: boss.ListKnownBOSSAppsResponse
	(*ListTasksResponse)(nil),         // 9: boss.ListTasksResponse
	(*RegisterTaskResponse)(nil),      // 10: boss.RegisterTaskResponse
	(*ListFilesResponse)(nil),         // 11: boss.ListFilesResponse
	(*UploadFileResponse)(nil),        // 12: boss.UploadFileResponse
}
var file_boss_boss_service_proto_depIdxs = []int32{
	0,  // 0: boss.BOSS.ListKnownBOSSApps:input_type -> google.protobuf.Empty
	0,  // 1: boss.BOSS.ListTasks:input_type -> google.protobuf.Empty
	1,  // 2: boss.BOSS.RegisterTask:input_type -> boss.RegisterTaskRequest
	2,  // 3: boss.BOSS.UpdateTask:input_type -> boss.UpdateTaskRequest
	3,  // 4: boss.BOSS.DeleteTask:input_type -> boss.DeleteTaskRequest
	4,  // 5: boss.BOSS.ListFiles:input_type -> boss.ListFilesRequest
	5,  // 6: boss.BOSS.UploadFile:input_type -> boss.UploadFileRequest
	6,  // 7: boss.BOSS.UpdateFileMetadata:input_type -> boss.UpdateFileMetadataRequest
	7,  // 8: boss.BOSS.DeleteFile:input_type -> boss.DeleteFileRequest
	8,  // 9: boss.BOSS.ListKnownBOSSApps:output_type -> boss.ListKnownBOSSAppsResponse
	9,  // 10: boss.BOSS.ListTasks:output_type -> boss.ListTasksResponse
	10, // 11: boss.BOSS.RegisterTask:output_type -> boss.RegisterTaskResponse
	0,  // 12: boss.BOSS.UpdateTask:output_type -> google.protobuf.Empty
	0,  // 13: boss.BOSS.DeleteTask:output_type -> google.protobuf.Empty
	11, // 14: boss.BOSS.ListFiles:output_type -> boss.ListFilesResponse
	12, // 15: boss.BOSS.UploadFile:output_type -> boss.UploadFileResponse
	0,  // 16: boss.BOSS.UpdateFileMetadata:output_type -> google.protobuf.Empty
	0,  // 17: boss.BOSS.DeleteFile:output_type -> google.protobuf.Empty
	9,  // [9:18] is the sub-list for method output_type
	0,  // [0:9] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_boss_boss_service_proto_init() }
func file_boss_boss_service_proto_init() {
	if File_boss_boss_service_proto != nil {
		return
	}
	file_boss_delete_file_proto_init()
	file_boss_delete_task_proto_init()
	file_boss_list_files_proto_init()
	file_boss_list_known_boss_apps_proto_init()
	file_boss_list_tasks_proto_init()
	file_boss_register_task_proto_init()
	file_boss_update_file_metadata_proto_init()
	file_boss_update_task_proto_init()
	file_boss_upload_file_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_boss_boss_service_proto_rawDesc), len(file_boss_boss_service_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_boss_boss_service_proto_goTypes,
		DependencyIndexes: file_boss_boss_service_proto_depIdxs,
	}.Build()
	File_boss_boss_service_proto = out.File
	file_boss_boss_service_proto_goTypes = nil
	file_boss_boss_service_proto_depIdxs = nil
}
