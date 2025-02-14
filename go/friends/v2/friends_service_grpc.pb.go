// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: friends/v2/friends_service.proto

package friendsv2

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.64.0 or later.
const _ = grpc.SupportPackageIsVersion9

const (
	FriendsService_SendUserNotificationWiiU_FullMethodName      = "/friends.v2.FriendsService/SendUserNotificationWiiU"
	FriendsService_GetUserFriendPIDs_FullMethodName             = "/friends.v2.FriendsService/GetUserFriendPIDs"
	FriendsService_SendUserFriendRequest_FullMethodName         = "/friends.v2.FriendsService/SendUserFriendRequest"
	FriendsService_GetUserFriendRequestsIncoming_FullMethodName = "/friends.v2.FriendsService/GetUserFriendRequestsIncoming"
	FriendsService_AcceptFriendRequest_FullMethodName           = "/friends.v2.FriendsService/AcceptFriendRequest"
	FriendsService_DenyFriendRequest_FullMethodName             = "/friends.v2.FriendsService/DenyFriendRequest"
)

// FriendsServiceClient is the client API for FriendsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FriendsServiceClient interface {
	SendUserNotificationWiiU(ctx context.Context, in *SendUserNotificationWiiURequest, opts ...grpc.CallOption) (*SendUserNotificationWiiUResponse, error)
	GetUserFriendPIDs(ctx context.Context, in *GetUserFriendPIDsRequest, opts ...grpc.CallOption) (*GetUserFriendPIDsResponse, error)
	SendUserFriendRequest(ctx context.Context, in *SendUserFriendRequestRequest, opts ...grpc.CallOption) (*SendUserFriendRequestResponse, error)
	GetUserFriendRequestsIncoming(ctx context.Context, in *GetUserFriendRequestsIncomingRequest, opts ...grpc.CallOption) (*GetUserFriendRequestsIncomingResponse, error)
	AcceptFriendRequest(ctx context.Context, in *AcceptFriendRequestRequest, opts ...grpc.CallOption) (*AcceptFriendRequestResponse, error)
	DenyFriendRequest(ctx context.Context, in *DenyFriendRequestRequest, opts ...grpc.CallOption) (*DenyFriendRequestResponse, error)
}

type friendsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFriendsServiceClient(cc grpc.ClientConnInterface) FriendsServiceClient {
	return &friendsServiceClient{cc}
}

func (c *friendsServiceClient) SendUserNotificationWiiU(ctx context.Context, in *SendUserNotificationWiiURequest, opts ...grpc.CallOption) (*SendUserNotificationWiiUResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(SendUserNotificationWiiUResponse)
	err := c.cc.Invoke(ctx, FriendsService_SendUserNotificationWiiU_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *friendsServiceClient) GetUserFriendPIDs(ctx context.Context, in *GetUserFriendPIDsRequest, opts ...grpc.CallOption) (*GetUserFriendPIDsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetUserFriendPIDsResponse)
	err := c.cc.Invoke(ctx, FriendsService_GetUserFriendPIDs_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *friendsServiceClient) SendUserFriendRequest(ctx context.Context, in *SendUserFriendRequestRequest, opts ...grpc.CallOption) (*SendUserFriendRequestResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(SendUserFriendRequestResponse)
	err := c.cc.Invoke(ctx, FriendsService_SendUserFriendRequest_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *friendsServiceClient) GetUserFriendRequestsIncoming(ctx context.Context, in *GetUserFriendRequestsIncomingRequest, opts ...grpc.CallOption) (*GetUserFriendRequestsIncomingResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetUserFriendRequestsIncomingResponse)
	err := c.cc.Invoke(ctx, FriendsService_GetUserFriendRequestsIncoming_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *friendsServiceClient) AcceptFriendRequest(ctx context.Context, in *AcceptFriendRequestRequest, opts ...grpc.CallOption) (*AcceptFriendRequestResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(AcceptFriendRequestResponse)
	err := c.cc.Invoke(ctx, FriendsService_AcceptFriendRequest_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *friendsServiceClient) DenyFriendRequest(ctx context.Context, in *DenyFriendRequestRequest, opts ...grpc.CallOption) (*DenyFriendRequestResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(DenyFriendRequestResponse)
	err := c.cc.Invoke(ctx, FriendsService_DenyFriendRequest_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FriendsServiceServer is the server API for FriendsService service.
// All implementations must embed UnimplementedFriendsServiceServer
// for forward compatibility.
type FriendsServiceServer interface {
	SendUserNotificationWiiU(context.Context, *SendUserNotificationWiiURequest) (*SendUserNotificationWiiUResponse, error)
	GetUserFriendPIDs(context.Context, *GetUserFriendPIDsRequest) (*GetUserFriendPIDsResponse, error)
	SendUserFriendRequest(context.Context, *SendUserFriendRequestRequest) (*SendUserFriendRequestResponse, error)
	GetUserFriendRequestsIncoming(context.Context, *GetUserFriendRequestsIncomingRequest) (*GetUserFriendRequestsIncomingResponse, error)
	AcceptFriendRequest(context.Context, *AcceptFriendRequestRequest) (*AcceptFriendRequestResponse, error)
	DenyFriendRequest(context.Context, *DenyFriendRequestRequest) (*DenyFriendRequestResponse, error)
	mustEmbedUnimplementedFriendsServiceServer()
}

// UnimplementedFriendsServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedFriendsServiceServer struct{}

func (UnimplementedFriendsServiceServer) SendUserNotificationWiiU(context.Context, *SendUserNotificationWiiURequest) (*SendUserNotificationWiiUResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendUserNotificationWiiU not implemented")
}
func (UnimplementedFriendsServiceServer) GetUserFriendPIDs(context.Context, *GetUserFriendPIDsRequest) (*GetUserFriendPIDsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserFriendPIDs not implemented")
}
func (UnimplementedFriendsServiceServer) SendUserFriendRequest(context.Context, *SendUserFriendRequestRequest) (*SendUserFriendRequestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendUserFriendRequest not implemented")
}
func (UnimplementedFriendsServiceServer) GetUserFriendRequestsIncoming(context.Context, *GetUserFriendRequestsIncomingRequest) (*GetUserFriendRequestsIncomingResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserFriendRequestsIncoming not implemented")
}
func (UnimplementedFriendsServiceServer) AcceptFriendRequest(context.Context, *AcceptFriendRequestRequest) (*AcceptFriendRequestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AcceptFriendRequest not implemented")
}
func (UnimplementedFriendsServiceServer) DenyFriendRequest(context.Context, *DenyFriendRequestRequest) (*DenyFriendRequestResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DenyFriendRequest not implemented")
}
func (UnimplementedFriendsServiceServer) mustEmbedUnimplementedFriendsServiceServer() {}
func (UnimplementedFriendsServiceServer) testEmbeddedByValue()                        {}

// UnsafeFriendsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FriendsServiceServer will
// result in compilation errors.
type UnsafeFriendsServiceServer interface {
	mustEmbedUnimplementedFriendsServiceServer()
}

func RegisterFriendsServiceServer(s grpc.ServiceRegistrar, srv FriendsServiceServer) {
	// If the following call pancis, it indicates UnimplementedFriendsServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&FriendsService_ServiceDesc, srv)
}

func _FriendsService_SendUserNotificationWiiU_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendUserNotificationWiiURequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FriendsServiceServer).SendUserNotificationWiiU(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FriendsService_SendUserNotificationWiiU_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FriendsServiceServer).SendUserNotificationWiiU(ctx, req.(*SendUserNotificationWiiURequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FriendsService_GetUserFriendPIDs_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserFriendPIDsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FriendsServiceServer).GetUserFriendPIDs(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FriendsService_GetUserFriendPIDs_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FriendsServiceServer).GetUserFriendPIDs(ctx, req.(*GetUserFriendPIDsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FriendsService_SendUserFriendRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendUserFriendRequestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FriendsServiceServer).SendUserFriendRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FriendsService_SendUserFriendRequest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FriendsServiceServer).SendUserFriendRequest(ctx, req.(*SendUserFriendRequestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FriendsService_GetUserFriendRequestsIncoming_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserFriendRequestsIncomingRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FriendsServiceServer).GetUserFriendRequestsIncoming(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FriendsService_GetUserFriendRequestsIncoming_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FriendsServiceServer).GetUserFriendRequestsIncoming(ctx, req.(*GetUserFriendRequestsIncomingRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FriendsService_AcceptFriendRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AcceptFriendRequestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FriendsServiceServer).AcceptFriendRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FriendsService_AcceptFriendRequest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FriendsServiceServer).AcceptFriendRequest(ctx, req.(*AcceptFriendRequestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FriendsService_DenyFriendRequest_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DenyFriendRequestRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FriendsServiceServer).DenyFriendRequest(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: FriendsService_DenyFriendRequest_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FriendsServiceServer).DenyFriendRequest(ctx, req.(*DenyFriendRequestRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// FriendsService_ServiceDesc is the grpc.ServiceDesc for FriendsService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FriendsService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "friends.v2.FriendsService",
	HandlerType: (*FriendsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SendUserNotificationWiiU",
			Handler:    _FriendsService_SendUserNotificationWiiU_Handler,
		},
		{
			MethodName: "GetUserFriendPIDs",
			Handler:    _FriendsService_GetUserFriendPIDs_Handler,
		},
		{
			MethodName: "SendUserFriendRequest",
			Handler:    _FriendsService_SendUserFriendRequest_Handler,
		},
		{
			MethodName: "GetUserFriendRequestsIncoming",
			Handler:    _FriendsService_GetUserFriendRequestsIncoming_Handler,
		},
		{
			MethodName: "AcceptFriendRequest",
			Handler:    _FriendsService_AcceptFriendRequest_Handler,
		},
		{
			MethodName: "DenyFriendRequest",
			Handler:    _FriendsService_DenyFriendRequest_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "friends/v2/friends_service.proto",
}
