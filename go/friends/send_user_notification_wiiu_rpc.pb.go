// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: friends/send_user_notification_wiiu_rpc.proto

package friends

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

type SendUserNotificationWiiURequest struct {
	state            protoimpl.MessageState `protogen:"open.v1"`
	Pid              uint32                 `protobuf:"varint,1,opt,name=pid,proto3" json:"pid,omitempty"`
	NotificationData []byte                 `protobuf:"bytes,2,opt,name=notification_data,json=notificationData,proto3" json:"notification_data,omitempty"`
	unknownFields    protoimpl.UnknownFields
	sizeCache        protoimpl.SizeCache
}

func (x *SendUserNotificationWiiURequest) Reset() {
	*x = SendUserNotificationWiiURequest{}
	mi := &file_friends_send_user_notification_wiiu_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SendUserNotificationWiiURequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SendUserNotificationWiiURequest) ProtoMessage() {}

func (x *SendUserNotificationWiiURequest) ProtoReflect() protoreflect.Message {
	mi := &file_friends_send_user_notification_wiiu_rpc_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SendUserNotificationWiiURequest.ProtoReflect.Descriptor instead.
func (*SendUserNotificationWiiURequest) Descriptor() ([]byte, []int) {
	return file_friends_send_user_notification_wiiu_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *SendUserNotificationWiiURequest) GetPid() uint32 {
	if x != nil {
		return x.Pid
	}
	return 0
}

func (x *SendUserNotificationWiiURequest) GetNotificationData() []byte {
	if x != nil {
		return x.NotificationData
	}
	return nil
}

var File_friends_send_user_notification_wiiu_rpc_proto protoreflect.FileDescriptor

var file_friends_send_user_notification_wiiu_rpc_proto_rawDesc = []byte{
	0x0a, 0x2d, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x2f, 0x73, 0x65, 0x6e, 0x64, 0x5f, 0x75,
	0x73, 0x65, 0x72, 0x5f, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x77, 0x69, 0x69, 0x75, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x07, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x22, 0x60, 0x0a, 0x1f, 0x53, 0x65, 0x6e, 0x64,
	0x55, 0x73, 0x65, 0x72, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x57, 0x69, 0x69, 0x55, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x70,
	0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x03, 0x70, 0x69, 0x64, 0x12, 0x2b, 0x0a,
	0x11, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0c, 0x52, 0x10, 0x6e, 0x6f, 0x74, 0x69, 0x66, 0x69,
	0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x42, 0x97, 0x01, 0x0a, 0x0b, 0x63,
	0x6f, 0x6d, 0x2e, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x42, 0x20, 0x53, 0x65, 0x6e, 0x64,
	0x55, 0x73, 0x65, 0x72, 0x4e, 0x6f, 0x74, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x57, 0x69, 0x69, 0x75, 0x52, 0x70, 0x63, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2a,
	0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65,
	0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f,
	0x67, 0x6f, 0x2f, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0xa2, 0x02, 0x03, 0x46, 0x58, 0x58,
	0xaa, 0x02, 0x07, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0xca, 0x02, 0x07, 0x46, 0x72, 0x69,
	0x65, 0x6e, 0x64, 0x73, 0xe2, 0x02, 0x13, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x46, 0x72, 0x69,
	0x65, 0x6e, 0x64, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_friends_send_user_notification_wiiu_rpc_proto_rawDescOnce sync.Once
	file_friends_send_user_notification_wiiu_rpc_proto_rawDescData = file_friends_send_user_notification_wiiu_rpc_proto_rawDesc
)

func file_friends_send_user_notification_wiiu_rpc_proto_rawDescGZIP() []byte {
	file_friends_send_user_notification_wiiu_rpc_proto_rawDescOnce.Do(func() {
		file_friends_send_user_notification_wiiu_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(file_friends_send_user_notification_wiiu_rpc_proto_rawDescData)
	})
	return file_friends_send_user_notification_wiiu_rpc_proto_rawDescData
}

var file_friends_send_user_notification_wiiu_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_friends_send_user_notification_wiiu_rpc_proto_goTypes = []any{
	(*SendUserNotificationWiiURequest)(nil), // 0: friends.SendUserNotificationWiiURequest
}
var file_friends_send_user_notification_wiiu_rpc_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_friends_send_user_notification_wiiu_rpc_proto_init() }
func file_friends_send_user_notification_wiiu_rpc_proto_init() {
	if File_friends_send_user_notification_wiiu_rpc_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_friends_send_user_notification_wiiu_rpc_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_friends_send_user_notification_wiiu_rpc_proto_goTypes,
		DependencyIndexes: file_friends_send_user_notification_wiiu_rpc_proto_depIdxs,
		MessageInfos:      file_friends_send_user_notification_wiiu_rpc_proto_msgTypes,
	}.Build()
	File_friends_send_user_notification_wiiu_rpc_proto = out.File
	file_friends_send_user_notification_wiiu_rpc_proto_rawDesc = nil
	file_friends_send_user_notification_wiiu_rpc_proto_goTypes = nil
	file_friends_send_user_notification_wiiu_rpc_proto_depIdxs = nil
}
