// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: boss/list_files.proto

package boss

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ListFilesRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	TaskId        string                 `protobuf:"bytes,1,opt,name=task_id,json=taskId,proto3" json:"task_id,omitempty"`
	BossAppId     string                 `protobuf:"bytes,2,opt,name=boss_app_id,json=bossAppId,proto3" json:"boss_app_id,omitempty"`
	Country       *string                `protobuf:"bytes,3,opt,name=country,proto3,oneof" json:"country,omitempty"`
	Language      *string                `protobuf:"bytes,4,opt,name=language,proto3,oneof" json:"language,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ListFilesRequest) Reset() {
	*x = ListFilesRequest{}
	mi := &file_boss_list_files_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListFilesRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListFilesRequest) ProtoMessage() {}

func (x *ListFilesRequest) ProtoReflect() protoreflect.Message {
	mi := &file_boss_list_files_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListFilesRequest.ProtoReflect.Descriptor instead.
func (*ListFilesRequest) Descriptor() ([]byte, []int) {
	return file_boss_list_files_proto_rawDescGZIP(), []int{0}
}

func (x *ListFilesRequest) GetTaskId() string {
	if x != nil {
		return x.TaskId
	}
	return ""
}

func (x *ListFilesRequest) GetBossAppId() string {
	if x != nil {
		return x.BossAppId
	}
	return ""
}

func (x *ListFilesRequest) GetCountry() string {
	if x != nil && x.Country != nil {
		return *x.Country
	}
	return ""
}

func (x *ListFilesRequest) GetLanguage() string {
	if x != nil && x.Language != nil {
		return *x.Language
	}
	return ""
}

type ListFilesResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Files         []*File                `protobuf:"bytes,1,rep,name=files,proto3" json:"files,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ListFilesResponse) Reset() {
	*x = ListFilesResponse{}
	mi := &file_boss_list_files_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListFilesResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListFilesResponse) ProtoMessage() {}

func (x *ListFilesResponse) ProtoReflect() protoreflect.Message {
	mi := &file_boss_list_files_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListFilesResponse.ProtoReflect.Descriptor instead.
func (*ListFilesResponse) Descriptor() ([]byte, []int) {
	return file_boss_list_files_proto_rawDescGZIP(), []int{1}
}

func (x *ListFilesResponse) GetFiles() []*File {
	if x != nil {
		return x.Files
	}
	return nil
}

var File_boss_list_files_proto protoreflect.FileDescriptor

var file_boss_list_files_proto_rawDesc = []byte{
	0x0a, 0x15, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x6c, 0x69, 0x73, 0x74, 0x5f, 0x66, 0x69, 0x6c, 0x65,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x62, 0x6f, 0x73, 0x73, 0x1a, 0x0f, 0x62,
	0x6f, 0x73, 0x73, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa4,
	0x01, 0x0a, 0x10, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x73, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x74, 0x61, 0x73, 0x6b, 0x5f, 0x69, 0x64, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x61, 0x73, 0x6b, 0x49, 0x64, 0x12, 0x1e, 0x0a, 0x0b,
	0x62, 0x6f, 0x73, 0x73, 0x5f, 0x61, 0x70, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x62, 0x6f, 0x73, 0x73, 0x41, 0x70, 0x70, 0x49, 0x64, 0x12, 0x1d, 0x0a, 0x07,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x48, 0x00, 0x52,
	0x07, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x88, 0x01, 0x01, 0x12, 0x1f, 0x0a, 0x08, 0x6c,
	0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52,
	0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x88, 0x01, 0x01, 0x42, 0x0a, 0x0a, 0x08,
	0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x6c, 0x61, 0x6e,
	0x67, 0x75, 0x61, 0x67, 0x65, 0x22, 0x35, 0x0a, 0x11, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x69, 0x6c,
	0x65, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x20, 0x0a, 0x05, 0x66, 0x69,
	0x6c, 0x65, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0a, 0x2e, 0x62, 0x6f, 0x73, 0x73,
	0x2e, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x05, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x42, 0x73, 0x0a, 0x08,
	0x63, 0x6f, 0x6d, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x42, 0x0e, 0x4c, 0x69, 0x73, 0x74, 0x46, 0x69,
	0x6c, 0x65, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68,
	0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e,
	0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x62,
	0x6f, 0x73, 0x73, 0xa2, 0x02, 0x03, 0x42, 0x58, 0x58, 0xaa, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73,
	0xca, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0xe2, 0x02, 0x10, 0x42, 0x6f, 0x73, 0x73, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x04, 0x42, 0x6f, 0x73,
	0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_boss_list_files_proto_rawDescOnce sync.Once
	file_boss_list_files_proto_rawDescData = file_boss_list_files_proto_rawDesc
)

func file_boss_list_files_proto_rawDescGZIP() []byte {
	file_boss_list_files_proto_rawDescOnce.Do(func() {
		file_boss_list_files_proto_rawDescData = protoimpl.X.CompressGZIP(file_boss_list_files_proto_rawDescData)
	})
	return file_boss_list_files_proto_rawDescData
}

var file_boss_list_files_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_boss_list_files_proto_goTypes = []any{
	(*ListFilesRequest)(nil),  // 0: boss.ListFilesRequest
	(*ListFilesResponse)(nil), // 1: boss.ListFilesResponse
	(*File)(nil),              // 2: boss.File
}
var file_boss_list_files_proto_depIdxs = []int32{
	2, // 0: boss.ListFilesResponse.files:type_name -> boss.File
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_boss_list_files_proto_init() }
func file_boss_list_files_proto_init() {
	if File_boss_list_files_proto != nil {
		return
	}
	file_boss_file_proto_init()
	file_boss_list_files_proto_msgTypes[0].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_boss_list_files_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_boss_list_files_proto_goTypes,
		DependencyIndexes: file_boss_list_files_proto_depIdxs,
		MessageInfos:      file_boss_list_files_proto_msgTypes,
	}.Build()
	File_boss_list_files_proto = out.File
	file_boss_list_files_proto_rawDesc = nil
	file_boss_list_files_proto_goTypes = nil
	file_boss_list_files_proto_depIdxs = nil
}
