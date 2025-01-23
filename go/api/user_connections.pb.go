// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: api/user_connections.proto

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

type DiscordConnection struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Id            string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *DiscordConnection) Reset() {
	*x = DiscordConnection{}
	mi := &file_api_user_connections_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *DiscordConnection) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DiscordConnection) ProtoMessage() {}

func (x *DiscordConnection) ProtoReflect() protoreflect.Message {
	mi := &file_api_user_connections_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DiscordConnection.ProtoReflect.Descriptor instead.
func (*DiscordConnection) Descriptor() ([]byte, []int) {
	return file_api_user_connections_proto_rawDescGZIP(), []int{0}
}

func (x *DiscordConnection) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type StripeConnection struct {
	state                  protoimpl.MessageState `protogen:"open.v1"`
	CustomerId             *string                `protobuf:"bytes,1,opt,name=customer_id,json=customerId,proto3,oneof" json:"customer_id,omitempty"`
	SubscriptionId         *string                `protobuf:"bytes,2,opt,name=subscription_id,json=subscriptionId,proto3,oneof" json:"subscription_id,omitempty"`
	PriceId                *string                `protobuf:"bytes,3,opt,name=price_id,json=priceId,proto3,oneof" json:"price_id,omitempty"`
	TierLevel              *uint32                `protobuf:"varint,4,opt,name=tier_level,json=tierLevel,proto3,oneof" json:"tier_level,omitempty"`
	TierName               *string                `protobuf:"bytes,5,opt,name=tier_name,json=tierName,proto3,oneof" json:"tier_name,omitempty"`
	LatestWebhookTimestamp uint64                 `protobuf:"varint,6,opt,name=latest_webhook_timestamp,json=latestWebhookTimestamp,proto3" json:"latest_webhook_timestamp,omitempty"`
	unknownFields          protoimpl.UnknownFields
	sizeCache              protoimpl.SizeCache
}

func (x *StripeConnection) Reset() {
	*x = StripeConnection{}
	mi := &file_api_user_connections_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *StripeConnection) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*StripeConnection) ProtoMessage() {}

func (x *StripeConnection) ProtoReflect() protoreflect.Message {
	mi := &file_api_user_connections_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use StripeConnection.ProtoReflect.Descriptor instead.
func (*StripeConnection) Descriptor() ([]byte, []int) {
	return file_api_user_connections_proto_rawDescGZIP(), []int{1}
}

func (x *StripeConnection) GetCustomerId() string {
	if x != nil && x.CustomerId != nil {
		return *x.CustomerId
	}
	return ""
}

func (x *StripeConnection) GetSubscriptionId() string {
	if x != nil && x.SubscriptionId != nil {
		return *x.SubscriptionId
	}
	return ""
}

func (x *StripeConnection) GetPriceId() string {
	if x != nil && x.PriceId != nil {
		return *x.PriceId
	}
	return ""
}

func (x *StripeConnection) GetTierLevel() uint32 {
	if x != nil && x.TierLevel != nil {
		return *x.TierLevel
	}
	return 0
}

func (x *StripeConnection) GetTierName() string {
	if x != nil && x.TierName != nil {
		return *x.TierName
	}
	return ""
}

func (x *StripeConnection) GetLatestWebhookTimestamp() uint64 {
	if x != nil {
		return x.LatestWebhookTimestamp
	}
	return 0
}

type UserConnections struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Discord       *DiscordConnection     `protobuf:"bytes,1,opt,name=discord,proto3" json:"discord,omitempty"`
	Stripe        *StripeConnection      `protobuf:"bytes,2,opt,name=stripe,proto3" json:"stripe,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *UserConnections) Reset() {
	*x = UserConnections{}
	mi := &file_api_user_connections_proto_msgTypes[2]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *UserConnections) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UserConnections) ProtoMessage() {}

func (x *UserConnections) ProtoReflect() protoreflect.Message {
	mi := &file_api_user_connections_proto_msgTypes[2]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UserConnections.ProtoReflect.Descriptor instead.
func (*UserConnections) Descriptor() ([]byte, []int) {
	return file_api_user_connections_proto_rawDescGZIP(), []int{2}
}

func (x *UserConnections) GetDiscord() *DiscordConnection {
	if x != nil {
		return x.Discord
	}
	return nil
}

func (x *UserConnections) GetStripe() *StripeConnection {
	if x != nil {
		return x.Stripe
	}
	return nil
}

var File_api_user_connections_proto protoreflect.FileDescriptor

var file_api_user_connections_proto_rawDesc = []byte{
	0x0a, 0x1a, 0x61, 0x70, 0x69, 0x2f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65,
	0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x03, 0x61, 0x70,
	0x69, 0x22, 0x23, 0x0a, 0x11, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0xd4, 0x02, 0x0a, 0x10, 0x53, 0x74, 0x72, 0x69, 0x70,
	0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x24, 0x0a, 0x0b, 0x63,
	0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x48, 0x00, 0x52, 0x0a, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x49, 0x64, 0x88, 0x01,
	0x01, 0x12, 0x2c, 0x0a, 0x0f, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f,
	0x6e, 0x5f, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x48, 0x01, 0x52, 0x0e, 0x73, 0x75,
	0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12,
	0x1e, 0x0a, 0x08, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x09, 0x48, 0x02, 0x52, 0x07, 0x70, 0x72, 0x69, 0x63, 0x65, 0x49, 0x64, 0x88, 0x01, 0x01, 0x12,
	0x22, 0x0a, 0x0a, 0x74, 0x69, 0x65, 0x72, 0x5f, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x0d, 0x48, 0x03, 0x52, 0x09, 0x74, 0x69, 0x65, 0x72, 0x4c, 0x65, 0x76, 0x65, 0x6c,
	0x88, 0x01, 0x01, 0x12, 0x20, 0x0a, 0x09, 0x74, 0x69, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x48, 0x04, 0x52, 0x08, 0x74, 0x69, 0x65, 0x72, 0x4e, 0x61,
	0x6d, 0x65, 0x88, 0x01, 0x01, 0x12, 0x38, 0x0a, 0x18, 0x6c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x5f,
	0x77, 0x65, 0x62, 0x68, 0x6f, 0x6f, 0x6b, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d,
	0x70, 0x18, 0x06, 0x20, 0x01, 0x28, 0x04, 0x52, 0x16, 0x6c, 0x61, 0x74, 0x65, 0x73, 0x74, 0x57,
	0x65, 0x62, 0x68, 0x6f, 0x6f, 0x6b, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x42,
	0x0e, 0x0a, 0x0c, 0x5f, 0x63, 0x75, 0x73, 0x74, 0x6f, 0x6d, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x42,
	0x12, 0x0a, 0x10, 0x5f, 0x73, 0x75, 0x62, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e,
	0x5f, 0x69, 0x64, 0x42, 0x0b, 0x0a, 0x09, 0x5f, 0x70, 0x72, 0x69, 0x63, 0x65, 0x5f, 0x69, 0x64,
	0x42, 0x0d, 0x0a, 0x0b, 0x5f, 0x74, 0x69, 0x65, 0x72, 0x5f, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x42,
	0x0c, 0x0a, 0x0a, 0x5f, 0x74, 0x69, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x22, 0x72, 0x0a,
	0x0f, 0x55, 0x73, 0x65, 0x72, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73,
	0x12, 0x30, 0x0a, 0x07, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x16, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x43,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x07, 0x64, 0x69, 0x73, 0x63, 0x6f,
	0x72, 0x64, 0x12, 0x2d, 0x0a, 0x06, 0x73, 0x74, 0x72, 0x69, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x15, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x70, 0x65, 0x43,
	0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x52, 0x06, 0x73, 0x74, 0x72, 0x69, 0x70,
	0x65, 0x42, 0x73, 0x0a, 0x07, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x42, 0x14, 0x55, 0x73,
	0x65, 0x72, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x73, 0x50, 0x72, 0x6f,
	0x74, 0x6f, 0x50, 0x01, 0x5a, 0x26, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d,
	0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0xa2, 0x02, 0x03, 0x41,
	0x58, 0x58, 0xaa, 0x02, 0x03, 0x41, 0x70, 0x69, 0xca, 0x02, 0x03, 0x41, 0x70, 0x69, 0xe2, 0x02,
	0x0f, 0x41, 0x70, 0x69, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0xea, 0x02, 0x03, 0x41, 0x70, 0x69, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_api_user_connections_proto_rawDescOnce sync.Once
	file_api_user_connections_proto_rawDescData = file_api_user_connections_proto_rawDesc
)

func file_api_user_connections_proto_rawDescGZIP() []byte {
	file_api_user_connections_proto_rawDescOnce.Do(func() {
		file_api_user_connections_proto_rawDescData = protoimpl.X.CompressGZIP(file_api_user_connections_proto_rawDescData)
	})
	return file_api_user_connections_proto_rawDescData
}

var file_api_user_connections_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_api_user_connections_proto_goTypes = []any{
	(*DiscordConnection)(nil), // 0: api.DiscordConnection
	(*StripeConnection)(nil),  // 1: api.StripeConnection
	(*UserConnections)(nil),   // 2: api.UserConnections
}
var file_api_user_connections_proto_depIdxs = []int32{
	0, // 0: api.UserConnections.discord:type_name -> api.DiscordConnection
	1, // 1: api.UserConnections.stripe:type_name -> api.StripeConnection
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_api_user_connections_proto_init() }
func file_api_user_connections_proto_init() {
	if File_api_user_connections_proto != nil {
		return
	}
	file_api_user_connections_proto_msgTypes[1].OneofWrappers = []any{}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_user_connections_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_api_user_connections_proto_goTypes,
		DependencyIndexes: file_api_user_connections_proto_depIdxs,
		MessageInfos:      file_api_user_connections_proto_msgTypes,
	}.Build()
	File_api_user_connections_proto = out.File
	file_api_user_connections_proto_rawDesc = nil
	file_api_user_connections_proto_goTypes = nil
	file_api_user_connections_proto_depIdxs = nil
}
