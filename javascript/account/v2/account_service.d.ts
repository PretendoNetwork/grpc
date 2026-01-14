import { type CallContext, type CallOptions } from "nice-grpc-common";
import { CreateAuditLogCommentRequest, CreateAuditLogCommentResponse } from "./create_audit_log_comment_rpc";
import { CreateBanCommentRequest, CreateBanCommentResponse } from "./create_ban_comment_rpc";
import { CreateServerRequest, CreateServerResponse } from "./create_server_rpc";
import { DeleteAccountRequest, DeleteAccountResponse } from "./delete_account_rpc";
import { DeletePNIDRequest, DeletePNIDResponse } from "./delete_pnid_rpc";
import { DeleteServerRequest, DeleteServerResponse } from "./delete_server_rpc";
import { ExchangeIndependentServiceTokenForUserDataRequest, ExchangeIndependentServiceTokenForUserDataResponse } from "./exchange_independent_service_token_for_user_data_rpc";
import { ExchangeNEXTokenForUserDataRequest, ExchangeNEXTokenForUserDataResponse } from "./exchange_nex_token_for_user_data_rpc";
import { ExchangeOAuthTokenForUserDataRequest, ExchangeOAuthTokenForUserDataResponse } from "./exchange_oauth_token_for_user_data_rpc";
import { ExchangePasswordResetTokenForUserDataRequest, ExchangePasswordResetTokenForUserDataResponse } from "./exchange_password_reset_token_for_user_data_rpc";
import { ExchangeTokenForUserDataRequest, ExchangeTokenForUserDataResponse } from "./exchange_token_for_user_data_rpc";
import { GetBanRequest, GetBanResponse } from "./get_ban_rpc";
import { GetDeviceRequest, GetDeviceResponse } from "./get_device_rpc";
import { GetNEXAccountRequest, GetNEXAccountResponse } from "./get_nex_account_rpc";
import { GetNEXDataRequest, GetNEXDataResponse } from "./get_nex_data_rpc";
import { GetNEXPasswordRequest, GetNEXPasswordResponse } from "./get_nex_password_rpc";
import { GetPNIDRequest, GetPNIDResponse } from "./get_pnid_rpc";
import { GetServerRequest, GetServerResponse } from "./get_server_rpc";
import { GetUserDataRequest, GetUserDataResponse } from "./get_user_data_rpc";
import { IssueBanRequest, IssueBanResponse } from "./issue_ban_rpc";
import { ListAuditLogCommentsRequest, ListAuditLogCommentsResponse } from "./list_audit_log_comments_rpc";
import { ListAuditLogsRequest, ListAuditLogsResponse } from "./list_audit_logs_rpc";
import { ListBanCommentsRequest, ListBanCommentsResponse } from "./list_ban_comments_rpc";
import { ListBansRequest, ListBansResponse } from "./list_bans_rpc";
import { ListDevicesRequest, ListDevicesResponse } from "./list_devices_rpc";
import { ListNEXAccountsRequest, ListNEXAccountsResponse } from "./list_nex_accounts_rpc";
import { ListPNIDsRequest, ListPNIDsResponse } from "./list_pnids_rpc";
import { ListServersRequest, ListServersResponse } from "./list_servers_rpc";
import { PardonBanRequest, PardonBanResponse } from "./pardon_ban_rpc";
import { UpdateBanRequest, UpdateBanResponse } from "./update_ban_rpc";
import { UpdateDeviceRequest, UpdateDeviceResponse } from "./update_device_rpc";
import { UpdateNEXAccountRequest, UpdateNEXAccountResponse } from "./update_nex_account_rpc";
import { UpdatePNIDPermissionsRequest, UpdatePNIDPermissionsResponse } from "./update_pnid_permissions_rpc";
import { UpdatePNIDRequest, UpdatePNIDResponse } from "./update_pnid_rpc";
import { UpdateServerRequest, UpdateServerResponse } from "./update_server_rpc";
import { ValidateIndependentServiceTokenRequest, ValidateIndependentServiceTokenResponse } from "./validate_independent_service_token_rpc";
export declare const protobufPackage = "account.v2";
/**
 * AccountService provides access to account server data.
 *
 * INTERNAL API: This service is intended for internal backend use by trusted servers only,
 * such as the admin panel, game servers, etc. It is not designed for public use.
 */
export type AccountServiceDefinition = typeof AccountServiceDefinition;
export declare const AccountServiceDefinition: {
    readonly name: "AccountService";
    readonly fullName: "account.v2.AccountService";
    readonly methods: {
        /**
         * GetUserData retrieves details for a specific PNID account.
         * Deprecated: Use GetPNID instead.
         *
         * @deprecated
         */
        readonly getUserData: {
            readonly name: "GetUserData";
            readonly requestType: import("./get_user_data_rpc").MessageFns<GetUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_user_data_rpc").MessageFns<GetUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetNEXPassword retrieves a NEX accounts password. Used only by game servers for Kerberos. */
        readonly getNEXPassword: {
            readonly name: "GetNEXPassword";
            readonly requestType: import("./get_nex_password_rpc").MessageFns<GetNEXPasswordRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_nex_password_rpc").MessageFns<GetNEXPasswordResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * GetNEXData retrieves details for a specific NEX account.
         * Deprecated: Use GetNEXAccount instead.
         *
         * @deprecated
         */
        readonly getNEXData: {
            readonly name: "GetNEXData";
            readonly requestType: import("./get_nex_data_rpc").MessageFns<GetNEXDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_nex_data_rpc").MessageFns<GetNEXDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * UpdatePNIDPermissions updates the permissions for a PNID account.
         * Deprecated: Use UpdatePNID instead.
         *
         * @deprecated
         */
        readonly updatePNIDPermissions: {
            readonly name: "UpdatePNIDPermissions";
            readonly requestType: import("./update_pnid_permissions_rpc").MessageFns<UpdatePNIDPermissionsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_pnid_permissions_rpc").MessageFns<UpdatePNIDPermissionsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * ExchangeTokenForUserData exchanges an authentication token for PNID data.
         * Deprecated: Use the type-specific methods instead.
         *
         * @deprecated
         */
        readonly exchangeTokenForUserData: {
            readonly name: "ExchangeTokenForUserData";
            readonly requestType: import("./exchange_token_for_user_data_rpc").MessageFns<ExchangeTokenForUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./exchange_token_for_user_data_rpc").MessageFns<ExchangeTokenForUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangeOAuthTokenForUserData exchanges an authentication token for PNID data. */
        readonly exchangeOAuthTokenForUserData: {
            readonly name: "ExchangeOAuthTokenForUserData";
            readonly requestType: import("./exchange_oauth_token_for_user_data_rpc").MessageFns<ExchangeOAuthTokenForUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./exchange_oauth_token_for_user_data_rpc").MessageFns<ExchangeOAuthTokenForUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangeNEXTokenForUserData exchanges a NEX token for NEX account data. */
        readonly exchangeNEXTokenForUserData: {
            readonly name: "ExchangeNEXTokenForUserData";
            readonly requestType: import("./exchange_nex_token_for_user_data_rpc").MessageFns<ExchangeNEXTokenForUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./exchange_nex_token_for_user_data_rpc").MessageFns<ExchangeNEXTokenForUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangeIndependentServiceTokenForUserData exchanges a service token for user data. PNID data is not returned for NASC tokens. */
        readonly exchangeIndependentServiceTokenForUserData: {
            readonly name: "ExchangeIndependentServiceTokenForUserData";
            readonly requestType: import("./exchange_independent_service_token_for_user_data_rpc").MessageFns<ExchangeIndependentServiceTokenForUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./exchange_independent_service_token_for_user_data_rpc").MessageFns<ExchangeIndependentServiceTokenForUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangePasswordResetTokenForUserData exchanges a password reset token for PNID data. */
        readonly exchangePasswordResetTokenForUserData: {
            readonly name: "ExchangePasswordResetTokenForUserData";
            readonly requestType: import("./exchange_password_reset_token_for_user_data_rpc").MessageFns<ExchangePasswordResetTokenForUserDataRequest>;
            readonly requestStream: false;
            readonly responseType: import("./exchange_password_reset_token_for_user_data_rpc").MessageFns<ExchangePasswordResetTokenForUserDataResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ValidateIndependentServiceToken validates that a service token data is correct, even on expired tokens. */
        readonly validateIndependentServiceToken: {
            readonly name: "ValidateIndependentServiceToken";
            readonly requestType: import("./validate_independent_service_token_rpc").MessageFns<ValidateIndependentServiceTokenRequest>;
            readonly requestStream: false;
            readonly responseType: import("./validate_independent_service_token_rpc").MessageFns<ValidateIndependentServiceTokenResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /**
         * DeleteAccount permanently deletes a PNID account.
         * Deprecated: Use DeletePNID instead.
         *
         * @deprecated
         */
        readonly deleteAccount: {
            readonly name: "DeleteAccount";
            readonly requestType: import("./delete_account_rpc").MessageFns<DeleteAccountRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_account_rpc").MessageFns<DeleteAccountResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListDevices returns a paginated list of devices. */
        readonly listDevices: {
            readonly name: "ListDevices";
            readonly requestType: import("./list_devices_rpc").MessageFns<ListDevicesRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_devices_rpc").MessageFns<ListDevicesResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetDevice retrieves details for a specific device. */
        readonly getDevice: {
            readonly name: "GetDevice";
            readonly requestType: import("./get_device_rpc").MessageFns<GetDeviceRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_device_rpc").MessageFns<GetDeviceResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateDevice updates device information. */
        readonly updateDevice: {
            readonly name: "UpdateDevice";
            readonly requestType: import("./update_device_rpc").MessageFns<UpdateDeviceRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_device_rpc").MessageFns<UpdateDeviceResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListNEXAccounts returns a paginated list of NEX accounts. */
        readonly listNEXAccounts: {
            readonly name: "ListNEXAccounts";
            readonly requestType: import("./list_nex_accounts_rpc").MessageFns<ListNEXAccountsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_nex_accounts_rpc").MessageFns<ListNEXAccountsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetNEXAccount retrieves details for a specific NEX account. */
        readonly getNEXAccount: {
            readonly name: "GetNEXAccount";
            readonly requestType: import("./get_nex_account_rpc").MessageFns<GetNEXAccountRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_nex_account_rpc").MessageFns<GetNEXAccountResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateNEXAccount updates NEX account information. */
        readonly updateNEXAccount: {
            readonly name: "UpdateNEXAccount";
            readonly requestType: import("./update_nex_account_rpc").MessageFns<UpdateNEXAccountRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_nex_account_rpc").MessageFns<UpdateNEXAccountResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListServers returns a paginated list of server configurations. */
        readonly listServers: {
            readonly name: "ListServers";
            readonly requestType: import("./list_servers_rpc").MessageFns<ListServersRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_servers_rpc").MessageFns<ListServersResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** CreateServer creates a new server configuration. */
        readonly createServer: {
            readonly name: "CreateServer";
            readonly requestType: import("./create_server_rpc").MessageFns<CreateServerRequest>;
            readonly requestStream: false;
            readonly responseType: import("./create_server_rpc").MessageFns<CreateServerResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetServer retrieves the configuration for a specific server. */
        readonly getServer: {
            readonly name: "GetServer";
            readonly requestType: import("./get_server_rpc").MessageFns<GetServerRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_server_rpc").MessageFns<GetServerResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateServer updates a server configuration. */
        readonly updateServer: {
            readonly name: "UpdateServer";
            readonly requestType: import("./update_server_rpc").MessageFns<UpdateServerRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_server_rpc").MessageFns<UpdateServerResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** DeleteServer removes a server configuration. */
        readonly deleteServer: {
            readonly name: "DeleteServer";
            readonly requestType: import("./delete_server_rpc").MessageFns<DeleteServerRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_server_rpc").MessageFns<DeleteServerResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListPNIDs returns a paginated list of PNID accounts. */
        readonly listPNIDs: {
            readonly name: "ListPNIDs";
            readonly requestType: import("./list_pnids_rpc").MessageFns<ListPNIDsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_pnids_rpc").MessageFns<ListPNIDsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetPNID retrieves details for a specific PNID account. */
        readonly getPNID: {
            readonly name: "GetPNID";
            readonly requestType: import("./get_pnid_rpc").MessageFns<GetPNIDRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_pnid_rpc").MessageFns<GetPNIDResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdatePNID updates PNID account information. */
        readonly updatePNID: {
            readonly name: "UpdatePNID";
            readonly requestType: import("./update_pnid_rpc").MessageFns<UpdatePNIDRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_pnid_rpc").MessageFns<UpdatePNIDResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** DeletePNID permanently deletes a PNID account. */
        readonly deletePNID: {
            readonly name: "DeletePNID";
            readonly requestType: import("./delete_pnid_rpc").MessageFns<DeletePNIDRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_pnid_rpc").MessageFns<DeletePNIDResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListAuditLogs returns a paginated list of audit log entries. */
        readonly listAuditLogs: {
            readonly name: "ListAuditLogs";
            readonly requestType: import("./list_audit_logs_rpc").MessageFns<ListAuditLogsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_audit_logs_rpc").MessageFns<ListAuditLogsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListAuditLogComments returns comments for a specific audit log entry. */
        readonly listAuditLogComments: {
            readonly name: "ListAuditLogComments";
            readonly requestType: import("./list_audit_log_comments_rpc").MessageFns<ListAuditLogCommentsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_audit_log_comments_rpc").MessageFns<ListAuditLogCommentsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** CreateAuditLogComment adds a comment to an audit log entry. */
        readonly createAuditLogComment: {
            readonly name: "CreateAuditLogComment";
            readonly requestType: import("./create_audit_log_comment_rpc").MessageFns<CreateAuditLogCommentRequest>;
            readonly requestStream: false;
            readonly responseType: import("./create_audit_log_comment_rpc").MessageFns<CreateAuditLogCommentResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListBans returns a paginated list of bans. */
        readonly listBans: {
            readonly name: "ListBans";
            readonly requestType: import("./list_bans_rpc").MessageFns<ListBansRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_bans_rpc").MessageFns<ListBansResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** IssueBan creates a new ban. Can target both users and devices. */
        readonly issueBan: {
            readonly name: "IssueBan";
            readonly requestType: import("./issue_ban_rpc").MessageFns<IssueBanRequest>;
            readonly requestStream: false;
            readonly responseType: import("./issue_ban_rpc").MessageFns<IssueBanResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetBan retrieves details for a specific ban. */
        readonly getBan: {
            readonly name: "GetBan";
            readonly requestType: import("./get_ban_rpc").MessageFns<GetBanRequest>;
            readonly requestStream: false;
            readonly responseType: import("./get_ban_rpc").MessageFns<GetBanResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateBan modifies an existing ban. */
        readonly updateBan: {
            readonly name: "UpdateBan";
            readonly requestType: import("./update_ban_rpc").MessageFns<UpdateBanRequest>;
            readonly requestStream: false;
            readonly responseType: import("./update_ban_rpc").MessageFns<UpdateBanResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** PardonBan lifts a ban. */
        readonly pardonBan: {
            readonly name: "PardonBan";
            readonly requestType: import("./pardon_ban_rpc").MessageFns<PardonBanRequest>;
            readonly requestStream: false;
            readonly responseType: import("./pardon_ban_rpc").MessageFns<PardonBanResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListBanComments returns comments for a specific ban. */
        readonly listBanComments: {
            readonly name: "ListBanComments";
            readonly requestType: import("./list_ban_comments_rpc").MessageFns<ListBanCommentsRequest>;
            readonly requestStream: false;
            readonly responseType: import("./list_ban_comments_rpc").MessageFns<ListBanCommentsResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
        /** CreateBanComment adds a comment to a ban entry. */
        readonly createBanComment: {
            readonly name: "CreateBanComment";
            readonly requestType: import("./create_ban_comment_rpc").MessageFns<CreateBanCommentRequest>;
            readonly requestStream: false;
            readonly responseType: import("./create_ban_comment_rpc").MessageFns<CreateBanCommentResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface AccountServiceImplementation<CallContextExt = {}> {
    /**
     * GetUserData retrieves details for a specific PNID account.
     * Deprecated: Use GetPNID instead.
     *
     * @deprecated
     */
    getUserData(request: GetUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetUserDataResponse>>;
    /** GetNEXPassword retrieves a NEX accounts password. Used only by game servers for Kerberos. */
    getNEXPassword(request: GetNEXPasswordRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNEXPasswordResponse>>;
    /**
     * GetNEXData retrieves details for a specific NEX account.
     * Deprecated: Use GetNEXAccount instead.
     *
     * @deprecated
     */
    getNEXData(request: GetNEXDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNEXDataResponse>>;
    /**
     * UpdatePNIDPermissions updates the permissions for a PNID account.
     * Deprecated: Use UpdatePNID instead.
     *
     * @deprecated
     */
    updatePNIDPermissions(request: UpdatePNIDPermissionsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePNIDPermissionsResponse>>;
    /**
     * ExchangeTokenForUserData exchanges an authentication token for PNID data.
     * Deprecated: Use the type-specific methods instead.
     *
     * @deprecated
     */
    exchangeTokenForUserData(request: ExchangeTokenForUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExchangeTokenForUserDataResponse>>;
    /** ExchangeOAuthTokenForUserData exchanges an authentication token for PNID data. */
    exchangeOAuthTokenForUserData(request: ExchangeOAuthTokenForUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExchangeOAuthTokenForUserDataResponse>>;
    /** ExchangeNEXTokenForUserData exchanges a NEX token for NEX account data. */
    exchangeNEXTokenForUserData(request: ExchangeNEXTokenForUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExchangeNEXTokenForUserDataResponse>>;
    /** ExchangeIndependentServiceTokenForUserData exchanges a service token for user data. PNID data is not returned for NASC tokens. */
    exchangeIndependentServiceTokenForUserData(request: ExchangeIndependentServiceTokenForUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExchangeIndependentServiceTokenForUserDataResponse>>;
    /** ExchangePasswordResetTokenForUserData exchanges a password reset token for PNID data. */
    exchangePasswordResetTokenForUserData(request: ExchangePasswordResetTokenForUserDataRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ExchangePasswordResetTokenForUserDataResponse>>;
    /** ValidateIndependentServiceToken validates that a service token data is correct, even on expired tokens. */
    validateIndependentServiceToken(request: ValidateIndependentServiceTokenRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ValidateIndependentServiceTokenResponse>>;
    /**
     * DeleteAccount permanently deletes a PNID account.
     * Deprecated: Use DeletePNID instead.
     *
     * @deprecated
     */
    deleteAccount(request: DeleteAccountRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteAccountResponse>>;
    /** ListDevices returns a paginated list of devices. */
    listDevices(request: ListDevicesRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListDevicesResponse>>;
    /** GetDevice retrieves details for a specific device. */
    getDevice(request: GetDeviceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetDeviceResponse>>;
    /** UpdateDevice updates device information. */
    updateDevice(request: UpdateDeviceRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateDeviceResponse>>;
    /** ListNEXAccounts returns a paginated list of NEX accounts. */
    listNEXAccounts(request: ListNEXAccountsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListNEXAccountsResponse>>;
    /** GetNEXAccount retrieves details for a specific NEX account. */
    getNEXAccount(request: GetNEXAccountRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetNEXAccountResponse>>;
    /** UpdateNEXAccount updates NEX account information. */
    updateNEXAccount(request: UpdateNEXAccountRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateNEXAccountResponse>>;
    /** ListServers returns a paginated list of server configurations. */
    listServers(request: ListServersRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListServersResponse>>;
    /** CreateServer creates a new server configuration. */
    createServer(request: CreateServerRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateServerResponse>>;
    /** GetServer retrieves the configuration for a specific server. */
    getServer(request: GetServerRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetServerResponse>>;
    /** UpdateServer updates a server configuration. */
    updateServer(request: UpdateServerRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateServerResponse>>;
    /** DeleteServer removes a server configuration. */
    deleteServer(request: DeleteServerRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteServerResponse>>;
    /** ListPNIDs returns a paginated list of PNID accounts. */
    listPNIDs(request: ListPNIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListPNIDsResponse>>;
    /** GetPNID retrieves details for a specific PNID account. */
    getPNID(request: GetPNIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPNIDResponse>>;
    /** UpdatePNID updates PNID account information. */
    updatePNID(request: UpdatePNIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdatePNIDResponse>>;
    /** DeletePNID permanently deletes a PNID account. */
    deletePNID(request: DeletePNIDRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeletePNIDResponse>>;
    /** ListAuditLogs returns a paginated list of audit log entries. */
    listAuditLogs(request: ListAuditLogsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuditLogsResponse>>;
    /** ListAuditLogComments returns comments for a specific audit log entry. */
    listAuditLogComments(request: ListAuditLogCommentsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListAuditLogCommentsResponse>>;
    /** CreateAuditLogComment adds a comment to an audit log entry. */
    createAuditLogComment(request: CreateAuditLogCommentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateAuditLogCommentResponse>>;
    /** ListBans returns a paginated list of bans. */
    listBans(request: ListBansRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListBansResponse>>;
    /** IssueBan creates a new ban. Can target both users and devices. */
    issueBan(request: IssueBanRequest, context: CallContext & CallContextExt): Promise<DeepPartial<IssueBanResponse>>;
    /** GetBan retrieves details for a specific ban. */
    getBan(request: GetBanRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetBanResponse>>;
    /** UpdateBan modifies an existing ban. */
    updateBan(request: UpdateBanRequest, context: CallContext & CallContextExt): Promise<DeepPartial<UpdateBanResponse>>;
    /** PardonBan lifts a ban. */
    pardonBan(request: PardonBanRequest, context: CallContext & CallContextExt): Promise<DeepPartial<PardonBanResponse>>;
    /** ListBanComments returns comments for a specific ban. */
    listBanComments(request: ListBanCommentsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<ListBanCommentsResponse>>;
    /** CreateBanComment adds a comment to a ban entry. */
    createBanComment(request: CreateBanCommentRequest, context: CallContext & CallContextExt): Promise<DeepPartial<CreateBanCommentResponse>>;
}
export interface AccountServiceClient<CallOptionsExt = {}> {
    /**
     * GetUserData retrieves details for a specific PNID account.
     * Deprecated: Use GetPNID instead.
     *
     * @deprecated
     */
    getUserData(request: DeepPartial<GetUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetUserDataResponse>;
    /** GetNEXPassword retrieves a NEX accounts password. Used only by game servers for Kerberos. */
    getNEXPassword(request: DeepPartial<GetNEXPasswordRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNEXPasswordResponse>;
    /**
     * GetNEXData retrieves details for a specific NEX account.
     * Deprecated: Use GetNEXAccount instead.
     *
     * @deprecated
     */
    getNEXData(request: DeepPartial<GetNEXDataRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNEXDataResponse>;
    /**
     * UpdatePNIDPermissions updates the permissions for a PNID account.
     * Deprecated: Use UpdatePNID instead.
     *
     * @deprecated
     */
    updatePNIDPermissions(request: DeepPartial<UpdatePNIDPermissionsRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePNIDPermissionsResponse>;
    /**
     * ExchangeTokenForUserData exchanges an authentication token for PNID data.
     * Deprecated: Use the type-specific methods instead.
     *
     * @deprecated
     */
    exchangeTokenForUserData(request: DeepPartial<ExchangeTokenForUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ExchangeTokenForUserDataResponse>;
    /** ExchangeOAuthTokenForUserData exchanges an authentication token for PNID data. */
    exchangeOAuthTokenForUserData(request: DeepPartial<ExchangeOAuthTokenForUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ExchangeOAuthTokenForUserDataResponse>;
    /** ExchangeNEXTokenForUserData exchanges a NEX token for NEX account data. */
    exchangeNEXTokenForUserData(request: DeepPartial<ExchangeNEXTokenForUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ExchangeNEXTokenForUserDataResponse>;
    /** ExchangeIndependentServiceTokenForUserData exchanges a service token for user data. PNID data is not returned for NASC tokens. */
    exchangeIndependentServiceTokenForUserData(request: DeepPartial<ExchangeIndependentServiceTokenForUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ExchangeIndependentServiceTokenForUserDataResponse>;
    /** ExchangePasswordResetTokenForUserData exchanges a password reset token for PNID data. */
    exchangePasswordResetTokenForUserData(request: DeepPartial<ExchangePasswordResetTokenForUserDataRequest>, options?: CallOptions & CallOptionsExt): Promise<ExchangePasswordResetTokenForUserDataResponse>;
    /** ValidateIndependentServiceToken validates that a service token data is correct, even on expired tokens. */
    validateIndependentServiceToken(request: DeepPartial<ValidateIndependentServiceTokenRequest>, options?: CallOptions & CallOptionsExt): Promise<ValidateIndependentServiceTokenResponse>;
    /**
     * DeleteAccount permanently deletes a PNID account.
     * Deprecated: Use DeletePNID instead.
     *
     * @deprecated
     */
    deleteAccount(request: DeepPartial<DeleteAccountRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteAccountResponse>;
    /** ListDevices returns a paginated list of devices. */
    listDevices(request: DeepPartial<ListDevicesRequest>, options?: CallOptions & CallOptionsExt): Promise<ListDevicesResponse>;
    /** GetDevice retrieves details for a specific device. */
    getDevice(request: DeepPartial<GetDeviceRequest>, options?: CallOptions & CallOptionsExt): Promise<GetDeviceResponse>;
    /** UpdateDevice updates device information. */
    updateDevice(request: DeepPartial<UpdateDeviceRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateDeviceResponse>;
    /** ListNEXAccounts returns a paginated list of NEX accounts. */
    listNEXAccounts(request: DeepPartial<ListNEXAccountsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListNEXAccountsResponse>;
    /** GetNEXAccount retrieves details for a specific NEX account. */
    getNEXAccount(request: DeepPartial<GetNEXAccountRequest>, options?: CallOptions & CallOptionsExt): Promise<GetNEXAccountResponse>;
    /** UpdateNEXAccount updates NEX account information. */
    updateNEXAccount(request: DeepPartial<UpdateNEXAccountRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateNEXAccountResponse>;
    /** ListServers returns a paginated list of server configurations. */
    listServers(request: DeepPartial<ListServersRequest>, options?: CallOptions & CallOptionsExt): Promise<ListServersResponse>;
    /** CreateServer creates a new server configuration. */
    createServer(request: DeepPartial<CreateServerRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateServerResponse>;
    /** GetServer retrieves the configuration for a specific server. */
    getServer(request: DeepPartial<GetServerRequest>, options?: CallOptions & CallOptionsExt): Promise<GetServerResponse>;
    /** UpdateServer updates a server configuration. */
    updateServer(request: DeepPartial<UpdateServerRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateServerResponse>;
    /** DeleteServer removes a server configuration. */
    deleteServer(request: DeepPartial<DeleteServerRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteServerResponse>;
    /** ListPNIDs returns a paginated list of PNID accounts. */
    listPNIDs(request: DeepPartial<ListPNIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListPNIDsResponse>;
    /** GetPNID retrieves details for a specific PNID account. */
    getPNID(request: DeepPartial<GetPNIDRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPNIDResponse>;
    /** UpdatePNID updates PNID account information. */
    updatePNID(request: DeepPartial<UpdatePNIDRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdatePNIDResponse>;
    /** DeletePNID permanently deletes a PNID account. */
    deletePNID(request: DeepPartial<DeletePNIDRequest>, options?: CallOptions & CallOptionsExt): Promise<DeletePNIDResponse>;
    /** ListAuditLogs returns a paginated list of audit log entries. */
    listAuditLogs(request: DeepPartial<ListAuditLogsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuditLogsResponse>;
    /** ListAuditLogComments returns comments for a specific audit log entry. */
    listAuditLogComments(request: DeepPartial<ListAuditLogCommentsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListAuditLogCommentsResponse>;
    /** CreateAuditLogComment adds a comment to an audit log entry. */
    createAuditLogComment(request: DeepPartial<CreateAuditLogCommentRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateAuditLogCommentResponse>;
    /** ListBans returns a paginated list of bans. */
    listBans(request: DeepPartial<ListBansRequest>, options?: CallOptions & CallOptionsExt): Promise<ListBansResponse>;
    /** IssueBan creates a new ban. Can target both users and devices. */
    issueBan(request: DeepPartial<IssueBanRequest>, options?: CallOptions & CallOptionsExt): Promise<IssueBanResponse>;
    /** GetBan retrieves details for a specific ban. */
    getBan(request: DeepPartial<GetBanRequest>, options?: CallOptions & CallOptionsExt): Promise<GetBanResponse>;
    /** UpdateBan modifies an existing ban. */
    updateBan(request: DeepPartial<UpdateBanRequest>, options?: CallOptions & CallOptionsExt): Promise<UpdateBanResponse>;
    /** PardonBan lifts a ban. */
    pardonBan(request: DeepPartial<PardonBanRequest>, options?: CallOptions & CallOptionsExt): Promise<PardonBanResponse>;
    /** ListBanComments returns comments for a specific ban. */
    listBanComments(request: DeepPartial<ListBanCommentsRequest>, options?: CallOptions & CallOptionsExt): Promise<ListBanCommentsResponse>;
    /** CreateBanComment adds a comment to a ban entry. */
    createBanComment(request: DeepPartial<CreateBanCommentRequest>, options?: CallOptions & CallOptionsExt): Promise<CreateBanCommentResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
