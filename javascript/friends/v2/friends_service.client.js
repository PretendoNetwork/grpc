/* eslint-disable */
// @generated by protobuf-ts 2.9.4 with parameter eslint_disable,output_javascript,output_legacy_commonjs,ts_nocheck
// @generated from protobuf file "friends/v2/friends_service.proto" (package "friends.v2", syntax proto3)
// tslint:disable
// @ts-nocheck
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendsServiceClient = void 0;
const friends_service_1 = require("./friends_service");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * @generated from protobuf service friends.v2.FriendsService
 */
class FriendsServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = friends_service_1.FriendsService.typeName;
        this.methods = friends_service_1.FriendsService.methods;
        this.options = friends_service_1.FriendsService.options;
    }
    /**
     * @generated from protobuf rpc: SendUserNotificationWiiU(friends.v2.SendUserNotificationWiiURequest) returns (friends.v2.SendUserNotificationWiiUResponse);
     */
    sendUserNotificationWiiU(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetUserFriendPIDs(friends.v2.GetUserFriendPIDsRequest) returns (friends.v2.GetUserFriendPIDsResponse);
     */
    getUserFriendPIDs(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: SendUserFriendRequest(friends.v2.SendUserFriendRequestRequest) returns (friends.v2.SendUserFriendRequestResponse);
     */
    sendUserFriendRequest(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetUserFriendRequestsIncoming(friends.v2.GetUserFriendRequestsIncomingRequest) returns (friends.v2.GetUserFriendRequestsIncomingResponse);
     */
    getUserFriendRequestsIncoming(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: AcceptFriendRequest(friends.v2.AcceptFriendRequestRequest) returns (friends.v2.AcceptFriendRequestResponse);
     */
    acceptFriendRequest(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DenyFriendRequest(friends.v2.DenyFriendRequestRequest) returns (friends.v2.DenyFriendRequestResponse);
     */
    denyFriendRequest(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
}
exports.FriendsServiceClient = FriendsServiceClient;