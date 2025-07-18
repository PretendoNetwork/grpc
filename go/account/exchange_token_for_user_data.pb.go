// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.6
// 	protoc        (unknown)
// source: account/exchange_token_for_user_data.proto

package account

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

type ExchangeTokenForUserDataRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Token         string                 `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ExchangeTokenForUserDataRequest) Reset() {
	*x = ExchangeTokenForUserDataRequest{}
	mi := &file_account_exchange_token_for_user_data_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ExchangeTokenForUserDataRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExchangeTokenForUserDataRequest) ProtoMessage() {}

func (x *ExchangeTokenForUserDataRequest) ProtoReflect() protoreflect.Message {
	mi := &file_account_exchange_token_for_user_data_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExchangeTokenForUserDataRequest.ProtoReflect.Descriptor instead.
func (*ExchangeTokenForUserDataRequest) Descriptor() ([]byte, []int) {
	return file_account_exchange_token_for_user_data_proto_rawDescGZIP(), []int{0}
}

func (x *ExchangeTokenForUserDataRequest) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

var File_account_exchange_token_for_user_data_proto protoreflect.FileDescriptor

const file_account_exchange_token_for_user_data_proto_rawDesc = "" +
	"\n" +
	"*account/exchange_token_for_user_data.proto\x12\aaccount\"7\n" +
	"\x1fExchangeTokenForUserDataRequest\x12\x14\n" +
	"\x05token\x18\x01 \x01(\tR\x05tokenB\x94\x01\n" +
	"\vcom.accountB\x1dExchangeTokenForUserDataProtoP\x01Z*github.com/PretendoNetwork/grpc/go/account\xa2\x02\x03AXX\xaa\x02\aAccount\xca\x02\aAccount\xe2\x02\x13Account\\GPBMetadata\xea\x02\aAccountb\x06proto3"

var (
	file_account_exchange_token_for_user_data_proto_rawDescOnce sync.Once
	file_account_exchange_token_for_user_data_proto_rawDescData []byte
)

func file_account_exchange_token_for_user_data_proto_rawDescGZIP() []byte {
	file_account_exchange_token_for_user_data_proto_rawDescOnce.Do(func() {
		file_account_exchange_token_for_user_data_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_account_exchange_token_for_user_data_proto_rawDesc), len(file_account_exchange_token_for_user_data_proto_rawDesc)))
	})
	return file_account_exchange_token_for_user_data_proto_rawDescData
}

var file_account_exchange_token_for_user_data_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_account_exchange_token_for_user_data_proto_goTypes = []any{
	(*ExchangeTokenForUserDataRequest)(nil), // 0: account.ExchangeTokenForUserDataRequest
}
var file_account_exchange_token_for_user_data_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_account_exchange_token_for_user_data_proto_init() }
func file_account_exchange_token_for_user_data_proto_init() {
	if File_account_exchange_token_for_user_data_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_account_exchange_token_for_user_data_proto_rawDesc), len(file_account_exchange_token_for_user_data_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_account_exchange_token_for_user_data_proto_goTypes,
		DependencyIndexes: file_account_exchange_token_for_user_data_proto_depIdxs,
		MessageInfos:      file_account_exchange_token_for_user_data_proto_msgTypes,
	}.Build()
	File_account_exchange_token_for_user_data_proto = out.File
	file_account_exchange_token_for_user_data_proto_goTypes = nil
	file_account_exchange_token_for_user_data_proto_depIdxs = nil
}
