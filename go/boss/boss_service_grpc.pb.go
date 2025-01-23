// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: boss/boss_service.proto

package boss

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	emptypb "google.golang.org/protobuf/types/known/emptypb"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	BOSS_ListKnownBOSSApps_FullMethodName  = "/boss.BOSS/ListKnownBOSSApps"
	BOSS_ListTasks_FullMethodName          = "/boss.BOSS/ListTasks"
	BOSS_RegisterTask_FullMethodName       = "/boss.BOSS/RegisterTask"
	BOSS_UpdateTask_FullMethodName         = "/boss.BOSS/UpdateTask"
	BOSS_DeleteTask_FullMethodName         = "/boss.BOSS/DeleteTask"
	BOSS_ListFiles_FullMethodName          = "/boss.BOSS/ListFiles"
	BOSS_UploadFile_FullMethodName         = "/boss.BOSS/UploadFile"
	BOSS_UpdateFileMetadata_FullMethodName = "/boss.BOSS/UpdateFileMetadata"
	BOSS_DeleteFile_FullMethodName         = "/boss.BOSS/DeleteFile"
)

// BOSSClient is the client API for BOSS service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type BOSSClient interface {
	ListKnownBOSSApps(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListKnownBOSSAppsResponse, error)
	ListTasks(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListTasksResponse, error)
	RegisterTask(ctx context.Context, in *RegisterTaskRequest, opts ...grpc.CallOption) (*RegisterTaskResponse, error)
	UpdateTask(ctx context.Context, in *UpdateTaskRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	DeleteTask(ctx context.Context, in *DeleteTaskRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	ListFiles(ctx context.Context, in *ListFilesRequest, opts ...grpc.CallOption) (*ListFilesResponse, error)
	UploadFile(ctx context.Context, in *UploadFileRequest, opts ...grpc.CallOption) (*UploadFileResponse, error)
	UpdateFileMetadata(ctx context.Context, in *UpdateFileMetadataRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
	DeleteFile(ctx context.Context, in *DeleteFileRequest, opts ...grpc.CallOption) (*emptypb.Empty, error)
}

type bOSSClient struct {
	cc grpc.ClientConnInterface
}

func NewBOSSClient(cc grpc.ClientConnInterface) BOSSClient {
	return &bOSSClient{cc}
}

func (c *bOSSClient) ListKnownBOSSApps(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListKnownBOSSAppsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListKnownBOSSAppsResponse)
	err := c.cc.Invoke(ctx, BOSS_ListKnownBOSSApps_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) ListTasks(ctx context.Context, in *emptypb.Empty, opts ...grpc.CallOption) (*ListTasksResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListTasksResponse)
	err := c.cc.Invoke(ctx, BOSS_ListTasks_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) RegisterTask(ctx context.Context, in *RegisterTaskRequest, opts ...grpc.CallOption) (*RegisterTaskResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(RegisterTaskResponse)
	err := c.cc.Invoke(ctx, BOSS_RegisterTask_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) UpdateTask(ctx context.Context, in *UpdateTaskRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, BOSS_UpdateTask_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) DeleteTask(ctx context.Context, in *DeleteTaskRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, BOSS_DeleteTask_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) ListFiles(ctx context.Context, in *ListFilesRequest, opts ...grpc.CallOption) (*ListFilesResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ListFilesResponse)
	err := c.cc.Invoke(ctx, BOSS_ListFiles_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) UploadFile(ctx context.Context, in *UploadFileRequest, opts ...grpc.CallOption) (*UploadFileResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UploadFileResponse)
	err := c.cc.Invoke(ctx, BOSS_UploadFile_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) UpdateFileMetadata(ctx context.Context, in *UpdateFileMetadataRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, BOSS_UpdateFileMetadata_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *bOSSClient) DeleteFile(ctx context.Context, in *DeleteFileRequest, opts ...grpc.CallOption) (*emptypb.Empty, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(emptypb.Empty)
	err := c.cc.Invoke(ctx, BOSS_DeleteFile_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// BOSSServer is the server API for BOSS service.
// All implementations must embed UnimplementedBOSSServer
// for forward compatibility.
type BOSSServer interface {
	ListKnownBOSSApps(context.Context, *emptypb.Empty) (*ListKnownBOSSAppsResponse, error)
	ListTasks(context.Context, *emptypb.Empty) (*ListTasksResponse, error)
	RegisterTask(context.Context, *RegisterTaskRequest) (*RegisterTaskResponse, error)
	UpdateTask(context.Context, *UpdateTaskRequest) (*emptypb.Empty, error)
	DeleteTask(context.Context, *DeleteTaskRequest) (*emptypb.Empty, error)
	ListFiles(context.Context, *ListFilesRequest) (*ListFilesResponse, error)
	UploadFile(context.Context, *UploadFileRequest) (*UploadFileResponse, error)
	UpdateFileMetadata(context.Context, *UpdateFileMetadataRequest) (*emptypb.Empty, error)
	DeleteFile(context.Context, *DeleteFileRequest) (*emptypb.Empty, error)
	mustEmbedUnimplementedBOSSServer()
}

// UnimplementedBOSSServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedBOSSServer struct{}

func (UnimplementedBOSSServer) ListKnownBOSSApps(context.Context, *emptypb.Empty) (*ListKnownBOSSAppsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListKnownBOSSApps not implemented")
}
func (UnimplementedBOSSServer) ListTasks(context.Context, *emptypb.Empty) (*ListTasksResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListTasks not implemented")
}
func (UnimplementedBOSSServer) RegisterTask(context.Context, *RegisterTaskRequest) (*RegisterTaskResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterTask not implemented")
}
func (UnimplementedBOSSServer) UpdateTask(context.Context, *UpdateTaskRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateTask not implemented")
}
func (UnimplementedBOSSServer) DeleteTask(context.Context, *DeleteTaskRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteTask not implemented")
}
func (UnimplementedBOSSServer) ListFiles(context.Context, *ListFilesRequest) (*ListFilesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListFiles not implemented")
}
func (UnimplementedBOSSServer) UploadFile(context.Context, *UploadFileRequest) (*UploadFileResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UploadFile not implemented")
}
func (UnimplementedBOSSServer) UpdateFileMetadata(context.Context, *UpdateFileMetadataRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateFileMetadata not implemented")
}
func (UnimplementedBOSSServer) DeleteFile(context.Context, *DeleteFileRequest) (*emptypb.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFile not implemented")
}
func (UnimplementedBOSSServer) mustEmbedUnimplementedBOSSServer() {}
func (UnimplementedBOSSServer) testEmbeddedByValue()              {}

// UnsafeBOSSServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to BOSSServer will
// result in compilation errors.
type UnsafeBOSSServer interface {
	mustEmbedUnimplementedBOSSServer()
}

func RegisterBOSSServer(s grpc.ServiceRegistrar, srv BOSSServer) {
	// If the following call pancis, it indicates UnimplementedBOSSServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&BOSS_ServiceDesc, srv)
}

func _BOSS_ListKnownBOSSApps_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).ListKnownBOSSApps(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_ListKnownBOSSApps_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).ListKnownBOSSApps(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_ListTasks_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(emptypb.Empty)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).ListTasks(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_ListTasks_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).ListTasks(ctx, req.(*emptypb.Empty))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_RegisterTask_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).RegisterTask(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_RegisterTask_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).RegisterTask(ctx, req.(*RegisterTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_UpdateTask_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).UpdateTask(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_UpdateTask_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).UpdateTask(ctx, req.(*UpdateTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_DeleteTask_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).DeleteTask(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_DeleteTask_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).DeleteTask(ctx, req.(*DeleteTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_ListFiles_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListFilesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).ListFiles(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_ListFiles_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).ListFiles(ctx, req.(*ListFilesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_UploadFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UploadFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).UploadFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_UploadFile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).UploadFile(ctx, req.(*UploadFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_UpdateFileMetadata_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateFileMetadataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).UpdateFileMetadata(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_UpdateFileMetadata_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).UpdateFileMetadata(ctx, req.(*UpdateFileMetadataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _BOSS_DeleteFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(BOSSServer).DeleteFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: BOSS_DeleteFile_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(BOSSServer).DeleteFile(ctx, req.(*DeleteFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// BOSS_ServiceDesc is the grpc.ServiceDesc for BOSS service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var BOSS_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "boss.BOSS",
	HandlerType: (*BOSSServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListKnownBOSSApps",
			Handler:    _BOSS_ListKnownBOSSApps_Handler,
		},
		{
			MethodName: "ListTasks",
			Handler:    _BOSS_ListTasks_Handler,
		},
		{
			MethodName: "RegisterTask",
			Handler:    _BOSS_RegisterTask_Handler,
		},
		{
			MethodName: "UpdateTask",
			Handler:    _BOSS_UpdateTask_Handler,
		},
		{
			MethodName: "DeleteTask",
			Handler:    _BOSS_DeleteTask_Handler,
		},
		{
			MethodName: "ListFiles",
			Handler:    _BOSS_ListFiles_Handler,
		},
		{
			MethodName: "UploadFile",
			Handler:    _BOSS_UploadFile_Handler,
		},
		{
			MethodName: "UpdateFileMetadata",
			Handler:    _BOSS_UpdateFileMetadata_Handler,
		},
		{
			MethodName: "DeleteFile",
			Handler:    _BOSS_DeleteFile_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "boss/boss_service.proto",
}
