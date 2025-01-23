// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: api/forgot_password_rpc.proto

package api

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

type ForgotPasswordRequest struct {
	state                  protoimpl.MessageState `protogen:"open.v1"`
	EmailAddressOrUsername string                 `protobuf:"bytes,1,opt,name=email_address_or_username,json=emailAddressOrUsername,proto3" json:"email_address_or_username,omitempty"`
	unknownFields          protoimpl.UnknownFields
	sizeCache              protoimpl.SizeCache
}

func (x *ForgotPasswordRequest) Reset() {
	*x = ForgotPasswordRequest{}
	mi := &file_api_forgot_password_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ForgotPasswordRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ForgotPasswordRequest) ProtoMessage() {}

func (x *ForgotPasswordRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_forgot_password_rpc_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ForgotPasswordRequest.ProtoReflect.Descriptor instead.
func (*ForgotPasswordRequest) Descriptor() ([]byte, []int) {
	return file_api_forgot_password_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *ForgotPasswordRequest) GetEmailAddressOrUsername() string {
	if x != nil {
		return x.EmailAddressOrUsername
	}
	return ""
}

var File_api_forgot_password_rpc_proto protoreflect.FileDescriptor

var file_api_forgot_password_rpc_proto_rawDesc = []byte{
	0x0a, 0x1d, 0x61, 0x70, 0x69, 0x2f, 0x66, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x5f, 0x70, 0x61, 0x73,
	0x73, 0x77, 0x6f, 0x72, 0x64, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12,
	0x03, 0x61, 0x70, 0x69, 0x22, 0x52, 0x0a, 0x15, 0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x39, 0x0a,
	0x19, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x5f, 0x6f,
	0x72, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x16, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x4f, 0x72,
	0x55, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x42, 0x75, 0x0a, 0x07, 0x63, 0x6f, 0x6d, 0x2e,
	0x61, 0x70, 0x69, 0x42, 0x16, 0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x52, 0x70, 0x63, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x26, 0x67,
	0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e,
	0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67,
	0x6f, 0x2f, 0x61, 0x70, 0x69, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x03, 0x41, 0x70,
	0x69, 0xca, 0x02, 0x03, 0x41, 0x70, 0x69, 0xe2, 0x02, 0x0f, 0x41, 0x70, 0x69, 0x5c, 0x47, 0x50,
	0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x03, 0x41, 0x70, 0x69, 0x62,
	0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_forgot_password_rpc_proto_rawDescOnce sync.Once
	file_api_forgot_password_rpc_proto_rawDescData = file_api_forgot_password_rpc_proto_rawDesc
)

func file_api_forgot_password_rpc_proto_rawDescGZIP() []byte {
	file_api_forgot_password_rpc_proto_rawDescOnce.Do(func() {
		file_api_forgot_password_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_forgot_password_rpc_proto_rawDescData)
	})
	return file_api_forgot_password_rpc_proto_rawDescData
}

var file_api_forgot_password_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_api_forgot_password_rpc_proto_goTypes = []any{
	(*ForgotPasswordRequest)(nil), // 0: api.ForgotPasswordRequest
}
var file_api_forgot_password_rpc_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_api_forgot_password_rpc_proto_init() }
func file_api_forgot_password_rpc_proto_init() {
	if File_api_forgot_password_rpc_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_forgot_password_rpc_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_forgot_password_rpc_proto_goTypes,
		DependencyIndexes: file_api_forgot_password_rpc_proto_depIdxs,
		MessageInfos:      file_api_forgot_password_rpc_proto_msgTypes,
	}.Build()
	File_api_forgot_password_rpc_proto = out.File
	file_api_forgot_password_rpc_proto_rawDesc = nil
	file_api_forgot_password_rpc_proto_goTypes = nil
	file_api_forgot_password_rpc_proto_depIdxs = nil
}
