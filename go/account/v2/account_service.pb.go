// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        (unknown)
// source: account/v2/account_service.proto

package accountv2

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_account_v2_account_service_proto protoreflect.FileDescriptor

var file_account_v2_account_service_proto_rawDesc = []byte{
	0x0a, 0x20, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x76, 0x32, 0x2f, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x5f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0a, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32, 0x1a, 0x2d,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x76, 0x32, 0x2f, 0x65, 0x78, 0x63, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x5f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x5f, 0x66, 0x6f, 0x72, 0x5f, 0x75, 0x73,
	0x65, 0x72, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x76, 0x32, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x6e, 0x65,
	0x78, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x1a, 0x25, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x76, 0x32, 0x2f, 0x67, 0x65, 0x74,
	0x5f, 0x6e, 0x65, 0x78, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x5f, 0x72, 0x70,
	0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x22, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x2f, 0x76, 0x32, 0x2f, 0x67, 0x65, 0x74, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x64, 0x61, 0x74,
	0x61, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x28, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x76, 0x32, 0x2f, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x70,
	0x6e, 0x69, 0x64, 0x5f, 0x70, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xf5, 0x03, 0x0a, 0x0e, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x50, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x55,
	0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61, 0x12, 0x1e, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1f, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x59, 0x0a, 0x0e, 0x47, 0x65,
	0x74, 0x4e, 0x45, 0x58, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x21, 0x2e, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x65, 0x74, 0x4e, 0x45, 0x58,
	0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a,
	0x22, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x65, 0x74,
	0x4e, 0x45, 0x58, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4d, 0x0a, 0x0a, 0x47, 0x65, 0x74, 0x4e, 0x45, 0x58, 0x44,
	0x61, 0x74, 0x61, 0x12, 0x1d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32,
	0x2e, 0x47, 0x65, 0x74, 0x4e, 0x45, 0x58, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32, 0x2e,
	0x47, 0x65, 0x74, 0x4e, 0x45, 0x58, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x6e, 0x0a, 0x15, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x4e,
	0x49, 0x44, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x12, 0x28, 0x2e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x50, 0x4e, 0x49, 0x44, 0x50, 0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x29, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x2e, 0x76, 0x32, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x4e, 0x49, 0x44, 0x50,
	0x65, 0x72, 0x6d, 0x69, 0x73, 0x73, 0x69, 0x6f, 0x6e, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x12, 0x77, 0x0a, 0x18, 0x45, 0x78, 0x63, 0x68, 0x61, 0x6e, 0x67, 0x65,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61,
	0x12, 0x2b, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32, 0x2e, 0x45, 0x78,
	0x63, 0x68, 0x61, 0x6e, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x55, 0x73,
	0x65, 0x72, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e,
	0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32, 0x2e, 0x45, 0x78, 0x63, 0x68, 0x61,
	0x6e, 0x67, 0x65, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x46, 0x6f, 0x72, 0x55, 0x73, 0x65, 0x72, 0x44,
	0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0xa7, 0x01,
	0x0a, 0x0e, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x76, 0x32,
	0x42, 0x13, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77,
	0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x2f, 0x76, 0x32, 0x3b, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x76, 0x32,
	0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x0a, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x2e, 0x56, 0x32, 0xca, 0x02, 0x0a, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5c, 0x56, 0x32,
	0xe2, 0x02, 0x16, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x5c, 0x56, 0x32, 0x5c, 0x47, 0x50,
	0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x0b, 0x41, 0x63, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x3a, 0x3a, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_account_v2_account_service_proto_goTypes = []any{
	(*GetUserDataRequest)(nil),               // 0: account.v2.GetUserDataRequest
	(*GetNEXPasswordRequest)(nil),            // 1: account.v2.GetNEXPasswordRequest
	(*GetNEXDataRequest)(nil),                // 2: account.v2.GetNEXDataRequest
	(*UpdatePNIDPermissionsRequest)(nil),     // 3: account.v2.UpdatePNIDPermissionsRequest
	(*ExchangeTokenForUserDataRequest)(nil),  // 4: account.v2.ExchangeTokenForUserDataRequest
	(*GetUserDataResponse)(nil),              // 5: account.v2.GetUserDataResponse
	(*GetNEXPasswordResponse)(nil),           // 6: account.v2.GetNEXPasswordResponse
	(*GetNEXDataResponse)(nil),               // 7: account.v2.GetNEXDataResponse
	(*UpdatePNIDPermissionsResponse)(nil),    // 8: account.v2.UpdatePNIDPermissionsResponse
	(*ExchangeTokenForUserDataResponse)(nil), // 9: account.v2.ExchangeTokenForUserDataResponse
}
var file_account_v2_account_service_proto_depIdxs = []int32{
	0, // 0: account.v2.AccountService.GetUserData:input_type -> account.v2.GetUserDataRequest
	1, // 1: account.v2.AccountService.GetNEXPassword:input_type -> account.v2.GetNEXPasswordRequest
	2, // 2: account.v2.AccountService.GetNEXData:input_type -> account.v2.GetNEXDataRequest
	3, // 3: account.v2.AccountService.UpdatePNIDPermissions:input_type -> account.v2.UpdatePNIDPermissionsRequest
	4, // 4: account.v2.AccountService.ExchangeTokenForUserData:input_type -> account.v2.ExchangeTokenForUserDataRequest
	5, // 5: account.v2.AccountService.GetUserData:output_type -> account.v2.GetUserDataResponse
	6, // 6: account.v2.AccountService.GetNEXPassword:output_type -> account.v2.GetNEXPasswordResponse
	7, // 7: account.v2.AccountService.GetNEXData:output_type -> account.v2.GetNEXDataResponse
	8, // 8: account.v2.AccountService.UpdatePNIDPermissions:output_type -> account.v2.UpdatePNIDPermissionsResponse
	9, // 9: account.v2.AccountService.ExchangeTokenForUserData:output_type -> account.v2.ExchangeTokenForUserDataResponse
	5, // [5:10] is the sub-list for method output_type
	0, // [0:5] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_account_v2_account_service_proto_init() }
func file_account_v2_account_service_proto_init() {
	if File_account_v2_account_service_proto != nil {
		return
	}
	file_account_v2_exchange_token_for_user_data_proto_init()
	file_account_v2_get_nex_data_rpc_proto_init()
	file_account_v2_get_nex_password_rpc_proto_init()
	file_account_v2_get_user_data_rpc_proto_init()
	file_account_v2_update_pnid_permissions_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_account_v2_account_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_account_v2_account_service_proto_goTypes,
		DependencyIndexes: file_account_v2_account_service_proto_depIdxs,
	}.Build()
	File_account_v2_account_service_proto = out.File
	file_account_v2_account_service_proto_rawDesc = nil
	file_account_v2_account_service_proto_goTypes = nil
	file_account_v2_account_service_proto_depIdxs = nil
}
