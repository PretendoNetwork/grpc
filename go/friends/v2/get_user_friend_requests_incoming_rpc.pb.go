// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        (unknown)
// source: friends/v2/get_user_friend_requests_incoming_rpc.proto

package friendsv2

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

type GetUserFriendRequestsIncomingRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Pid uint32 `protobuf:"varint,1,opt,name=pid,proto3" json:"pid,omitempty"`
}

func (x *GetUserFriendRequestsIncomingRequest) Reset() {
	*x = GetUserFriendRequestsIncomingRequest{}
	mi := &file_friends_v2_get_user_friend_requests_incoming_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUserFriendRequestsIncomingRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserFriendRequestsIncomingRequest) ProtoMessage() {}

func (x *GetUserFriendRequestsIncomingRequest) ProtoReflect() protoreflect.Message {
	mi := &file_friends_v2_get_user_friend_requests_incoming_rpc_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUserFriendRequestsIncomingRequest.ProtoReflect.Descriptor instead.
func (*GetUserFriendRequestsIncomingRequest) Descriptor() ([]byte, []int) {
	return file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *GetUserFriendRequestsIncomingRequest) GetPid() uint32 {
	if x != nil {
		return x.Pid
	}
	return 0
}

type GetUserFriendRequestsIncomingResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	FriendRequests []*FriendRequest `protobuf:"bytes,1,rep,name=friend_requests,json=friendRequests,proto3" json:"friend_requests,omitempty"`
}

func (x *GetUserFriendRequestsIncomingResponse) Reset() {
	*x = GetUserFriendRequestsIncomingResponse{}
	mi := &file_friends_v2_get_user_friend_requests_incoming_rpc_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUserFriendRequestsIncomingResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserFriendRequestsIncomingResponse) ProtoMessage() {}

func (x *GetUserFriendRequestsIncomingResponse) ProtoReflect() protoreflect.Message {
	mi := &file_friends_v2_get_user_friend_requests_incoming_rpc_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUserFriendRequestsIncomingResponse.ProtoReflect.Descriptor instead.
func (*GetUserFriendRequestsIncomingResponse) Descriptor() ([]byte, []int) {
	return file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescGZIP(), []int{1}
}

func (x *GetUserFriendRequestsIncomingResponse) GetFriendRequests() []*FriendRequest {
	if x != nil {
		return x.FriendRequests
	}
	return nil
}

var File_friends_v2_get_user_friend_requests_incoming_rpc_proto protoreflect.FileDescriptor

var file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDesc = []byte{
	0x0a, 0x36, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x2f, 0x76, 0x32, 0x2f, 0x67, 0x65, 0x74,
	0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x5f, 0x72, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x73, 0x5f, 0x69, 0x6e, 0x63, 0x6f, 0x6d, 0x69, 0x6e, 0x67, 0x5f, 0x72,
	0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0a, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64,
	0x73, 0x2e, 0x76, 0x32, 0x1a, 0x1f, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x2f, 0x76, 0x32,
	0x2f, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x38, 0x0a, 0x24, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72,
	0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x49, 0x6e,
	0x63, 0x6f, 0x6d, 0x69, 0x6e, 0x67, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a,
	0x03, 0x70, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x03, 0x70, 0x69, 0x64, 0x22,
	0x6b, 0x0a, 0x25, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x69, 0x6e, 0x67,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x42, 0x0a, 0x0f, 0x66, 0x72, 0x69, 0x65,
	0x6e, 0x64, 0x5f, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x18, 0x01, 0x20, 0x03, 0x28,
	0x0b, 0x32, 0x19, 0x2e, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x2e, 0x76, 0x32, 0x2e, 0x46,
	0x72, 0x69, 0x65, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52, 0x0e, 0x66, 0x72,
	0x69, 0x65, 0x6e, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x42, 0xb9, 0x01, 0x0a,
	0x0e, 0x63, 0x6f, 0x6d, 0x2e, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x2e, 0x76, 0x32, 0x42,
	0x25, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x73, 0x49, 0x6e, 0x63, 0x6f, 0x6d, 0x69, 0x6e, 0x67, 0x52, 0x70,
	0x63, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62,
	0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74,
	0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x66, 0x72, 0x69,
	0x65, 0x6e, 0x64, 0x73, 0x2f, 0x76, 0x32, 0x3b, 0x66, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x76,
	0x32, 0xa2, 0x02, 0x03, 0x46, 0x58, 0x58, 0xaa, 0x02, 0x0a, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64,
	0x73, 0x2e, 0x56, 0x32, 0xca, 0x02, 0x0a, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x5c, 0x56,
	0x32, 0xe2, 0x02, 0x16, 0x46, 0x72, 0x69, 0x65, 0x6e, 0x64, 0x73, 0x5c, 0x56, 0x32, 0x5c, 0x47,
	0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0b, 0x46, 0x72, 0x69,
	0x65, 0x6e, 0x64, 0x73, 0x3a, 0x3a, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescOnce sync.Once
	file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescData = file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDesc
)

func file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescGZIP() []byte {
	file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescOnce.Do(func() {
		file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescData)
	})
	return file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDescData
}

var file_friends_v2_get_user_friend_requests_incoming_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_friends_v2_get_user_friend_requests_incoming_rpc_proto_goTypes = []any{
	(*GetUserFriendRequestsIncomingRequest)(nil),  // 0: friends.v2.GetUserFriendRequestsIncomingRequest
	(*GetUserFriendRequestsIncomingResponse)(nil), // 1: friends.v2.GetUserFriendRequestsIncomingResponse
	(*FriendRequest)(nil),                         // 2: friends.v2.FriendRequest
}
var file_friends_v2_get_user_friend_requests_incoming_rpc_proto_depIdxs = []int32{
	2, // 0: friends.v2.GetUserFriendRequestsIncomingResponse.friend_requests:type_name -> friends.v2.FriendRequest
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_friends_v2_get_user_friend_requests_incoming_rpc_proto_init() }
func file_friends_v2_get_user_friend_requests_incoming_rpc_proto_init() {
	if File_friends_v2_get_user_friend_requests_incoming_rpc_proto != nil {
		return
	}
	file_friends_v2_friend_request_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_friends_v2_get_user_friend_requests_incoming_rpc_proto_goTypes,
		DependencyIndexes: file_friends_v2_get_user_friend_requests_incoming_rpc_proto_depIdxs,
		MessageInfos:      file_friends_v2_get_user_friend_requests_incoming_rpc_proto_msgTypes,
	}.Build()
	File_friends_v2_get_user_friend_requests_incoming_rpc_proto = out.File
	file_friends_v2_get_user_friend_requests_incoming_rpc_proto_rawDesc = nil
	file_friends_v2_get_user_friend_requests_incoming_rpc_proto_goTypes = nil
	file_friends_v2_get_user_friend_requests_incoming_rpc_proto_depIdxs = nil
}
