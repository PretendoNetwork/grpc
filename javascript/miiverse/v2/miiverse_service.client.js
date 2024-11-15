/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "miiverse/v2/miiverse_service.proto" (package "miiverse.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiiverseServiceClient = void 0;
const miiverse_service_1 = require("./miiverse_service");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service miiverse.v2.MiiverseService
 */
class MiiverseServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = miiverse_service_1.MiiverseService.typeName;
        this.methods = miiverse_service_1.MiiverseService.methods;
        this.options = miiverse_service_1.MiiverseService.options;
    }
    /**
     * Used by Super Mario Maker
     *
     * @generated from protobuf rpc: SMMRequestPostId(miiverse.v2.SMMRequestPostIdRequest) returns (miiverse.v2.SMMRequestPostIdResponse);
     */
    sMMRequestPostId(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
}
exports.MiiverseServiceClient = MiiverseServiceClient;
