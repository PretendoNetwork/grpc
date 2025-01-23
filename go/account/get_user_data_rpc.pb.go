// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.3
// 	protoc        (unknown)
// source: account/get_user_data_rpc.proto

package account

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

type GetUserDataRequest struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Pid           uint32                 `protobuf:"varint,1,opt,name=pid,proto3" json:"pid,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *GetUserDataRequest) Reset() {
	*x = GetUserDataRequest{}
	mi := &file_account_get_user_data_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUserDataRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserDataRequest) ProtoMessage() {}

func (x *GetUserDataRequest) ProtoReflect() protoreflect.Message {
	mi := &file_account_get_user_data_rpc_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUserDataRequest.ProtoReflect.Descriptor instead.
func (*GetUserDataRequest) Descriptor() ([]byte, []int) {
	return file_account_get_user_data_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *GetUserDataRequest) GetPid() uint32 {
	if x != nil {
		return x.Pid
	}
	return 0
}

type GetUserDataResponse struct {
	state             protoimpl.MessageState `protogen:"open.v1"`
	Deleted           bool                   `protobuf:"varint,1,opt,name=deleted,proto3" json:"deleted,omitempty"`
	Pid               uint32                 `protobuf:"varint,2,opt,name=pid,proto3" json:"pid,omitempty"`
	Username          string                 `protobuf:"bytes,3,opt,name=username,proto3" json:"username,omitempty"`
	AccessLevel       int32                  `protobuf:"varint,4,opt,name=access_level,json=accessLevel,proto3" json:"access_level,omitempty"`
	ServerAccessLevel string                 `protobuf:"bytes,5,opt,name=server_access_level,json=serverAccessLevel,proto3" json:"server_access_level,omitempty"`
	Mii               *Mii                   `protobuf:"bytes,6,opt,name=mii,proto3" json:"mii,omitempty"`
	CreationDate      string                 `protobuf:"bytes,7,opt,name=creation_date,json=creationDate,proto3" json:"creation_date,omitempty"`
	Birthdate         string                 `protobuf:"bytes,8,opt,name=birthdate,proto3" json:"birthdate,omitempty"`
	Gender            string                 `protobuf:"bytes,9,opt,name=gender,proto3" json:"gender,omitempty"`
	Country           string                 `protobuf:"bytes,10,opt,name=country,proto3" json:"country,omitempty"`
	Language          string                 `protobuf:"bytes,11,opt,name=language,proto3" json:"language,omitempty"`
	EmailAddress      string                 `protobuf:"bytes,12,opt,name=email_address,json=emailAddress,proto3" json:"email_address,omitempty"`
	TierName          string                 `protobuf:"bytes,13,opt,name=tier_name,json=tierName,proto3" json:"tier_name,omitempty"`
	Permissions       *PNIDPermissionFlags   `protobuf:"bytes,14,opt,name=permissions,proto3" json:"permissions,omitempty"`
	unknownFields     protoimpl.UnknownFields
	sizeCache         protoimpl.SizeCache
}

func (x *GetUserDataResponse) Reset() {
	*x = GetUserDataResponse{}
	mi := &file_account_get_user_data_rpc_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *GetUserDataResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetUserDataResponse) ProtoMessage() {}

func (x *GetUserDataResponse) ProtoReflect() protoreflect.Message {
	mi := &file_account_get_user_data_rpc_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetUserDataResponse.ProtoReflect.Descriptor instead.
func (*GetUserDataResponse) Descriptor() ([]byte, []int) {
	return file_account_get_user_data_rpc_proto_rawDescGZIP(), []int{1}
}

func (x *GetUserDataResponse) GetDeleted() bool {
	if x != nil {
		return x.Deleted
	}
	return false
}

func (x *GetUserDataResponse) GetPid() uint32 {
	if x != nil {
		return x.Pid
	}
	return 0
}

func (x *GetUserDataResponse) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *GetUserDataResponse) GetAccessLevel() int32 {
	if x != nil {
		return x.AccessLevel
	}
	return 0
}

func (x *GetUserDataResponse) GetServerAccessLevel() string {
	if x != nil {
		return x.ServerAccessLevel
	}
	return ""
}

func (x *GetUserDataResponse) GetMii() *Mii {
	if x != nil {
		return x.Mii
	}
	return nil
}

func (x *GetUserDataResponse) GetCreationDate() string {
	if x != nil {
		return x.CreationDate
	}
	return ""
}

func (x *GetUserDataResponse) GetBirthdate() string {
	if x != nil {
		return x.Birthdate
	}
	return ""
}

func (x *GetUserDataResponse) GetGender() string {
	if x != nil {
		return x.Gender
	}
	return ""
}

func (x *GetUserDataResponse) GetCountry() string {
	if x != nil {
		return x.Country
	}
	return ""
}

func (x *GetUserDataResponse) GetLanguage() string {
	if x != nil {
		return x.Language
	}
	return ""
}

func (x *GetUserDataResponse) GetEmailAddress() string {
	if x != nil {
		return x.EmailAddress
	}
	return ""
}

func (x *GetUserDataResponse) GetTierName() string {
	if x != nil {
		return x.TierName
	}
	return ""
}

func (x *GetUserDataResponse) GetPermissions() *PNIDPermissionFlags {
	if x != nil {
		return x.Permissions
	}
	return nil
}

var File_account_get_user_data_rpc_proto protoreflect.FileDescriptor

var file_account_get_user_data_rpc_proto_rawDesc = []byte{
	0x0a, 0x1f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x75, 0x73,
	0x65, 0x72, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x07, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x1a, 0x11, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x2f, 0x6d, 0x69, 0x69, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x23, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x70, 0x6e, 0x69, 0x64, 0x5f, 0x70, 0x65, 0x72, 0x6d,
	0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x5f, 0x66, 0x6c, 0x61, 0x67, 0x73, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x22, 0x26, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74,
	0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x70, 0x69, 0x64, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x03, 0x70, 0x69, 0x64, 0x22, 0xe3, 0x03, 0x0a, 0x13, 0x47,
	0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x07, 0x64, 0x65, 0x6c, 0x65, 0x74, 0x65, 0x64, 0x12, 0x10, 0x0a, 0x03,
	0x70, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x03, 0x70, 0x69, 0x64, 0x12, 0x1a,
	0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x5f, 0x6c, 0x65, 0x76, 0x65, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x0b, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x2e, 0x0a,
	0x13, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x5f, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x5f, 0x6c,
	0x65, 0x76, 0x65, 0x6c, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x11, 0x73, 0x65, 0x72, 0x76,
	0x65, 0x72, 0x41, 0x63, 0x63, 0x65, 0x73, 0x73, 0x4c, 0x65, 0x76, 0x65, 0x6c, 0x12, 0x1e, 0x0a,
	0x03, 0x6d, 0x69, 0x69, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x0c, 0x2e, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x4d, 0x69, 0x69, 0x52, 0x03, 0x6d, 0x69, 0x69, 0x12, 0x23, 0x0a,
	0x0d, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61, 0x74, 0x65, 0x18, 0x07,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x63, 0x72, 0x65, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61,
	0x74, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x62, 0x69, 0x72, 0x74, 0x68, 0x64, 0x61, 0x74, 0x65, 0x18,
	0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x62, 0x69, 0x72, 0x74, 0x68, 0x64, 0x61, 0x74, 0x65,
	0x12, 0x16, 0x0a, 0x06, 0x67, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x67, 0x65, 0x6e, 0x64, 0x65, 0x72, 0x12, 0x18, 0x0a, 0x07, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x72, 0x79, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x72, 0x79, 0x12, 0x1a, 0x0a, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x18, 0x0b,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x6c, 0x61, 0x6e, 0x67, 0x75, 0x61, 0x67, 0x65, 0x12, 0x23,
	0x0a, 0x0d, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18,
	0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x65, 0x6d, 0x61, 0x69, 0x6c, 0x41, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x69, 0x65, 0x72, 0x5f, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x69, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65,
	0x12, 0x3e, 0x0a, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x18,
	0x0e, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1c, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e,
	0x50, 0x4e, 0x49, 0x44, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x46, 0x6c,
	0x61, 0x67, 0x73, 0x52, 0x0b, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73,
	0x42, 0x8a, 0x01, 0x0a, 0x0b, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x42, 0x13, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61, 0x52, 0x70, 0x63,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x07, 0x41, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0xca, 0x02, 0x07, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0xe2, 0x02, 0x13,
	0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0xea, 0x02, 0x07, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_account_get_user_data_rpc_proto_rawDescOnce sync.Once
	file_account_get_user_data_rpc_proto_rawDescData = file_account_get_user_data_rpc_proto_rawDesc
)

func file_account_get_user_data_rpc_proto_rawDescGZIP() []byte {
	file_account_get_user_data_rpc_proto_rawDescOnce.Do(func() {
		file_account_get_user_data_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(file_account_get_user_data_rpc_proto_rawDescData)
	})
	return file_account_get_user_data_rpc_proto_rawDescData
}

var file_account_get_user_data_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_account_get_user_data_rpc_proto_goTypes = []any{
	(*GetUserDataRequest)(nil),  // 0: account.GetUserDataRequest
	(*GetUserDataResponse)(nil), // 1: account.GetUserDataResponse
	(*Mii)(nil),                 // 2: account.Mii
	(*PNIDPermissionFlags)(nil), // 3: account.PNIDPermissionFlags
}
var file_account_get_user_data_rpc_proto_depIdxs = []int32{
	2, // 0: account.GetUserDataResponse.mii:type_name -> account.Mii
	3, // 1: account.GetUserDataResponse.permissions:type_name -> account.PNIDPermissionFlags
	2, // [2:2] is the sub-list for method output_type
	2, // [2:2] is the sub-list for method input_type
	2, // [2:2] is the sub-list for extension type_name
	2, // [2:2] is the sub-list for extension extendee
	0, // [0:2] is the sub-list for field type_name
}

func init() { file_account_get_user_data_rpc_proto_init() }
func file_account_get_user_data_rpc_proto_init() {
	if File_account_get_user_data_rpc_proto != nil {
		return
	}
	file_account_mii_proto_init()
	file_account_pnid_permission_flags_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_account_get_user_data_rpc_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_account_get_user_data_rpc_proto_goTypes,
		DependencyIndexes: file_account_get_user_data_rpc_proto_depIdxs,
		MessageInfos:      file_account_get_user_data_rpc_proto_msgTypes,
	}.Build()
	File_account_get_user_data_rpc_proto = out.File
	file_account_get_user_data_rpc_proto_rawDesc = nil
	file_account_get_user_data_rpc_proto_goTypes = nil
	file_account_get_user_data_rpc_proto_depIdxs = nil
}
