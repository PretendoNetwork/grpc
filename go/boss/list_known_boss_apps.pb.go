// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        (unknown)
// source: boss/list_known_boss_apps.proto

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

type BOSSApp struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	BossAppId   string   `protobuf:"bytes,1,opt,name=boss_app_id,json=bossAppId,proto3" json:"boss_app_id,omitempty"`
	TitleId     string   `protobuf:"bytes,2,opt,name=title_id,json=titleId,proto3" json:"title_id,omitempty"`
	TitleRegion string   `protobuf:"bytes,3,opt,name=title_region,json=titleRegion,proto3" json:"title_region,omitempty"`
	Name        string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Tasks       []string `protobuf:"bytes,5,rep,name=tasks,proto3" json:"tasks,omitempty"`
}

func (x *BOSSApp) Reset() {
	*x = BOSSApp{}
	mi := &file_boss_list_known_boss_apps_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *BOSSApp) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*BOSSApp) ProtoMessage() {}

func (x *BOSSApp) ProtoReflect() protoreflect.Message {
	mi := &file_boss_list_known_boss_apps_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use BOSSApp.ProtoReflect.Descriptor instead.
func (*BOSSApp) Descriptor() ([]byte, []int) {
	return file_boss_list_known_boss_apps_proto_rawDescGZIP(), []int{0}
}

func (x *BOSSApp) GetBossAppId() string {
	if x != nil {
		return x.BossAppId
	}
	return ""
}

func (x *BOSSApp) GetTitleId() string {
	if x != nil {
		return x.TitleId
	}
	return ""
}

func (x *BOSSApp) GetTitleRegion() string {
	if x != nil {
		return x.TitleRegion
	}
	return ""
}

func (x *BOSSApp) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *BOSSApp) GetTasks() []string {
	if x != nil {
		return x.Tasks
	}
	return nil
}

type ListKnownBOSSAppsResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Apps []*BOSSApp `protobuf:"bytes,1,rep,name=apps,proto3" json:"apps,omitempty"`
}

func (x *ListKnownBOSSAppsResponse) Reset() {
	*x = ListKnownBOSSAppsResponse{}
	mi := &file_boss_list_known_boss_apps_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ListKnownBOSSAppsResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ListKnownBOSSAppsResponse) ProtoMessage() {}

func (x *ListKnownBOSSAppsResponse) ProtoReflect() protoreflect.Message {
	mi := &file_boss_list_known_boss_apps_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ListKnownBOSSAppsResponse.ProtoReflect.Descriptor instead.
func (*ListKnownBOSSAppsResponse) Descriptor() ([]byte, []int) {
	return file_boss_list_known_boss_apps_proto_rawDescGZIP(), []int{1}
}

func (x *ListKnownBOSSAppsResponse) GetApps() []*BOSSApp {
	if x != nil {
		return x.Apps
	}
	return nil
}

var File_boss_list_known_boss_apps_proto protoreflect.FileDescriptor

var file_boss_list_known_boss_apps_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x62, 0x6f, 0x73, 0x73, 0x2f, 0x6c, 0x69, 0x73, 0x74, 0x5f, 0x6b, 0x6e, 0x6f, 0x77,
	0x6e, 0x5f, 0x62, 0x6f, 0x73, 0x73, 0x5f, 0x61, 0x70, 0x70, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x04, 0x62, 0x6f, 0x73, 0x73, 0x22, 0x91, 0x01, 0x0a, 0x07, 0x42, 0x4f, 0x53, 0x53,
	0x41, 0x70, 0x70, 0x12, 0x1e, 0x0a, 0x0b, 0x62, 0x6f, 0x73, 0x73, 0x5f, 0x61, 0x70, 0x70, 0x5f,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x62, 0x6f, 0x73, 0x73, 0x41, 0x70,
	0x70, 0x49, 0x64, 0x12, 0x19, 0x0a, 0x08, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x5f, 0x69, 0x64, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x49, 0x64, 0x12, 0x21,
	0x0a, 0x0c, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x5f, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x18, 0x03,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x52, 0x65, 0x67, 0x69, 0x6f,
	0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x18, 0x05,
	0x20, 0x03, 0x28, 0x09, 0x52, 0x05, 0x74, 0x61, 0x73, 0x6b, 0x73, 0x22, 0x3e, 0x0a, 0x19, 0x4c,
	0x69, 0x73, 0x74, 0x4b, 0x6e, 0x6f, 0x77, 0x6e, 0x42, 0x4f, 0x53, 0x53, 0x41, 0x70, 0x70, 0x73,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x21, 0x0a, 0x04, 0x61, 0x70, 0x70, 0x73,
	0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0d, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x2e, 0x42, 0x4f,
	0x53, 0x53, 0x41, 0x70, 0x70, 0x52, 0x04, 0x61, 0x70, 0x70, 0x73, 0x42, 0x7b, 0x0a, 0x08, 0x63,
	0x6f, 0x6d, 0x2e, 0x62, 0x6f, 0x73, 0x73, 0x42, 0x16, 0x4c, 0x69, 0x73, 0x74, 0x4b, 0x6e, 0x6f,
	0x77, 0x6e, 0x42, 0x6f, 0x73, 0x73, 0x41, 0x70, 0x70, 0x73, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50,
	0x01, 0x5a, 0x27, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x72,
	0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72,
	0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x62, 0x6f, 0x73, 0x73, 0xa2, 0x02, 0x03, 0x42, 0x58, 0x58,
	0xaa, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0xca, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0xe2, 0x02,
	0x10, 0x42, 0x6f, 0x73, 0x73, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0xea, 0x02, 0x04, 0x42, 0x6f, 0x73, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_boss_list_known_boss_apps_proto_rawDescOnce sync.Once
	file_boss_list_known_boss_apps_proto_rawDescData = file_boss_list_known_boss_apps_proto_rawDesc
)

func file_boss_list_known_boss_apps_proto_rawDescGZIP() []byte {
	file_boss_list_known_boss_apps_proto_rawDescOnce.Do(func() {
		file_boss_list_known_boss_apps_proto_rawDescData = protoimpl.X.CompressGZIP(file_boss_list_known_boss_apps_proto_rawDescData)
	})
	return file_boss_list_known_boss_apps_proto_rawDescData
}

var file_boss_list_known_boss_apps_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_boss_list_known_boss_apps_proto_goTypes = []any{
	(*BOSSApp)(nil),                   // 0: boss.BOSSApp
	(*ListKnownBOSSAppsResponse)(nil), // 1: boss.ListKnownBOSSAppsResponse
}
var file_boss_list_known_boss_apps_proto_depIdxs = []int32{
	0, // 0: boss.ListKnownBOSSAppsResponse.apps:type_name -> boss.BOSSApp
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_boss_list_known_boss_apps_proto_init() }
func file_boss_list_known_boss_apps_proto_init() {
	if File_boss_list_known_boss_apps_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_boss_list_known_boss_apps_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_boss_list_known_boss_apps_proto_goTypes,
		DependencyIndexes: file_boss_list_known_boss_apps_proto_depIdxs,
		MessageInfos:      file_boss_list_known_boss_apps_proto_msgTypes,
	}.Build()
	File_boss_list_known_boss_apps_proto = out.File
	file_boss_list_known_boss_apps_proto_rawDesc = nil
	file_boss_list_known_boss_apps_proto_goTypes = nil
	file_boss_list_known_boss_apps_proto_depIdxs = nil
}