// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.5.1
// - protoc             (unknown)
// source: account/v2/account_service.proto

package accountv2

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
	AccountService_GetUserData_FullMethodName              = "/account.v2.AccountService/GetUserData"
	AccountService_GetNEXPassword_FullMethodName           = "/account.v2.AccountService/GetNEXPassword"
	AccountService_GetNEXData_FullMethodName               = "/account.v2.AccountService/GetNEXData"
	AccountService_UpdatePNIDPermissions_FullMethodName    = "/account.v2.AccountService/UpdatePNIDPermissions"
	AccountService_ExchangeTokenForUserData_FullMethodName = "/account.v2.AccountService/ExchangeTokenForUserData"
)

// AccountServiceClient is the client API for AccountService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AccountServiceClient interface {
	GetUserData(ctx context.Context, in *GetUserDataRequest, opts ...grpc.CallOption) (*GetUserDataResponse, error)
	GetNEXPassword(ctx context.Context, in *GetNEXPasswordRequest, opts ...grpc.CallOption) (*GetNEXPasswordResponse, error)
	GetNEXData(ctx context.Context, in *GetNEXDataRequest, opts ...grpc.CallOption) (*GetNEXDataResponse, error)
	UpdatePNIDPermissions(ctx context.Context, in *UpdatePNIDPermissionsRequest, opts ...grpc.CallOption) (*UpdatePNIDPermissionsResponse, error)
	ExchangeTokenForUserData(ctx context.Context, in *ExchangeTokenForUserDataRequest, opts ...grpc.CallOption) (*ExchangeTokenForUserDataResponse, error)
}

type accountServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAccountServiceClient(cc grpc.ClientConnInterface) AccountServiceClient {
	return &accountServiceClient{cc}
}

func (c *accountServiceClient) GetUserData(ctx context.Context, in *GetUserDataRequest, opts ...grpc.CallOption) (*GetUserDataResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetUserDataResponse)
	err := c.cc.Invoke(ctx, AccountService_GetUserData_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountServiceClient) GetNEXPassword(ctx context.Context, in *GetNEXPasswordRequest, opts ...grpc.CallOption) (*GetNEXPasswordResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetNEXPasswordResponse)
	err := c.cc.Invoke(ctx, AccountService_GetNEXPassword_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountServiceClient) GetNEXData(ctx context.Context, in *GetNEXDataRequest, opts ...grpc.CallOption) (*GetNEXDataResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(GetNEXDataResponse)
	err := c.cc.Invoke(ctx, AccountService_GetNEXData_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountServiceClient) UpdatePNIDPermissions(ctx context.Context, in *UpdatePNIDPermissionsRequest, opts ...grpc.CallOption) (*UpdatePNIDPermissionsResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(UpdatePNIDPermissionsResponse)
	err := c.cc.Invoke(ctx, AccountService_UpdatePNIDPermissions_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *accountServiceClient) ExchangeTokenForUserData(ctx context.Context, in *ExchangeTokenForUserDataRequest, opts ...grpc.CallOption) (*ExchangeTokenForUserDataResponse, error) {
	cOpts := append([]grpc.CallOption{grpc.StaticMethod()}, opts...)
	out := new(ExchangeTokenForUserDataResponse)
	err := c.cc.Invoke(ctx, AccountService_ExchangeTokenForUserData_FullMethodName, in, out, cOpts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AccountServiceServer is the server API for AccountService service.
// All implementations must embed UnimplementedAccountServiceServer
// for forward compatibility.
type AccountServiceServer interface {
	GetUserData(context.Context, *GetUserDataRequest) (*GetUserDataResponse, error)
	GetNEXPassword(context.Context, *GetNEXPasswordRequest) (*GetNEXPasswordResponse, error)
	GetNEXData(context.Context, *GetNEXDataRequest) (*GetNEXDataResponse, error)
	UpdatePNIDPermissions(context.Context, *UpdatePNIDPermissionsRequest) (*UpdatePNIDPermissionsResponse, error)
	ExchangeTokenForUserData(context.Context, *ExchangeTokenForUserDataRequest) (*ExchangeTokenForUserDataResponse, error)
	mustEmbedUnimplementedAccountServiceServer()
}

// UnimplementedAccountServiceServer must be embedded to have
// forward compatible implementations.
//
// NOTE: this should be embedded by value instead of pointer to avoid a nil
// pointer dereference when methods are called.
type UnimplementedAccountServiceServer struct{}

func (UnimplementedAccountServiceServer) GetUserData(context.Context, *GetUserDataRequest) (*GetUserDataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserData not implemented")
}
func (UnimplementedAccountServiceServer) GetNEXPassword(context.Context, *GetNEXPasswordRequest) (*GetNEXPasswordResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNEXPassword not implemented")
}
func (UnimplementedAccountServiceServer) GetNEXData(context.Context, *GetNEXDataRequest) (*GetNEXDataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetNEXData not implemented")
}
func (UnimplementedAccountServiceServer) UpdatePNIDPermissions(context.Context, *UpdatePNIDPermissionsRequest) (*UpdatePNIDPermissionsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdatePNIDPermissions not implemented")
}
func (UnimplementedAccountServiceServer) ExchangeTokenForUserData(context.Context, *ExchangeTokenForUserDataRequest) (*ExchangeTokenForUserDataResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ExchangeTokenForUserData not implemented")
}
func (UnimplementedAccountServiceServer) mustEmbedUnimplementedAccountServiceServer() {}
func (UnimplementedAccountServiceServer) testEmbeddedByValue()                        {}

// UnsafeAccountServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AccountServiceServer will
// result in compilation errors.
type UnsafeAccountServiceServer interface {
	mustEmbedUnimplementedAccountServiceServer()
}

func RegisterAccountServiceServer(s grpc.ServiceRegistrar, srv AccountServiceServer) {
	// If the following call pancis, it indicates UnimplementedAccountServiceServer was
	// embedded by pointer and is nil.  This will cause panics if an
	// unimplemented method is ever invoked, so we test this at initialization
	// time to prevent it from happening at runtime later due to I/O.
	if t, ok := srv.(interface{ testEmbeddedByValue() }); ok {
		t.testEmbeddedByValue()
	}
	s.RegisterService(&AccountService_ServiceDesc, srv)
}

func _AccountService_GetUserData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetUserDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).GetUserData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountService_GetUserData_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).GetUserData(ctx, req.(*GetUserDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountService_GetNEXPassword_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNEXPasswordRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).GetNEXPassword(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountService_GetNEXPassword_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).GetNEXPassword(ctx, req.(*GetNEXPasswordRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountService_GetNEXData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetNEXDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).GetNEXData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountService_GetNEXData_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).GetNEXData(ctx, req.(*GetNEXDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountService_UpdatePNIDPermissions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdatePNIDPermissionsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).UpdatePNIDPermissions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountService_UpdatePNIDPermissions_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).UpdatePNIDPermissions(ctx, req.(*UpdatePNIDPermissionsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AccountService_ExchangeTokenForUserData_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExchangeTokenForUserDataRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AccountServiceServer).ExchangeTokenForUserData(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AccountService_ExchangeTokenForUserData_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AccountServiceServer).ExchangeTokenForUserData(ctx, req.(*ExchangeTokenForUserDataRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AccountService_ServiceDesc is the grpc.ServiceDesc for AccountService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AccountService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "account.v2.AccountService",
	HandlerType: (*AccountServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetUserData",
			Handler:    _AccountService_GetUserData_Handler,
		},
		{
			MethodName: "GetNEXPassword",
			Handler:    _AccountService_GetNEXPassword_Handler,
		},
		{
			MethodName: "GetNEXData",
			Handler:    _AccountService_GetNEXData_Handler,
		},
		{
			MethodName: "UpdatePNIDPermissions",
			Handler:    _AccountService_UpdatePNIDPermissions_Handler,
		},
		{
			MethodName: "ExchangeTokenForUserData",
			Handler:    _AccountService_ExchangeTokenForUserData_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "account/v2/account_service.proto",
}
