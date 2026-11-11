import type { CallContext, CallOptions } from "nice-grpc-common";
import { Empty } from "../google/protobuf/empty";
import { ExchangeTokenForUserDataRequest } from "./exchange_token_for_user_data";
import { GetNEXDataRequest, GetNEXDataResponse } from "./get_nex_data_rpc";
import { GetNEXPasswordRequest, GetNEXPasswordResponse } from "./get_nex_password_rpc";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";
import { UpdatePNIDPermissionsRequest } from "./update_pnid_permissions";
export declare const protobufPackage = "account";
export declare const protobufFileName = "account/account_service.proto";
export type AccountDefinition = typeof AccountDefinition;
export declare const AccountDefinition: {
    readonly name: "Account";
    readonly fullName: "account.Account";
    readonly methods: {
        readonly getUserData: {
            readonly name: "GetUserData";
            readonly requestType: typeof GetUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNEXPassword: {
            readonly name: "GetNEXPassword";
            readonly requestType: typeof GetNEXPasswordRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetNEXPasswordResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNEXData: {
            readonly name: "GetNEXData";
            readonly requestType: typeof GetNEXDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetNEXDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updatePNIDPermissions: {
            readonly name: "UpdatePNIDPermissions";
            readonly requestType: typeof UpdatePNIDPermissionsRequest;
            readonly requestStream: false;
            readonly responseType: typeof Empty;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly exchangeTokenForUserData: {
            readonly name: "ExchangeTokenForUserData";
            readonly requestType: typeof ExchangeTokenForUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface AccountServiceImplementation<CallContextExt = {}> {
    getUserData(request: GetUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataResponse>>;
    getNEXPassword(request: GetNEXPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNEXPasswordResponse>>;
    getNEXData(request: GetNEXDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNEXDataResponse>>;
    updatePNIDPermissions(request: UpdatePNIDPermissionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<Empty>>;
    exchangeTokenForUserData(request: ExchangeTokenForUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataResponse>>;
}
export interface AccountClient<CallOptionsExt = {}> {
    getUserData(request: DeepPartial<GetUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataResponse>;
    getNEXPassword(request: DeepPartial<GetNEXPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNEXPasswordResponse>;
    getNEXData(request: DeepPartial<GetNEXDataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNEXDataResponse>;
    updatePNIDPermissions(request: DeepPartial<UpdatePNIDPermissionsRequest>, options?: CallOptions & CallOptionsExt): Promise<Empty>;
    exchangeTokenForUserData(request: DeepPartial<ExchangeTokenForUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends bigint ? string | number | bigint : T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
