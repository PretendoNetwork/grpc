/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "miiverse/miiverse_service.proto" (package "miiverse", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Miiverse = void 0;
/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "miiverse/miiverse_service.proto" (package "miiverse", syntax proto3)
// tslint:disable
// @ts-nocheck
const smm_request_post_id_rpc_1 = require("./smm_request_post_id_rpc");
const smm_request_post_id_rpc_2 = require("./smm_request_post_id_rpc");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated ServiceType for protobuf service miiverse.Miiverse
 */
exports.Miiverse = new runtime_rpc_1.ServiceType("miiverse.Miiverse", [
    { name: "SMMRequestPostId", options: {}, I: smm_request_post_id_rpc_2.SMMRequestPostIDRequest, O: smm_request_post_id_rpc_1.SMMRequestPostIDResponse }
]);
