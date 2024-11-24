// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: api/v2/api_service.proto

/* eslint-disable */
import { type CallContext, type CallOptions } from "nice-grpc-common";
import { ForgotPasswordRequest, ForgotPasswordResponse } from "./forgot_password_rpc";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";
import { LoginRequest, LoginResponse } from "./login_rpc";
import { RegisterRequest, RegisterResponse } from "./register_rpc";
import { ResetPasswordRequest, ResetPasswordResponse } from "./reset_password_rpc";
import { SetDiscordConnectionDataRequest, SetDiscordConnectionDataResponse } from "./set_discord_connection_data_rpc";
import { SetStripeConnectionDataRequest, SetStripeConnectionDataResponse } from "./set_stripe_connection_data_rpc";
import { UpdateUserDataRequest, UpdateUserDataResponse } from "./update_user_data_rpc";

export const protobufPackage = "api.v2";

export type ApiServiceDefinition = typeof ApiServiceDefinition;
export const ApiServiceDefinition = {
  name: "ApiService",
  fullName: "api.v2.ApiService",
  methods: {
    register: {
      name: "Register",
      requestType: RegisterRequest,
      requestStream: false,
      responseType: RegisterResponse,
      responseStream: false,
      options: {},
    },
    login: {
      name: "Login",
      requestType: LoginRequest,
      requestStream: false,
      responseType: LoginResponse,
      responseStream: false,
      options: {},
    },
    getUserData: {
      name: "GetUserData",
      requestType: GetUserDataRequest,
      requestStream: false,
      responseType: GetUserDataResponse,
      responseStream: false,
      options: {},
    },
    updateUserData: {
      name: "UpdateUserData",
      requestType: UpdateUserDataRequest,
      requestStream: false,
      responseType: UpdateUserDataResponse,
      responseStream: false,
      options: {},
    },
    forgotPassword: {
      name: "ForgotPassword",
      requestType: ForgotPasswordRequest,
      requestStream: false,
      responseType: ForgotPasswordResponse,
      responseStream: false,
      options: {},
    },
    resetPassword: {
      name: "ResetPassword",
      requestType: ResetPasswordRequest,
      requestStream: false,
      responseType: ResetPasswordResponse,
      responseStream: false,
      options: {},
    },
    setDiscordConnectionData: {
      name: "SetDiscordConnectionData",
      requestType: SetDiscordConnectionDataRequest,
      requestStream: false,
      responseType: SetDiscordConnectionDataResponse,
      responseStream: false,
      options: {},
    },
    setStripeConnectionData: {
      name: "SetStripeConnectionData",
      requestType: SetStripeConnectionDataRequest,
      requestStream: false,
      responseType: SetStripeConnectionDataResponse,
      responseStream: false,
      options: {},
    },
  },
} as const;

export interface ApiServiceImplementation<CallContextExt = {}> {
  register(request: RegisterRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterResponse>>;
  login(request: LoginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
  getUserData(
    request: GetUserDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<GetUserDataResponse>>;
  updateUserData(
    request: UpdateUserDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<UpdateUserDataResponse>>;
  forgotPassword(
    request: ForgotPasswordRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ForgotPasswordResponse>>;
  resetPassword(
    request: ResetPasswordRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<ResetPasswordResponse>>;
  setDiscordConnectionData(
    request: SetDiscordConnectionDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SetDiscordConnectionDataResponse>>;
  setStripeConnectionData(
    request: SetStripeConnectionDataRequest,
    context: CallContext & CallContextExt,
  ): Promise<DeepPartial<SetStripeConnectionDataResponse>>;
}

export interface ApiServiceClient<CallOptionsExt = {}> {
  register(request: DeepPartial<RegisterRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterResponse>;
  login(request: DeepPartial<LoginRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
  getUserData(
    request: DeepPartial<GetUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<GetUserDataResponse>;
  updateUserData(
    request: DeepPartial<UpdateUserDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<UpdateUserDataResponse>;
  forgotPassword(
    request: DeepPartial<ForgotPasswordRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ForgotPasswordResponse>;
  resetPassword(
    request: DeepPartial<ResetPasswordRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<ResetPasswordResponse>;
  setDiscordConnectionData(
    request: DeepPartial<SetDiscordConnectionDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SetDiscordConnectionDataResponse>;
  setStripeConnectionData(
    request: DeepPartial<SetStripeConnectionDataRequest>,
    options?: CallOptions & CallOptionsExt,
  ): Promise<SetStripeConnectionDataResponse>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;