// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: api/v2/register_rpc.proto

package apiv2

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

type RegisterRequest struct {
	state           protoimpl.MessageState `protogen:"open.v1"`
	Email           string                 `protobuf:"bytes,1,opt,name=email,proto3" json:"email,omitempty"`
	Username        string                 `protobuf:"bytes,2,opt,name=username,proto3" json:"username,omitempty"`
	MiiName         string                 `protobuf:"bytes,3,opt,name=mii_name,json=miiName,proto3" json:"mii_name,omitempty"`
	Password        string                 `protobuf:"bytes,4,opt,name=password,proto3" json:"password,omitempty"`
	PasswordConfirm string                 `protobuf:"bytes,5,opt,name=password_confirm,json=passwordConfirm,proto3" json:"password_confirm,omitempty"`
	CaptchaResponse *string                `protobuf:"bytes,6,opt,name=captcha_response,json=captchaResponse,proto3,oneof" json:"captcha_response,omitempty"`
	unknownFields   protoimpl.UnknownFields
	sizeCache       protoimpl.SizeCache
}

func (x *RegisterRequest) Reset() {
	*x = RegisterRequest{}
	mi := &file_api_v2_register_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *RegisterRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterRequest) ProtoMessage() {}

func (x *RegisterRequest) ProtoReflect() protoreflect.Message {
	mi := &file_api_v2_register_rpc_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterRequest.ProtoReflect.Descriptor instead.
func (*RegisterRequest) Descriptor() ([]byte, []int) {
	return file_api_v2_register_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *RegisterRequest) GetEmail() string {
	if x != nil {
		return x.Email
	}
	return ""
}

func (x *RegisterRequest) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *RegisterRequest) GetMiiName() string {
	if x != nil {
		return x.MiiName
	}
	return ""
}

func (x *RegisterRequest) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *RegisterRequest) GetPasswordConfirm() string {
	if x != nil {
		return x.PasswordConfirm
	}
	return ""
}

func (x *RegisterRequest) GetCaptchaResponse() string {
	if x != nil && x.CaptchaResponse != nil {
		return *x.CaptchaResponse
	}
	return ""
}

type RegisterResponse struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	ExpiresIn     uint32                 `protobuf:"varint,1,opt,name=expires_in,json=expiresIn,proto3" json:"expires_in,omitempty"`
	TokenType     string                 `protobuf:"bytes,2,opt,name=token_type,json=tokenType,proto3" json:"token_type,omitempty"`
	AccessToken   string                 `protobuf:"bytes,3,opt,name=access_token,json=accessToken,proto3" json:"access_token,omitempty"`
	RefreshToken  string                 `protobuf:"bytes,4,opt,name=refresh_token,json=refreshToken,proto3" json:"refresh_token,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *RegisterResponse) Reset() {
	*x = RegisterResponse{}
	mi := &file_api_v2_register_rpc_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *RegisterResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*RegisterResponse) ProtoMessage() {}

func (x *RegisterResponse) ProtoReflect() protoreflect.Message {
	mi := &file_api_v2_register_rpc_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use RegisterResponse.ProtoReflect.Descriptor instead.
func (*RegisterResponse) Descriptor() ([]byte, []int) {
	return file_api_v2_register_rpc_proto_rawDescGZIP(), []int{1}
}

func (x *RegisterResponse) GetExpiresIn() uint32 {
	if x != nil {
		return x.ExpiresIn
	}
	return 0
}

func (x *RegisterResponse) GetTokenType() string {
	if x != nil {
		return x.TokenType
	}
	return ""
}

func (x *RegisterResponse) GetAccessToken() string {
	if x != nil {
		return x.AccessToken
	}
	return ""
}

func (x *RegisterResponse) GetRefreshToken() string {
	if x != nil {
		return x.RefreshToken
	}
	return ""
}

var File_api_v2_register_rpc_proto protoreflect.FileDescriptor

const file_api_v2_register_rpc_proto_rawDesc = "" +
	"\n" +
	"\x19api/v2/register_rpc.proto\x12\x06api.v2\"\xea\x01\n" +
	"\x0fRegisterRequest\x12\x14\n" +
	"\x05email\x18\x01 \x01(\tR\x05email\x12\x1a\n" +
	"\busername\x18\x02 \x01(\tR\busername\x12\x19\n" +
	"\bmii_name\x18\x03 \x01(\tR\amiiName\x12\x1a\n" +
	"\bpassword\x18\x04 \x01(\tR\bpassword\x12)\n" +
	"\x10password_confirm\x18\x05 \x01(\tR\x0fpasswordConfirm\x12.\n" +
	"\x10captcha_response\x18\x06 \x01(\tH\x00R\x0fcaptchaResponse\x88\x01\x01B\x13\n" +
	"\x11_captcha_response\"\x98\x01\n" +
	"\x10RegisterResponse\x12\x1d\n" +
	"\n" +
	"expires_in\x18\x01 \x01(\rR\texpiresIn\x12\x1d\n" +
	"\n" +
	"token_type\x18\x02 \x01(\tR\ttokenType\x12!\n" +
	"\faccess_token\x18\x03 \x01(\tR\vaccessToken\x12#\n" +
	"\rrefresh_token\x18\x04 \x01(\tR\frefreshTokenB\x88\x01\n" +
	"\n" +
	"com.api.v2B\x10RegisterRpcProtoP\x01Z/github.com/PretendoNetwork/grpc/go/api/v2;apiv2\xa2\x02\x03AXX\xaa\x02\x06Api.V2\xca\x02\x06Api\\V2\xe2\x02\x12Api\\V2\\GPBMetadata\xea\x02\aApi::V2b\x06proto3"

var (
	file_api_v2_register_rpc_proto_rawDescOnce sync.Once
	file_api_v2_register_rpc_proto_rawDescData []byte
)

func file_api_v2_register_rpc_proto_rawDescGZIP() []byte {
	file_api_v2_register_rpc_proto_rawDescOnce.Do(func() {
		file_api_v2_register_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_api_v2_register_rpc_proto_rawDesc), len(file_api_v2_register_rpc_proto_rawDesc)))
	})
	return file_api_v2_register_rpc_proto_rawDescData
}

var file_api_v2_register_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_api_v2_register_rpc_proto_goTypes = []any{
	(*RegisterRequest)(nil),  // 0: api.v2.RegisterRequest
	(*RegisterResponse)(nil), // 1: api.v2.RegisterResponse
}
var file_api_v2_register_rpc_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_api_v2_register_rpc_proto_init() }
func file_api_v2_register_rpc_proto_init() {
	if File_api_v2_register_rpc_proto != nil {
		return
	}
	file_api_v2_register_rpc_proto_msgTypes[0].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_api_v2_register_rpc_proto_rawDesc), len(file_api_v2_register_rpc_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_v2_register_rpc_proto_goTypes,
		DependencyIndexes: file_api_v2_register_rpc_proto_depIdxs,
		MessageInfos:      file_api_v2_register_rpc_proto_msgTypes,
	}.Build()
	File_api_v2_register_rpc_proto = out.File
	file_api_v2_register_rpc_proto_goTypes = nil
	file_api_v2_register_rpc_proto_depIdxs = nil
}
