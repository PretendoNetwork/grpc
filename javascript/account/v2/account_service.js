"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: account/v2/account_service.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountServiceDefinition = exports.protobufPackage = void 0;
const exchange_token_for_user_data_1 = require("./exchange_token_for_user_data");
const get_nex_data_rpc_1 = require("./get_nex_data_rpc");
const get_nex_password_rpc_1 = require("./get_nex_password_rpc");
const get_user_data_rpc_1 = require("./get_user_data_rpc");
const update_pnid_permissions_1 = require("./update_pnid_permissions");
exports.protobufPackage = "account.v2";
exports.AccountServiceDefinition = {
    name: "AccountService",
    fullName: "account.v2.AccountService",
    methods: {
        getUserData: {
            name: "GetUserData",
            requestType: get_user_data_rpc_1.GetUserDataRequest,
            requestStream: false,
            responseType: get_user_data_rpc_1.GetUserDataResponse,
            responseStream: false,
            options: {},
        },
        getNEXPassword: {
            name: "GetNEXPassword",
            requestType: get_nex_password_rpc_1.GetNEXPasswordRequest,
            requestStream: false,
            responseType: get_nex_password_rpc_1.GetNEXPasswordResponse,
            responseStream: false,
            options: {},
        },
        getNEXData: {
            name: "GetNEXData",
            requestType: get_nex_data_rpc_1.GetNEXDataRequest,
            requestStream: false,
            responseType: get_nex_data_rpc_1.GetNEXDataResponse,
            responseStream: false,
            options: {},
        },
        updatePNIDPermissions: {
            name: "UpdatePNIDPermissions",
            requestType: update_pnid_permissions_1.UpdatePNIDPermissionsRequest,
            requestStream: false,
            responseType: update_pnid_permissions_1.UpdatePNIDPermissionsResponse,
            responseStream: false,
            options: {},
        },
        exchangeTokenForUserData: {
            name: "ExchangeTokenForUserData",
            requestType: exchange_token_for_user_data_1.ExchangeTokenForUserDataRequest,
            requestStream: false,
            responseType: exchange_token_for_user_data_1.ExchangeTokenForUserDataResponse,
            responseStream: false,
            options: {},
        },
    },
};
