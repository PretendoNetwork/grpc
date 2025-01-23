// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: boss/task.proto

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

type Task struct {
	state            protoimpl.MessageState `protogen:"open.v1"`
	Deleted          bool                   `protobuf:"varint,1,opt,name=deleted,proto3" json:"deleted,omitempty"`
	Id               string                 `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
	InGameId         string                 `protobuf:"bytes,3,opt,name=in_game_id,json=inGameId,proto3" json:"in_game_id,omitempty"`
	BossAppId        string                 `protobuf:"bytes,4,opt,name=boss_app_id,json=bossAppId,proto3" json:"boss_app_id,omitempty"`
	CreatorPid       uint32                 `protobuf:"varint,5,opt,name=creator_pid,json=creatorPid,proto3" json:"creator_pid,omitempty"`
	Status           string                 `protobuf:"bytes,6,opt,name=status,proto3" json:"status,omitempty"`
	TitleId          string                 `protobuf:"bytes,7,opt,name=title_id,json=titleId,proto3" json:"title_id,omitempty"`
	Description      string                 `protobuf:"bytes,8,opt,name=description,proto3" json:"description,omitempty"`
	CreatedTimestamp uint64                 `protobuf:"varint,9,opt,name=created_timestamp,json=createdTimestamp,proto3" json:"created_timestamp,omitempty"`
	UpdatedTimestamp uint64                 `protobuf:"varint,10,opt,name=updated_timestamp,json=updatedTimestamp,proto3" json:"updated_timestamp,omitempty"`
	unknownFields    protoimpl.UnknownFields
	sizeCache        protoimpl.SizeCache
}

func (x *Task) Reset() {
	*x = Task{}
	mi := &file_boss_task_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *Task) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Task) ProtoMessage() {}

func (x *Task) ProtoReflect() protoreflect.Message {
	mi := &file_boss_task_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Task.ProtoReflect.Descriptor instead.
func (*Task) Descriptor() ([]byte, []int) {
	return file_boss_task_proto_rawDescGZIP(), []int{0}
}

func (x *Task) GetDeleted() bool {
	if x != nil {
		return x.Deleted
	}
	return false
}

func (x *Task) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Task) GetInGameId() string {
	if x != nil {
		return x.InGameId
	}
	return ""
}

func (x *Task) GetBossAppId() string {
	if x != nil {
		return x.BossAppId
	}
	return ""
}

func (x *Task) GetCreatorPid() uint32 {
	if x != nil {
		return x.CreatorPid
	}
	return 0
}

func (x *Task) GetStatus() string {
	if x != nil {
		return x.Status
	}
	return ""
}

func (x *Task) GetTitleId() string {
	if x != nil {
		return x.TitleId
	}
	return ""
}

func (x *Task) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *Task) GetCreatedTimestamp() uint64 {
	if x != nil {
		return x.CreatedTimestamp
	}
	return 0
}

func (x *Task) GetUpdatedTimestamp() uint64 {
	if x != nil {
		return x.UpdatedTimestamp
	}
	return 0
}

var File_boss_task_proto protoreflect.FileDescriptor

var file_boss_task_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x62, 0x6f, 0x73, 0x73, 0x22, 0xbe, 0x02, 0x0a, 0x04, 0x54, 0x61, 0x73, 0x6b,
	0x12, 0x18, 0x0a, 0x07, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x07, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x12, 0x1c, 0x0a, 0x0a, 0x69, 0x6e,
	0x5f, 0x67, 0x61, 0x6d, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x69, 0x6e, 0x47, 0x61, 0x6d, 0x65, 0x49, 0x64, 0x12, 0x1e, 0x0a, 0x0b, 0x62, 0x6f, 0x73, 0x73,
	0x5f, 0x61, 0x70, 0x70, 0x5f, 0x69, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x62,
	0x6f, 0x73, 0x73, 0x41, 0x70, 0x70, 0x49, 0x64, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x6f, 0x72, 0x5f, 0x70, 0x69, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0a, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x50, 0x69, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x12, 0x19, 0x0a, 0x08, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x49, 0x64, 0x12, 0x20, 0x0a, 0x0b,
	0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x08, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x2b,
	0x0a, 0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x18, 0x09, 0x20, 0x01, 0x28, 0x04, 0x52, 0x10, 0x63, 0x72, 0x65, 0x61, 0x74,
	0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x12, 0x2b, 0x0a, 0x11, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70,
	0x18, 0x0a, 0x20, 0x01, 0x28, 0x04, 0x52, 0x10, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x54,
	0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x6e, 0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x2e,
	0x62, 0x6f, 0x73, 0x73, 0x42, 0x09, 0x54, 0x61, 0x73, 0x6b, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72,
	0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72,
	0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x62, 0x6f, 0x73, 0x73, 0xa2, 0x02, 0x03, 0x42, 0x58, 0x58,
	0xaa, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0xca, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0xe2, 0x02,
	0x10, 0x42, 0x6f, 0x73, 0x73, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0xea, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_boss_task_proto_rawDescOnce sync.Once
	file_boss_task_proto_rawDescData = file_boss_task_proto_rawDesc
)

func file_boss_task_proto_rawDescGZIP() []byte {
	file_boss_task_proto_rawDescOnce.Do(func() {
		file_boss_task_proto_rawDescData = protoimpl.X.CompressGZIP(file_boss_task_proto_rawDescData)
	})
	return file_boss_task_proto_rawDescData
}

var file_boss_task_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_boss_task_proto_goTypes = []any{
	(*Task)(nil), // 0: boss.Task
}
var file_boss_task_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_boss_task_proto_init() }
func file_boss_task_proto_init() {
	if File_boss_task_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_boss_task_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_boss_task_proto_goTypes,
		DependencyIndexes: file_boss_task_proto_depIdxs,
		MessageInfos:      file_boss_task_proto_msgTypes,
	}.Build()
	File_boss_task_proto = out.File
	file_boss_task_proto_rawDesc = nil
	file_boss_task_proto_goTypes = nil
	file_boss_task_proto_depIdxs = nil
}
