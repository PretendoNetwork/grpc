// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.2
// 	protoc        (unknown)
// source: api/v2/api_service.proto

package apiv2

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

var File_api_v2_api_service_proto protoreflect.FileDescriptor

var file_api_v2_api_service_proto_rawDesc = []byte{
	0x0a, 0x18, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f, 0x61, 0x70, 0x69, 0x5f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x06, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x32, 0x1a, 0x20, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f, 0x66, 0x6f, 0x72, 0x67, 0x6f,
	0x74, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1e, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f, 0x67, 0x65, 0x74,
	0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x16, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f, 0x6c, 0x6f, 0x67,
	0x69, 0x6e, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x19, 0x61, 0x70,
	0x69, 0x2f, 0x76, 0x32, 0x2f, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x5f, 0x72, 0x70,
	0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f,
	0x72, 0x65, 0x73, 0x65, 0x74, 0x5f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x5f, 0x72,
	0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2c, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32,
	0x2f, 0x73, 0x65, 0x74, 0x5f, 0x64, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x5f, 0x63, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x72, 0x70, 0x63,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x2b, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f, 0x73,
	0x65, 0x74, 0x5f, 0x73, 0x74, 0x72, 0x69, 0x70, 0x65, 0x5f, 0x63, 0x6f, 0x6e, 0x6e, 0x65, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x72, 0x70, 0x63, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x1a, 0x21, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x2f, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x64, 0x61, 0x74, 0x61, 0x5f, 0x72, 0x70, 0x63,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x32, 0xa4, 0x05, 0x0a, 0x0a, 0x41, 0x70, 0x69, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3f, 0x0a, 0x08, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65,
	0x72, 0x12, 0x17, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73,
	0x74, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x32, 0x2e, 0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x36, 0x0a, 0x05, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x12,
	0x14, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x15, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x4c,
	0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x48,
	0x0a, 0x0b, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61, 0x12, 0x1a, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61,
	0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x32, 0x2e, 0x47, 0x65, 0x74, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x51, 0x0a, 0x0e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74, 0x61, 0x12, 0x1d, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x32, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61,
	0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x61, 0x70, 0x69, 0x2e,
	0x76, 0x32, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x44, 0x61, 0x74,
	0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x51, 0x0a, 0x0e, 0x46,
	0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x1d, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73,
	0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x61,
	0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73,
	0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x4e,
	0x0a, 0x0d, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12,
	0x1c, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1d, 0x2e,
	0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x52, 0x65, 0x73, 0x65, 0x74, 0x50, 0x61, 0x73, 0x73,
	0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x6f,
	0x0a, 0x18, 0x53, 0x65, 0x74, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x12, 0x27, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x32, 0x2e, 0x53, 0x65, 0x74, 0x44, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x43, 0x6f,
	0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x28, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x53, 0x65, 0x74,
	0x44, 0x69, 0x73, 0x63, 0x6f, 0x72, 0x64, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f,
	0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x6c, 0x0a, 0x17, 0x53, 0x65, 0x74, 0x53, 0x74, 0x72, 0x69, 0x70, 0x65, 0x43, 0x6f, 0x6e, 0x6e,
	0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x12, 0x26, 0x2e, 0x61, 0x70, 0x69,
	0x2e, 0x76, 0x32, 0x2e, 0x53, 0x65, 0x74, 0x53, 0x74, 0x72, 0x69, 0x70, 0x65, 0x43, 0x6f, 0x6e,
	0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44, 0x61, 0x74, 0x61, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x27, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x2e, 0x53, 0x65, 0x74, 0x53,
	0x74, 0x72, 0x69, 0x70, 0x65, 0x43, 0x6f, 0x6e, 0x6e, 0x65, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x44,
	0x61, 0x74, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x87, 0x01,
	0x0a, 0x0a, 0x63, 0x6f, 0x6d, 0x2e, 0x61, 0x70, 0x69, 0x2e, 0x76, 0x32, 0x42, 0x0f, 0x41, 0x70,
	0x69, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a,
	0x2f, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x50, 0x72, 0x65, 0x74,
	0x65, 0x6e, 0x64, 0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63,
	0x2f, 0x67, 0x6f, 0x2f, 0x61, 0x70, 0x69, 0x2f, 0x76, 0x32, 0x3b, 0x61, 0x70, 0x69, 0x76, 0x32,
	0xa2, 0x02, 0x03, 0x41, 0x58, 0x58, 0xaa, 0x02, 0x06, 0x41, 0x70, 0x69, 0x2e, 0x56, 0x32, 0xca,
	0x02, 0x06, 0x41, 0x70, 0x69, 0x5c, 0x56, 0x32, 0xe2, 0x02, 0x12, 0x41, 0x70, 0x69, 0x5c, 0x56,
	0x32, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x07,
	0x41, 0x70, 0x69, 0x3a, 0x3a, 0x56, 0x32, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_api_v2_api_service_proto_goTypes = []any{
	(*RegisterRequest)(nil),                  // 0: api.v2.RegisterRequest
	(*LoginRequest)(nil),                     // 1: api.v2.LoginRequest
	(*GetUserDataRequest)(nil),               // 2: api.v2.GetUserDataRequest
	(*UpdateUserDataRequest)(nil),            // 3: api.v2.UpdateUserDataRequest
	(*ForgotPasswordRequest)(nil),            // 4: api.v2.ForgotPasswordRequest
	(*ResetPasswordRequest)(nil),             // 5: api.v2.ResetPasswordRequest
	(*SetDiscordConnectionDataRequest)(nil),  // 6: api.v2.SetDiscordConnectionDataRequest
	(*SetStripeConnectionDataRequest)(nil),   // 7: api.v2.SetStripeConnectionDataRequest
	(*RegisterResponse)(nil),                 // 8: api.v2.RegisterResponse
	(*LoginResponse)(nil),                    // 9: api.v2.LoginResponse
	(*GetUserDataResponse)(nil),              // 10: api.v2.GetUserDataResponse
	(*UpdateUserDataResponse)(nil),           // 11: api.v2.UpdateUserDataResponse
	(*ForgotPasswordResponse)(nil),           // 12: api.v2.ForgotPasswordResponse
	(*ResetPasswordResponse)(nil),            // 13: api.v2.ResetPasswordResponse
	(*SetDiscordConnectionDataResponse)(nil), // 14: api.v2.SetDiscordConnectionDataResponse
	(*SetStripeConnectionDataResponse)(nil),  // 15: api.v2.SetStripeConnectionDataResponse
}
var file_api_v2_api_service_proto_depIdxs = []int32{
	0,  // 0: api.v2.ApiService.Register:input_type -> api.v2.RegisterRequest
	1,  // 1: api.v2.ApiService.Login:input_type -> api.v2.LoginRequest
	2,  // 2: api.v2.ApiService.GetUserData:input_type -> api.v2.GetUserDataRequest
	3,  // 3: api.v2.ApiService.UpdateUserData:input_type -> api.v2.UpdateUserDataRequest
	4,  // 4: api.v2.ApiService.ForgotPassword:input_type -> api.v2.ForgotPasswordRequest
	5,  // 5: api.v2.ApiService.ResetPassword:input_type -> api.v2.ResetPasswordRequest
	6,  // 6: api.v2.ApiService.SetDiscordConnectionData:input_type -> api.v2.SetDiscordConnectionDataRequest
	7,  // 7: api.v2.ApiService.SetStripeConnectionData:input_type -> api.v2.SetStripeConnectionDataRequest
	8,  // 8: api.v2.ApiService.Register:output_type -> api.v2.RegisterResponse
	9,  // 9: api.v2.ApiService.Login:output_type -> api.v2.LoginResponse
	10, // 10: api.v2.ApiService.GetUserData:output_type -> api.v2.GetUserDataResponse
	11, // 11: api.v2.ApiService.UpdateUserData:output_type -> api.v2.UpdateUserDataResponse
	12, // 12: api.v2.ApiService.ForgotPassword:output_type -> api.v2.ForgotPasswordResponse
	13, // 13: api.v2.ApiService.ResetPassword:output_type -> api.v2.ResetPasswordResponse
	14, // 14: api.v2.ApiService.SetDiscordConnectionData:output_type -> api.v2.SetDiscordConnectionDataResponse
	15, // 15: api.v2.ApiService.SetStripeConnectionData:output_type -> api.v2.SetStripeConnectionDataResponse
	8,  // [8:16] is the sub-list for method output_type
	0,  // [0:8] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_api_v2_api_service_proto_init() }
func file_api_v2_api_service_proto_init() {
	if File_api_v2_api_service_proto != nil {
		return
	}
	file_api_v2_forgot_password_rpc_proto_init()
	file_api_v2_get_user_data_rpc_proto_init()
	file_api_v2_login_rpc_proto_init()
	file_api_v2_register_rpc_proto_init()
	file_api_v2_reset_password_rpc_proto_init()
	file_api_v2_set_discord_connection_data_rpc_proto_init()
	file_api_v2_set_stripe_connection_data_rpc_proto_init()
	file_api_v2_update_user_data_rpc_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_api_v2_api_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_api_v2_api_service_proto_goTypes,
		DependencyIndexes: file_api_v2_api_service_proto_depIdxs,
	}.Build()
	File_api_v2_api_service_proto = out.File
	file_api_v2_api_service_proto_rawDesc = nil
	file_api_v2_api_service_proto_goTypes = nil
	file_api_v2_api_service_proto_depIdxs = nil
}