// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: api/v2/login_rpc.proto

package apiv2

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

type LoginRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	GrantType     string                 `protobuf:"bytes,1,opt,name=grant_type,json=grantType,proto3" json:"grant_type,omitempty"`
	Username      *string                `protobuf:"bytes,2,opt,name=username,proto3,oneof" json:"username,omitempty"`
	Password      *string                `protobuf:"bytes,3,opt,name=password,proto3,oneof" json:"password,omitempty"`
	RefreshToken  *string                `protobuf:"bytes,4,opt,name=refresh_token,json=refreshToken,proto3,oneof" json:"refresh_token,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *LoginRequest) Reset() {
	*x = LoginRequest{}
	mi := &file_api_v2_login_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *LoginRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginRequest) ProtoMessage() {}

func (x *LoginRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v2_login_rpc_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginRequest.ProtoReflect.Descriptor instead.
func (*LoginRequest) Descriptor() ([]byte, []int) {
	return file_api_v2_login_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *LoginRequest) GetGrantType() string {
	if x != nil {
		return x.GrantType
	}
	return ""
}

func (x *LoginRequest) GetUsername() string {
	if x != nil && x.Username != nil {
		return *x.Username
	}
	return ""
}

func (x *LoginRequest) GetPassword() string {
	if x != nil && x.Password != nil {
		return *x.Password
	}
	return ""
}

func (x *LoginRequest) GetRefreshToken() string {
	if x != nil && x.RefreshToken != nil {
		return *x.RefreshToken
	}
	return ""
}

type LoginResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	ExpiresIn     uint32                 `protobuf:"varint,1,opt,name=expires_in,json=expiresIn,proto3" json:"expires_in,omitempty"`
	TokenType     string                 `protobuf:"bytes,2,opt,name=token_type,json=tokenType,proto3" json:"token_type,omitempty"`
	AccessToken   string                 `protobuf:"bytes,3,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	RefreshToken  string                 `protobuf:"bytes,4,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *LoginResponse) Reset() {
	*x = LoginResponse{}
	mi := &file_api_v2_login_rpc_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *LoginResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*LoginResponse) ProtoMessage() {}

func (x *LoginResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v2_login_rpc_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use LoginResponse.ProtoReflect.Descriptor instead.
func (*LoginResponse) Descriptor() ([]byte, []int) {
	return file_api_v2_login_rpc_proto_rawDescGZIP(), []int{1}
}

func (x *LoginResponse) GetExpiresIn() uint32 {
	if x != nil {
		return x.ExpiresIn
	}
	return 0
}

func (x *LoginResponse) GetTokenType() string {
	if x != nil {
		return x.TokenType
	}
	return ""
}

func (x *LoginResponse) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *LoginResponse) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

var File_api_v2_login_rpc_proto protoreflect.FileDescriptor

var file_api_v2_login_rpc_proto_rawDesc = []byte{
	0x0a, 0x16, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f, 0x6c, 0x6f, 0x67, 0x69, 0x6e, 0x5f, 0x72,
	0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32,
	0x22, 0xc5, 0x01, 0x0a, 0x0c, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x67, 0x72, 0x61, 0x6e, 0x74, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x67, 0x72, 0x61, 0x6e, 0x74, 0x54, 0x79, 0x70, 0x65,
	0x12, 0x1f, 0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x09, 0x48, 0x00, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x88, 0x01,
	0x01, 0x12, 0x1f, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x88,
	0x01, 0x01, 0x12, 0x28, 0x0a, 0x0d, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x5f, 0x74, 0x6f,
	0x6b, 0x65, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x48, 0x02, 0x52, 0x0c, 0x72, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x88, 0x01, 0x01, 0x42, 0x0b, 0x0a, 0x09,
	0x5f, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x70, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x42, 0x10, 0x0a, 0x0e, 0x5f, 0x72, 0x65, 0x66, 0x72, 0x65,
	0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x95, 0x01, 0x0a, 0x0d, 0x4c, 0x6f, 0x67,
	0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x65, 0x78,
	0x70, 0x69, 0x72, 0x65, 0x73, 0x5f, 0x69, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x09,
	0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x73, 0x49, 0x6e, 0x12, 0x1d, 0x0a, 0x0a, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x54, 0x79, 0x70, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b,
	0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x72,
	0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0c, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x6f, 0x6b, 0x65, 0x6e,
	0x42, 0x85, 0x01, 0x0a, 0x0a, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x42,
	0x0d, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x70, 0x63, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01,
	0x5a, 0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65,
	0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70,
	0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x3b, 0x61, 0x70, 0x69, 0x76,
	0x32, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x06, 0x41, 0x70, 0x69, 0x2e, 0x56, 0x32,
	0xca, 0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x32, 0xe2, 0x02, 0x12, 0x41, 0x70, 0x69, 0x5c,
	0x56, 0x32, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x07, 0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_v2_login_rpc_proto_rawDescOnce sync.Once
	file_api_v2_login_rpc_proto_rawDescData = file_api_v2_login_rpc_proto_rawDesc
)

func file_api_v2_login_rpc_proto_rawDescGZIP() []byte {
	file_api_v2_login_rpc_proto_rawDescOnce.Do(func() {
		file_api_v2_login_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_v2_login_rpc_proto_rawDescData)
	})
	return file_api_v2_login_rpc_proto_rawDescData
}

var file_api_v2_login_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_api_v2_login_rpc_proto_goTypes = []any{
	(*LoginRequest)(nil),  // 0: api.v2.LoginRequest
	(*LoginResponse)(nil), // 1: api.v2.LoginResponse
}
var file_api_v2_login_rpc_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_api_v2_login_rpc_proto_init() }
func file_api_v2_login_rpc_proto_init() {
	if File_api_v2_login_rpc_proto != nil {
		return
	}
	file_api_v2_login_rpc_proto_msgTypes[0].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v2_login_rpc_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_v2_login_rpc_proto_goTypes,
		DependencyIndexes: file_api_v2_login_rpc_proto_depIdxs,
		MessageInfos:      file_api_v2_login_rpc_proto_msgTypes,
	}.Build()
	File_api_v2_login_rpc_proto = out.File
	file_api_v2_login_rpc_proto_rawDesc = nil
	file_api_v2_login_rpc_proto_goTypes = nil
	file_api_v2_login_rpc_proto_depIdxs = nil
}
