/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "account/v2/account_service.proto" (package "account.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
//
// buf:lint:ignore
//
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountServiceClient = void 0;
const account_service_1 = require("./account_service");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service account.v2.AccountService
 */
class AccountServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = account_service_1.AccountService.typeName;
        this.methods = account_service_1.AccountService.methods;
        this.options = account_service_1.AccountService.options;
    }
    /**
     * @generated from protobuf rpc: GetUserData(account.v2.GetUserDataRequest) returns (account.v2.GetUserDataResponse);
     */
    getUserData(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetNEXPassword(account.v2.GetNEXPasswordRequest) returns (account.v2.GetNEXPasswordResponse);
     */
    getNEXPassword(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetNEXData(account.v2.GetNEXDataRequest) returns (account.v2.GetNEXDataResponse);
     */
    getNEXData(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: UpdatePNIDPermissions(account.v2.UpdatePNIDPermissionsRequest) returns (account.v2.UpdatePNIDPermissionsResponse);
     */
    updatePNIDPermissions(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: ExchangeTokenForUserData(account.v2.ExchangeTokenForUserDataRequest) returns (account.v2.ExchangeTokenForUserDataResponse);
     */
    exchangeTokenForUserData(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
}
exports.AccountServiceClient = AccountServiceClient;
