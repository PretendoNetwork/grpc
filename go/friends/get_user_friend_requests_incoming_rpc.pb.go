// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: friends/get_user_friend_requests_incoming_rpc.proto

package friends

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetUserFriendRequestsIncomingRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Pid           uint32                 `protobuf:"varint,1,opt,name=pid,proto3" json:"pid,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetUserFriendRequestsIncomingRequest) Reset() {
	*x = GetUserFriendRequestsIncomingRequest{}
	mi := &file_friends_get_user_friend_requests_incoming_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUserFriendRequestsIncomingRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserFriendRequestsIncomingRequest) ProtoMessage() {}

func (x *GetUserFriendRequestsIncomingRequest) ProtoReflect() protoreflect.Message {
	mi := &file_friends_get_user_friend_requests_incoming_rpc_proto_msgTypes[0]
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
	return file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *GetUserFriendRequestsIncomingRequest) GetPid() uint32 {
	if x != nil {
		return x.Pid
	}
	return 0
}

type GetUserFriendRequestsIncomingResponse struct {
	state          protoimpl.MessageState `protogen:"open.v1"`
	FriendRequests []*FriendRequest       `protobuf:"bytes,1,rep,name=friend_requests,json=friendRequests,proto3" json:"friend_requests,omitempty"`
	unknownFields  protoimpl.UnknownFields
	sizeCache      protoimpl.SizeCache
}

func (x *GetUserFriendRequestsIncomingResponse) Reset() {
	*x = GetUserFriendRequestsIncomingResponse{}
	mi := &file_friends_get_user_friend_requests_incoming_rpc_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUserFriendRequestsIncomingResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserFriendRequestsIncomingResponse) ProtoMessage() {}

func (x *GetUserFriendRequestsIncomingResponse) ProtoReflect() protoreflect.Message {
	mi := &file_friends_get_user_friend_requests_incoming_rpc_proto_msgTypes[1]
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
	return file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescGZIP(), []int{1}
}

func (x *GetUserFriendRequestsIncomingResponse) GetFriendRequests() []*FriendRequest {
	if x != nil {
		return x.FriendRequests
	}
	return nil
}

var File_friends_get_user_friend_requests_incoming_rpc_proto protoreflect.FileDescriptor

const file_friends_get_user_friend_requests_incoming_rpc_proto_rawDesc = "" +
	"\n" +
	"3friends/get_user_friend_requests_incoming_rpc.proto\x12\afriends\x1a\x1cfriends/friend_request.proto\"8\n" +
	"$GetUserFriendRequestsIncomingRequest\x12\x10\n" +
	"\x03pid\x18\x01 \x01(\rR\x03pid\"h\n" +
	"%GetUserFriendRequestsIncomingResponse\x12?\n" +
	"\x0ffriend_requests\x18\x01 \x03(\v2\x16.friends.FriendRequestR\x0efriendRequestsB\x9c\x01\n" +
	"\vcom.friendsB%GetUserFriendRequestsIncomingRpcProtoP\x01Z*github.com/PretendoNetwork/grpc/go/friends\xa2\x02\x03FXX\xaa\x02\aFriends\xca\x02\aFriends\xe2\x02\x13Friends\\GPBMetadata\xea\x02\aFriendsb\x06proto3"

var (
	file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescOnce sync.Once
	file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescData []byte
)

func file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescGZIP() []byte {
	file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescOnce.Do(func() {
		file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_friends_get_user_friend_requests_incoming_rpc_proto_rawDesc), len(file_friends_get_user_friend_requests_incoming_rpc_proto_rawDesc)))
	})
	return file_friends_get_user_friend_requests_incoming_rpc_proto_rawDescData
}

var file_friends_get_user_friend_requests_incoming_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_friends_get_user_friend_requests_incoming_rpc_proto_goTypes = []any{
	(*GetUserFriendRequestsIncomingRequest)(nil),  // 0: friends.GetUserFriendRequestsIncomingRequest
	(*GetUserFriendRequestsIncomingResponse)(nil), // 1: friends.GetUserFriendRequestsIncomingResponse
	(*FriendRequest)(nil),                         // 2: friends.FriendRequest
}
var file_friends_get_user_friend_requests_incoming_rpc_proto_depIdxs = []int32{
	2, // 0: friends.GetUserFriendRequestsIncomingResponse.friend_requests:type_name -> friends.FriendRequest
	1, // [1:1] is the sub-list for method output_type
	1, // [1:1] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_friends_get_user_friend_requests_incoming_rpc_proto_init() }
func file_friends_get_user_friend_requests_incoming_rpc_proto_init() {
	if File_friends_get_user_friend_requests_incoming_rpc_proto != nil {
		return
	}
	file_friends_friend_request_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_friends_get_user_friend_requests_incoming_rpc_proto_rawDesc), len(file_friends_get_user_friend_requests_incoming_rpc_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_friends_get_user_friend_requests_incoming_rpc_proto_goTypes,
		DependencyIndexes: file_friends_get_user_friend_requests_incoming_rpc_proto_depIdxs,
		MessageInfos:      file_friends_get_user_friend_requests_incoming_rpc_proto_msgTypes,
	}.Build()
	File_friends_get_user_friend_requests_incoming_rpc_proto = out.File
	file_friends_get_user_friend_requests_incoming_rpc_proto_goTypes = nil
	file_friends_get_user_friend_requests_incoming_rpc_proto_depIdxs = nil
}
