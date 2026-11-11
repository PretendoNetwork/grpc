import type { CallContext, CallOptions } from "nice-grpc-common";
import { Empty } from "../google/protobuf/empty";
import { ForgotPasswordRequest } from "./forgot_password_rpc";
import { GetUserDataResponse } from "./get_user_data_rpc";
import { LoginRequest, LoginResponse } from "./login_rpc";
import { RegisterRequest } from "./register_rpc";
import { ResetPasswordRequest } from "./reset_password_rpc";
import { SetDiscordConnectionDataRequest } from "./set_discord_connection_data_rpc";
import { SetStripeConnectionDataRequest } from "./set_stripe_connection_data_rpc";
import { UpdateUserDataRequest } from "./update_user_data_rpc";
export declare const protobufPackage = "api";
export declare const protobufFileName = "api/api_service.proto";
export type APIDefinition = typeof APIDefinition;
export declare const APIDefinition: {
    readonly name: "API";
    readonly fullName: "api.API";
    readonly methods: {
        readonly register: {
            readonly name: "Register";
            readonly requestType: typeof RegisterRequest;
            readonly requestStream: false;
            readonly responseType: typeof LoginResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly login: {
            readonly name: "Login";
            readonly requestType: typeof LoginRequest;
            readonly requestStream: false;
            readonly responseType: typeof LoginResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserData: {
            readonly name: "GetUserData";
            readonly requestType: typeof Empty;
            readonly requestStream: false;
            readonly responseType: typeof GetUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateUserData: {
            readonly name: "UpdateUserData";
            readonly requestType: typeof UpdateUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly forgotPassword: {
            readonly name: "ForgotPassword";
            readonly requestType: typeof ForgotPasswordRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly resetPassword: {
            readonly name: "ResetPassword";
            readonly requestType: typeof ResetPasswordRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly setDiscordConnectionData: {
            readonly name: "SetDiscordConnectionData";
            readonly requestType: typeof SetDiscordConnectionDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly setStripeConnectionData: {
            readonly name: "SetStripeConnectionData";
            readonly requestType: typeof SetStripeConnectionDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface APIServiceImplementation<CallContextExt = {}> {
    register(request: RegisterRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
    login(request: LoginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
    getUserData(request: Empty, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataResponse>>;
    updateUserData(request: UpdateUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataResponse>>;
    forgotPassword(request: ForgotPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    resetPassword(request: ResetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    setDiscordConnectionData(request: SetDiscordConnectionDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    setStripeConnectionData(request: SetStripeConnectionDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
}
export interface APIClient<CallOptionsExt = {}> {
    register(request: DeepPartial<RegisterRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
    login(request: DeepPartial<LoginRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
    getUserData(request: DeepPartial<Empty>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataResponse>;
    updateUserData(request: DeepPartial<UpdateUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataResponse>;
    forgotPassword(request: DeepPartial<ForgotPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    resetPassword(request: DeepPartial<ResetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    setDiscordConnectionData(request: DeepPartial<SetDiscordConnectionDataRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    setStripeConnectionData(request: DeepPartial<SetStripeConnectionDataRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends bigint ? string | number | bigint : T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
