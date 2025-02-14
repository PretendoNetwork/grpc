// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: boss/v2/file.proto

package bossv2

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

type File struct {
	state              protoimpl.MessageState `protogen:"open.v1"`
	Deleted            bool                   `protobuf:"varint,1,opt,name=deleted,proto3" json:"deleted,omitempty"`
	DataId             uint64                 `protobuf:"varint,2,opt,name=data_id,json=dataId,proto3" json:"data_id,omitempty"`
	TaskId             string                 `protobuf:"bytes,3,opt,name=task_id,json=taskId,proto3" json:"task_id,omitempty"`
	BossAppId          string                 `protobuf:"bytes,4,opt,name=boss_app_id,json=bossAppId,proto3" json:"boss_app_id,omitempty"`
	SupportedCountries []string               `protobuf:"bytes,5,rep,name=supported_countries,json=supportedCountries,proto3" json:"supported_countries,omitempty"`
	SupportedLanguages []string               `protobuf:"bytes,6,rep,name=supported_languages,json=supportedLanguages,proto3" json:"supported_languages,omitempty"`
	Password           string                 `protobuf:"bytes,7,opt,name=password,proto3" json:"password,omitempty"`
	Attribute1         string                 `protobuf:"bytes,8,opt,name=attribute1,proto3" json:"attribute1,omitempty"`
	Attribute2         string                 `protobuf:"bytes,9,opt,name=attribute2,proto3" json:"attribute2,omitempty"`
	Attribute3         string                 `protobuf:"bytes,10,opt,name=attribute3,proto3" json:"attribute3,omitempty"`
	CreatorPid         uint32                 `protobuf:"varint,11,opt,name=creator_pid,json=creatorPid,proto3" json:"creator_pid,omitempty"`
	Name               string                 `protobuf:"bytes,12,opt,name=name,proto3" json:"name,omitempty"`
	Type               string                 `protobuf:"bytes,13,opt,name=type,proto3" json:"type,omitempty"`
	Hash               string                 `protobuf:"bytes,14,opt,name=hash,proto3" json:"hash,omitempty"`
	Size               uint64                 `protobuf:"varint,15,opt,name=size,proto3" json:"size,omitempty"`
	NotifyOnNew        []string               `protobuf:"bytes,16,rep,name=notify_on_new,json=notifyOnNew,proto3" json:"notify_on_new,omitempty"`
	NotifyLed          bool                   `protobuf:"varint,17,opt,name=notify_led,json=notifyLed,proto3" json:"notify_led,omitempty"`
	CreatedTimestamp   uint64                 `protobuf:"varint,18,opt,name=created_timestamp,json=createdTimestamp,proto3" json:"created_timestamp,omitempty"`
	UpdatedTimestamp   uint64                 `protobuf:"varint,19,opt,name=updated_timestamp,json=updatedTimestamp,proto3" json:"updated_timestamp,omitempty"`
	unknownFields      protoimpl.UnknownFields
	sizeCache          protoimpl.SizeCache
}

func (x *File) Reset() {
	*x = File{}
	mi := &file_boss_v2_file_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *File) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*File) ProtoMessage() {}

func (x *File) ProtoReflect() protoreflect.Message {
	mi := &file_boss_v2_file_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use File.ProtoReflect.Descriptor instead.
func (*File) Descriptor() ([]byte, []int) {
	return file_boss_v2_file_proto_rawDescGZIP(), []int{0}
}

func (x *File) GetDeleted() bool {
	if x != nil {
		return x.Deleted
	}
	return false
}

func (x *File) GetDataId() uint64 {
	if x != nil {
		return x.DataId
	}
	return 0
}

func (x *File) GetTaskId() string {
	if x != nil {
		return x.TaskId
	}
	return ""
}

func (x *File) GetBossAppId() string {
	if x != nil {
		return x.BossAppId
	}
	return ""
}

func (x *File) GetSupportedCountries() []string {
	if x != nil {
		return x.SupportedCountries
	}
	return nil
}

func (x *File) GetSupportedLanguages() []string {
	if x != nil {
		return x.SupportedLanguages
	}
	return nil
}

func (x *File) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *File) GetAttribute1() string {
	if x != nil {
		return x.Attribute1
	}
	return ""
}

func (x *File) GetAttribute2() string {
	if x != nil {
		return x.Attribute2
	}
	return ""
}

func (x *File) GetAttribute3() string {
	if x != nil {
		return x.Attribute3
	}
	return ""
}

func (x *File) GetCreatorPid() uint32 {
	if x != nil {
		return x.CreatorPid
	}
	return 0
}

func (x *File) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *File) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *File) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *File) GetSize() uint64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *File) GetNotifyOnNew() []string {
	if x != nil {
		return x.NotifyOnNew
	}
	return nil
}

func (x *File) GetNotifyLed() bool {
	if x != nil {
		return x.NotifyLed
	}
	return false
}

func (x *File) GetCreatedTimestamp() uint64 {
	if x != nil {
		return x.CreatedTimestamp
	}
	return 0
}

func (x *File) GetUpdatedTimestamp() uint64 {
	if x != nil {
		return x.UpdatedTimestamp
	}
	return 0
}

var File_boss_v2_file_proto protoreflect.FileDescriptor

var file_boss_v2_file_proto_rawDesc = []byte{
	0x0a, 0x12, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x22, 0xde, 0x04,
	0x0a, 0x04, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64,
	0x12, 0x17, 0x0a, 0x07, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x04, 0x52, 0x06, 0x64, 0x61, 0x74, 0x61, 0x49, 0x64, 0x12, 0x17, 0x0a, 0x07, 0x74, 0x61, 0x73,
	0x6b, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x74, 0x61, 0x73, 0x6b,
	0x49, 0x64, 0x12, 0x1e, 0x0a, 0x0b, 0x62, 0x6f, 0x73, 0x73, 0x5f, 0x61, 0x70, 0x70, 0x5f, 0x69,
	0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x62, 0x6f, 0x73, 0x73, 0x41, 0x70, 0x70,
	0x49, 0x64, 0x12, 0x2f, 0x0a, 0x13, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x5f,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x69, 0x65, 0x73, 0x18, 0x05, 0x20, 0x03, 0x28, 0x09, 0x52,
	0x12, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x72,
	0x69, 0x65, 0x73, 0x12, 0x2f, 0x0a, 0x13, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64,
	0x5f, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x73, 0x18, 0x06, 0x20, 0x03, 0x28, 0x09,
	0x52, 0x12, 0x73, 0x75, 0x70, 0x70, 0x6f, 0x72, 0x74, 0x65, 0x64, 0x4c, 0x61, 0x6e, 0x67, 0x75,
	0x61, 0x67, 0x65, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x12, 0x1e, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x31, 0x18, 0x08,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x31,
	0x12, 0x1e, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x32, 0x18, 0x09,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x32,
	0x12, 0x1e, 0x0a, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x33, 0x18, 0x0a,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61, 0x74, 0x74, 0x72, 0x69, 0x62, 0x75, 0x74, 0x65, 0x33,
	0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x5f, 0x70, 0x69, 0x64, 0x18,
	0x0b, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x6f, 0x72, 0x50, 0x69,
	0x64, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x0d, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73,
	0x68, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x12, 0x0a,
	0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x04, 0x52, 0x04, 0x73, 0x69, 0x7a,
	0x65, 0x12, 0x22, 0x0a, 0x0d, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x79, 0x5f, 0x6f, 0x6e, 0x5f, 0x6e,
	0x65, 0x77, 0x18, 0x10, 0x20, 0x03, 0x28, 0x09, 0x52, 0x0b, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x79,
	0x4f, 0x6e, 0x4e, 0x65, 0x77, 0x12, 0x1d, 0x0a, 0x0a, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x79, 0x5f,
	0x6c, 0x65, 0x64, 0x18, 0x11, 0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x6e, 0x6f, 0x74, 0x69, 0x66,
	0x79, 0x4c, 0x65, 0x64, 0x12, 0x2b, 0x0a, 0x11, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f,
	0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x12, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x10, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x12, 0x2b, 0x0a, 0x11, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x18, 0x13, 0x20, 0x01, 0x28, 0x04, 0x52, 0x10, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x64, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42, 0x88,
	0x01, 0x0a, 0x0b, 0x63, 0x6f, 0x6d, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x76, 0x32, 0x42, 0x09,
	0x46, 0x69, 0x6c, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x31, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f,
	0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f,
	0x62, 0x6f, 0x73, 0x73, 0x2f, 0x76, 0x32, 0x3b, 0x62, 0x6f, 0x73, 0x73, 0x76, 0x32, 0xa2, 0x02,
	0x03, 0x42, 0x58, 0x58, 0xaa, 0x02, 0x07, 0x42, 0x6f, 0x73, 0x73, 0x2e, 0x56, 0x32, 0xca, 0x02,
	0x07, 0x42, 0x6f, 0x73, 0x73, 0x5c, 0x56, 0x32, 0xe2, 0x02, 0x13, 0x42, 0x6f, 0x73, 0x73, 0x5c,
	0x56, 0x32, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x08, 0x42, 0x6f, 0x73, 0x73, 0x3a, 0x3a, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_boss_v2_file_proto_rawDescOnce sync.Once
	file_boss_v2_file_proto_rawDescData = file_boss_v2_file_proto_rawDesc
)

func file_boss_v2_file_proto_rawDescGZIP() []byte {
	file_boss_v2_file_proto_rawDescOnce.Do(func() {
		file_boss_v2_file_proto_rawDescData = protoimpl.X.CompressGZIP(file_boss_v2_file_proto_rawDescData)
	})
	return file_boss_v2_file_proto_rawDescData
}

var file_boss_v2_file_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_boss_v2_file_proto_goTypes = []any{
	(*File)(nil), // 0: boss.v2.File
}
var file_boss_v2_file_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_boss_v2_file_proto_init() }
func file_boss_v2_file_proto_init() {
	if File_boss_v2_file_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_boss_v2_file_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_boss_v2_file_proto_goTypes,
		DependencyIndexes: file_boss_v2_file_proto_depIdxs,
		MessageInfos:      file_boss_v2_file_proto_msgTypes,
	}.Build()
	File_boss_v2_file_proto = out.File
	file_boss_v2_file_proto_rawDesc = nil
	file_boss_v2_file_proto_goTypes = nil
	file_boss_v2_file_proto_depIdxs = nil
}
