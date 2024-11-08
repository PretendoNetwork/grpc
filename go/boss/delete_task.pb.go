// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        (unknown)
// source: boss/delete_task.proto

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

type DeleteTaskRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	BossAppId string `protobuf:"bytes,2,opt,name=boss_app_id,json=bossAppId,proto3" json:"boss_app_id,omitempty"`
}

func (x *DeleteTaskRequest) Reset() {
	*x = DeleteTaskRequest{}
	mi := &file_boss_delete_task_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DeleteTaskRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeleteTaskRequest) ProtoMessage() {}

func (x *DeleteTaskRequest) ProtoReflect() protoreflect.Message {
	mi := &file_boss_delete_task_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeleteTaskRequest.ProtoReflect.Descriptor instead.
func (*DeleteTaskRequest) Descriptor() ([]byte, []int) {
	return file_boss_delete_task_proto_rawDescGZIP(), []int{0}
}

func (x *DeleteTaskRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *DeleteTaskRequest) GetBossAppId() string {
	if x != nil {
		return x.BossAppId
	}
	return ""
}

var File_boss_delete_task_proto protoreflect.FileDescriptor

var file_boss_delete_task_proto_rawDesc = []byte{
	0x0a, 0x16, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x5f, 0x74, 0x61,
	0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x04, 0x62, 0x6f, 0x73, 0x73, 0x22, 0x43,
	0x0a, 0x11, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x1e, 0x0a, 0x0b, 0x62, 0x6f, 0x73, 0x73, 0x5f, 0x61, 0x70, 0x70, 0x5f,
	0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x62, 0x6f, 0x73, 0x73, 0x41, 0x70,
	0x70, 0x49, 0x64, 0x42, 0x74, 0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x42,
	0x0f, 0x44, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x50, 0x72, 0x6f, 0x74, 0x6f,
	0x50, 0x01, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70,
	0x72, 0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67,
	0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x62, 0x6f, 0x73, 0x73, 0xa2, 0x02, 0x03, 0x42, 0x58,
	0x58, 0xaa, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0xca, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0xe2,
	0x02, 0x10, 0x42, 0x6f, 0x73, 0x73, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0xea, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_boss_delete_task_proto_rawDescOnce sync.Once
	file_boss_delete_task_proto_rawDescData = file_boss_delete_task_proto_rawDesc
)

func file_boss_delete_task_proto_rawDescGZIP() []byte {
	file_boss_delete_task_proto_rawDescOnce.Do(func() {
		file_boss_delete_task_proto_rawDescData = protoimpl.X.CompressGZIP(file_boss_delete_task_proto_rawDescData)
	})
	return file_boss_delete_task_proto_rawDescData
}

var file_boss_delete_task_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_boss_delete_task_proto_goTypes = []any{
	(*DeleteTaskRequest)(nil), // 0: boss.DeleteTaskRequest
}
var file_boss_delete_task_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_boss_delete_task_proto_init() }
func file_boss_delete_task_proto_init() {
	if File_boss_delete_task_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_boss_delete_task_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_boss_delete_task_proto_goTypes,
		DependencyIndexes: file_boss_delete_task_proto_depIdxs,
		MessageInfos:      file_boss_delete_task_proto_msgTypes,
	}.Build()
	File_boss_delete_task_proto = out.File
	file_boss_delete_task_proto_rawDesc = nil
	file_boss_delete_task_proto_goTypes = nil
	file_boss_delete_task_proto_depIdxs = nil
}
