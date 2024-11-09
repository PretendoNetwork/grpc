/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "account/v2/account_service.proto" (package "account.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// buf:lint:ignore
//
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { ExchangeTokenForUserDataResponse } from "./exchange_token_for_user_data";
import type { ExchangeTokenForUserDataRequest } from "./exchange_token_for_user_data";
import type { UpdatePNIDPermissionsResponse } from "./update_pnid_permissions";
import type { UpdatePNIDPermissionsRequest } from "./update_pnid_permissions";
import type { GetNEXDataResponse } from "./get_nex_data_rpc";
import type { GetNEXDataRequest } from "./get_nex_data_rpc";
import type { GetNEXPasswordResponse } from "./get_nex_password_rpc";
import type { GetNEXPasswordRequest } from "./get_nex_password_rpc";
import type { GetUserDataResponse } from "./get_user_data_rpc";
import type { GetUserDataRequest } from "./get_user_data_rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service account.v2.AccountService
 */
export interface IAccountServiceClient {
    /**
     * @generated from protobuf rpc: GetUserData(account.v2.GetUserDataRequest) returns (account.v2.GetUserDataResponse);
     */
    getUserData(input: GetUserDataRequest, options?: RpcOptions): UnaryCall<GetUserDataRequest, GetUserDataResponse>;
    /**
     * @generated from protobuf rpc: GetNEXPassword(account.v2.GetNEXPasswordRequest) returns (account.v2.GetNEXPasswordResponse);
     */
    getNEXPassword(input: GetNEXPasswordRequest, options?: RpcOptions): UnaryCall<GetNEXPasswordRequest, GetNEXPasswordResponse>;
    /**
     * @generated from protobuf rpc: GetNEXData(account.v2.GetNEXDataRequest) returns (account.v2.GetNEXDataResponse);
     */
    getNEXData(input: GetNEXDataRequest, options?: RpcOptions): UnaryCall<GetNEXDataRequest, GetNEXDataResponse>;
    /**
     * @generated from protobuf rpc: UpdatePNIDPermissions(account.v2.UpdatePNIDPermissionsRequest) returns (account.v2.UpdatePNIDPermissionsResponse);
     */
    updatePNIDPermissions(input: UpdatePNIDPermissionsRequest, options?: RpcOptions): UnaryCall<UpdatePNIDPermissionsRequest, UpdatePNIDPermissionsResponse>;
    /**
     * @generated from protobuf rpc: ExchangeTokenForUserData(account.v2.ExchangeTokenForUserDataRequest) returns (account.v2.ExchangeTokenForUserDataResponse);
     */
    exchangeTokenForUserData(input: ExchangeTokenForUserDataRequest, options?: RpcOptions): UnaryCall<ExchangeTokenForUserDataRequest, ExchangeTokenForUserDataResponse>;
}
/**
 * @generated from protobuf service account.v2.AccountService
 */
export declare class AccountServiceClient implements IAccountServiceClient, ServiceInfo {
    private readonly _transport;
    typeName: any;
    methods: any;
    options: any;
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: GetUserData(account.v2.GetUserDataRequest) returns (account.v2.GetUserDataResponse);
     */
    getUserData(input: GetUserDataRequest, options?: RpcOptions): UnaryCall<GetUserDataRequest, GetUserDataResponse>;
    /**
     * @generated from protobuf rpc: GetNEXPassword(account.v2.GetNEXPasswordRequest) returns (account.v2.GetNEXPasswordResponse);
     */
    getNEXPassword(input: GetNEXPasswordRequest, options?: RpcOptions): UnaryCall<GetNEXPasswordRequest, GetNEXPasswordResponse>;
    /**
     * @generated from protobuf rpc: GetNEXData(account.v2.GetNEXDataRequest) returns (account.v2.GetNEXDataResponse);
     */
    getNEXData(input: GetNEXDataRequest, options?: RpcOptions): UnaryCall<GetNEXDataRequest, GetNEXDataResponse>;
    /**
     * @generated from protobuf rpc: UpdatePNIDPermissions(account.v2.UpdatePNIDPermissionsRequest) returns (account.v2.UpdatePNIDPermissionsResponse);
     */
    updatePNIDPermissions(input: UpdatePNIDPermissionsRequest, options?: RpcOptions): UnaryCall<UpdatePNIDPermissionsRequest, UpdatePNIDPermissionsResponse>;
    /**
     * @generated from protobuf rpc: ExchangeTokenForUserData(account.v2.ExchangeTokenForUserDataRequest) returns (account.v2.ExchangeTokenForUserDataResponse);
     */
    exchangeTokenForUserData(input: ExchangeTokenForUserDataRequest, options?: RpcOptions): UnaryCall<ExchangeTokenForUserDataRequest, ExchangeTokenForUserDataResponse>;
}
