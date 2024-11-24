import { type CallContext, type CallOptions } from "nice-grpc-common";
import { Empty } from "../google/protobuf/empty";
import { ExchangeTokenForUserDataRequest } from "./exchange_token_for_user_data";
import { GetNEXDataRequest, GetNEXDataResponse } from "./get_nex_data_rpc";
import { GetNEXPasswordRequest, GetNEXPasswordResponse } from "./get_nex_password_rpc";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";
import { UpdatePNIDPermissionsRequest } from "./update_pnid_permissions";
export declare const protobufPackage = "account";
export type AccountDefinition = typeof AccountDefinition;
export declare const AccountDefinition: {
    readonly name: "Account";
    readonly fullName: "account.Account";
    readonly methods: {
        readonly getUserData: {
            readonly name: "GetUserData";
            readonly requestType: import("./get_user_data_rpc").MessageFns<GetUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_data_rpc").MessageFns<GetUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNEXPassword: {
            readonly name: "GetNEXPassword";
            readonly requestType: import("./get_nex_password_rpc").MessageFns<GetNEXPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_nex_password_rpc").MessageFns<GetNEXPasswordResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly getNEXData: {
            readonly name: "GetNEXData";
            readonly requestType: import("./get_nex_data_rpc").MessageFns<GetNEXDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_nex_data_rpc").MessageFns<GetNEXDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly updatePNIDPermissions: {
            readonly name: "UpdatePNIDPermissions";
            readonly requestType: import("./update_pnid_permissions").MessageFns<UpdatePNIDPermissionsRequest>;
            readonly requestStream: false;
            readonly responseType: import("../google/protobuf/empty").MessageFns<Empty>;
            readonly responseStream: false;
            readonly options: {};
        };
        readonly exchangeTokenForUserData: {
            readonly name: "ExchangeTokenForUserData";
            readonly requestType: import("./exchange_token_for_user_data").MessageFns<ExchangeTokenForUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_data_rpc").MessageFns<GetUserDataResponse>;
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
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
