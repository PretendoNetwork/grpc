import { type CallContext, type CallOptions } from "nice-grpc-common";
import { DeleteAccountRequest, DeleteAccountResponse } from "./delete_account_rpc";
import { ForgotPasswordRequest, ForgotPasswordResponse } from "./forgot_password_rpc";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";
import { LoginRequest, LoginResponse } from "./login_rpc";
import { RegisterRequest, RegisterResponse } from "./register_rpc";
import { ResetPasswordRequest, ResetPasswordResponse } from "./reset_password_rpc";
import { SetDiscordConnectionDataRequest, SetDiscordConnectionDataResponse } from "./set_discord_connection_data_rpc";
import { SetStripeConnectionDataRequest, SetStripeConnectionDataResponse } from "./set_stripe_connection_data_rpc";
import { UpdateUserDataRequest, UpdateUserDataResponse } from "./update_user_data_rpc";
export declare const protobufPackage = "api.v2";
export type ApiServiceDefinition = typeof ApiServiceDefinition;
export declare const ApiServiceDefinition: {
    readonly name: "ApiService";
    readonly fullName: "api.v2.ApiService";
    readonly methods: {
        readonly register: {
            readonly name: "Register";
            readonly requestType: import("./register_rpc").MessageFns<RegisterRequest>;
            readonly requestStream: false;
            readonly responseType: import("./register_rpc").MessageFns<RegisterResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly login: {
            readonly name: "Login";
            readonly requestType: import("./login_rpc").MessageFns<LoginRequest>;
            readonly requestStream: false;
            readonly responseType: import("./login_rpc").MessageFns<LoginResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getUserData: {
            readonly name: "GetUserData";
            readonly requestType: import("./get_user_data_rpc").MessageFns<GetUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_data_rpc").MessageFns<GetUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updateUserData: {
            readonly name: "UpdateUserData";
            readonly requestType: import("./update_user_data_rpc").MessageFns<UpdateUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_user_data_rpc").MessageFns<UpdateUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly forgotPassword: {
            readonly name: "ForgotPassword";
            readonly requestType: import("./forgot_password_rpc").MessageFns<ForgotPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: import("./forgot_password_rpc").MessageFns<ForgotPasswordResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly resetPassword: {
            readonly name: "ResetPassword";
            readonly requestType: import("./reset_password_rpc").MessageFns<ResetPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: import("./reset_password_rpc").MessageFns<ResetPasswordResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly setDiscordConnectionData: {
            readonly name: "SetDiscordConnectionData";
            readonly requestType: import("./set_discord_connection_data_rpc").MessageFns<SetDiscordConnectionDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./set_discord_connection_data_rpc").MessageFns<SetDiscordConnectionDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly setStripeConnectionData: {
            readonly name: "SetStripeConnectionData";
            readonly requestType: import("./set_stripe_connection_data_rpc").MessageFns<SetStripeConnectionDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./set_stripe_connection_data_rpc").MessageFns<SetStripeConnectionDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly deleteAccount: {
            readonly name: "DeleteAccount";
            readonly requestType: import("./delete_account_rpc").MessageFns<DeleteAccountRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_account_rpc").MessageFns<DeleteAccountResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface ApiServiceImplementation<CallContextExt = {}> {
    register(request: RegisterRequest, context: CallContext & CallContextExt): Promise<DeepPartial<RegisterResponse>>;
    login(request: LoginRequest, context: CallContext & CallContextExt): Promise<DeepPartial<LoginResponse>>;
    getUserData(request: GetUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataResponse>>;
    updateUserData(request: UpdateUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateUserDataResponse>>;
    forgotPassword(request: ForgotPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ForgotPasswordResponse>>;
    resetPassword(request: ResetPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ResetPasswordResponse>>;
    setDiscordConnectionData(request: SetDiscordConnectionDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetDiscordConnectionDataResponse>>;
    setStripeConnectionData(request: SetStripeConnectionDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<SetStripeConnectionDataResponse>>;
    deleteAccount(request: DeleteAccountRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteAccountResponse>>;
}
export interface ApiServiceClient<CallOptionsExt = {}> {
    register(request: DeepPartial<RegisterRequest>, options?: CallOptions & CallOptionsExt): Promise<RegisterResponse>;
    login(request: DeepPartial<LoginRequest>, options?: CallOptions & CallOptionsExt): Promise<LoginResponse>;
    getUserData(request: DeepPartial<GetUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataResponse>;
    updateUserData(request: DeepPartial<UpdateUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateUserDataResponse>;
    forgotPassword(request: DeepPartial<ForgotPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<ForgotPasswordResponse>;
    resetPassword(request: DeepPartial<ResetPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<ResetPasswordResponse>;
    setDiscordConnectionData(request: DeepPartial<SetDiscordConnectionDataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetDiscordConnectionDataResponse>;
    setStripeConnectionData(request: DeepPartial<SetStripeConnectionDataRequest>, options?: CallOptions & CallOptionsExt): Promise<SetStripeConnectionDataResponse>;
    deleteAccount(request: DeepPartial<DeleteAccountRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteAccountResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
