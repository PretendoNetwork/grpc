/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/api_service.proto" (package "api", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.API = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "api/api_service.proto" (package "api", syntax proto3)
// tslint:disable
// @ts-nocheck
const set_stripe_connection_data_rpc_1 = require("./set_stripe_connection_data_rpc");
const set_discord_connection_data_rpc_1 = require("./set_discord_connection_data_rpc");
const reset_password_rpc_1 = require("./reset_password_rpc");
const forgot_password_rpc_1 = require("./forgot_password_rpc");
const update_user_data_rpc_1 = require("./update_user_data_rpc");
const get_user_data_rpc_1 = require("./get_user_data_rpc");
const empty_1 = require("../google/protobuf/empty");
const login_rpc_1 = require("./login_rpc");
const login_rpc_2 = require("./login_rpc");
const register_rpc_1 = require("./register_rpc");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated ServiceType for protobuf service api.API
 */
exports.API = new runtime_rpc_1.ServiceType("api.API", [
    { name: "Register", options: {}, I: register_rpc_1.RegisterRequest, O: login_rpc_2.LoginResponse },
    { name: "Login", options: {}, I: login_rpc_1.LoginRequest, O: login_rpc_2.LoginResponse },
    { name: "GetUserData", options: {}, I: empty_1.Empty, O: get_user_data_rpc_1.GetUserDataResponse },
    { name: "UpdateUserData", options: {}, I: update_user_data_rpc_1.UpdateUserDataRequest, O: get_user_data_rpc_1.GetUserDataResponse },
    { name: "ForgotPassword", options: {}, I: forgot_password_rpc_1.ForgotPasswordRequest, O: empty_1.Empty },
    { name: "ResetPassword", options: {}, I: reset_password_rpc_1.ResetPasswordRequest, O: empty_1.Empty },
    { name: "SetDiscordConnectionData", options: {}, I: set_discord_connection_data_rpc_1.SetDiscordConnectionDataRequest, O: empty_1.Empty },
    { name: "SetStripeConnectionData", options: {}, I: set_stripe_connection_data_rpc_1.SetStripeConnectionDataRequest, O: empty_1.Empty }
]);
