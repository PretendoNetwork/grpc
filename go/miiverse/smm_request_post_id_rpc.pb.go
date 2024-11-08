// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.35.1
// 	protoc        (unknown)
// source: miiverse/smm_request_post_id_rpc.proto

package miiverse

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

type SMMRequestPostIDRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	CourseId uint64 `protobuf:"varint,1,opt,name=course_id,json=courseId,proto3" json:"course_id,omitempty"` // TODO - Other course/user data?
}

func (x *SMMRequestPostIDRequest) Reset() {
	*x = SMMRequestPostIDRequest{}
	mi := &file_miiverse_smm_request_post_id_rpc_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SMMRequestPostIDRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SMMRequestPostIDRequest) ProtoMessage() {}

func (x *SMMRequestPostIDRequest) ProtoReflect() protoreflect.Message {
	mi := &file_miiverse_smm_request_post_id_rpc_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SMMRequestPostIDRequest.ProtoReflect.Descriptor instead.
func (*SMMRequestPostIDRequest) Descriptor() ([]byte, []int) {
	return file_miiverse_smm_request_post_id_rpc_proto_rawDescGZIP(), []int{0}
}

func (x *SMMRequestPostIDRequest) GetCourseId() uint64 {
	if x != nil {
		return x.CourseId
	}
	return 0
}

type SMMRequestPostIDResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	PostId uint64 `protobuf:"varint,1,opt,name=post_id,json=postId,proto3" json:"post_id,omitempty"`
}

func (x *SMMRequestPostIDResponse) Reset() {
	*x = SMMRequestPostIDResponse{}
	mi := &file_miiverse_smm_request_post_id_rpc_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *SMMRequestPostIDResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SMMRequestPostIDResponse) ProtoMessage() {}

func (x *SMMRequestPostIDResponse) ProtoReflect() protoreflect.Message {
	mi := &file_miiverse_smm_request_post_id_rpc_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SMMRequestPostIDResponse.ProtoReflect.Descriptor instead.
func (*SMMRequestPostIDResponse) Descriptor() ([]byte, []int) {
	return file_miiverse_smm_request_post_id_rpc_proto_rawDescGZIP(), []int{1}
}

func (x *SMMRequestPostIDResponse) GetPostId() uint64 {
	if x != nil {
		return x.PostId
	}
	return 0
}

var File_miiverse_smm_request_post_id_rpc_proto protoreflect.FileDescriptor

var file_miiverse_smm_request_post_id_rpc_proto_rawDesc = []byte{
	0x0a, 0x26, 0x6d, 0x69, 0x69, 0x76, 0x65, 0x72, 0x73, 0x65, 0x2f, 0x73, 0x6d, 0x6d, 0x5f, 0x72,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x70, 0x6f, 0x73, 0x74, 0x5f, 0x69, 0x64, 0x5f, 0x72,
	0x70, 0x63, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x6d, 0x69, 0x69, 0x76, 0x65, 0x72,
	0x73, 0x65, 0x22, 0x36, 0x0a, 0x17, 0x53, 0x4d, 0x4d, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x50, 0x6f, 0x73, 0x74, 0x49, 0x44, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a,
	0x09, 0x63, 0x6f, 0x75, 0x72, 0x73, 0x65, 0x5f, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04,
	0x52, 0x08, 0x63, 0x6f, 0x75, 0x72, 0x73, 0x65, 0x49, 0x64, 0x22, 0x33, 0x0a, 0x18, 0x53, 0x4d,
	0x4d, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x50, 0x6f, 0x73, 0x74, 0x49, 0x44, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x17, 0x0a, 0x07, 0x70, 0x6f, 0x73, 0x74, 0x5f, 0x69,
	0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x70, 0x6f, 0x73, 0x74, 0x49, 0x64, 0x42,
	0x95, 0x01, 0x0a, 0x0c, 0x63, 0x6f, 0x6d, 0x2e, 0x6d, 0x69, 0x69, 0x76, 0x65, 0x72, 0x73, 0x65,
	0x42, 0x18, 0x53, 0x6d, 0x6d, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x50, 0x6f, 0x73, 0x74,
	0x49, 0x64, 0x52, 0x70, 0x63, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2b, 0x67, 0x69,
	0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x70, 0x72, 0x65, 0x74, 0x65, 0x6e, 0x64,
	0x6f, 0x4e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b, 0x2f, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f,
	0x2f, 0x6d, 0x69, 0x69, 0x76, 0x65, 0x72, 0x73, 0x65, 0xa2, 0x02, 0x03, 0x4d, 0x58, 0x58, 0xaa,
	0x02, 0x08, 0x4d, 0x69, 0x69, 0x76, 0x65, 0x72, 0x73, 0x65, 0xca, 0x02, 0x08, 0x4d, 0x69, 0x69,
	0x76, 0x65, 0x72, 0x73, 0x65, 0xe2, 0x02, 0x14, 0x4d, 0x69, 0x69, 0x76, 0x65, 0x72, 0x73, 0x65,
	0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x08, 0x4d,
	0x69, 0x69, 0x76, 0x65, 0x72, 0x73, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_miiverse_smm_request_post_id_rpc_proto_rawDescOnce sync.Once
	file_miiverse_smm_request_post_id_rpc_proto_rawDescData = file_miiverse_smm_request_post_id_rpc_proto_rawDesc
)

func file_miiverse_smm_request_post_id_rpc_proto_rawDescGZIP() []byte {
	file_miiverse_smm_request_post_id_rpc_proto_rawDescOnce.Do(func() {
		file_miiverse_smm_request_post_id_rpc_proto_rawDescData = protoimpl.X.CompressGZIP(file_miiverse_smm_request_post_id_rpc_proto_rawDescData)
	})
	return file_miiverse_smm_request_post_id_rpc_proto_rawDescData
}

var file_miiverse_smm_request_post_id_rpc_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_miiverse_smm_request_post_id_rpc_proto_goTypes = []any{
	(*SMMRequestPostIDRequest)(nil),  // 0: miiverse.SMMRequestPostIDRequest
	(*SMMRequestPostIDResponse)(nil), // 1: miiverse.SMMRequestPostIDResponse
}
var file_miiverse_smm_request_post_id_rpc_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_miiverse_smm_request_post_id_rpc_proto_init() }
func file_miiverse_smm_request_post_id_rpc_proto_init() {
	if File_miiverse_smm_request_post_id_rpc_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_miiverse_smm_request_post_id_rpc_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_miiverse_smm_request_post_id_rpc_proto_goTypes,
		DependencyIndexes: file_miiverse_smm_request_post_id_rpc_proto_depIdxs,
		MessageInfos:      file_miiverse_smm_request_post_id_rpc_proto_msgTypes,
	}.Build()
	File_miiverse_smm_request_post_id_rpc_proto = out.File
	file_miiverse_smm_request_post_id_rpc_proto_rawDesc = nil
	file_miiverse_smm_request_post_id_rpc_proto_goTypes = nil
	file_miiverse_smm_request_post_id_rpc_proto_depIdxs = nil
}