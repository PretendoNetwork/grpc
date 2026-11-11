import type { CallContext, CallOptions } from "nice-grpc-common";
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
import { GetPNIDsRequest, GetPNIDsResponse } from "./get_pnids_rpc";
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
export declare const protobufFileName = "account/v2/account_service.proto";
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
            readonly requestType: typeof GetUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetNEXPassword retrieves a NEX accounts password. Used only by game servers for Kerberos. */
        readonly getNEXPassword: {
            readonly name: "GetNEXPassword";
            readonly requestType: typeof GetNEXPasswordRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetNEXPasswordResponse;
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
            readonly requestType: typeof GetNEXDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetNEXDataResponse;
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
            readonly requestType: typeof UpdatePNIDPermissionsRequest;
            readonly requestStream: false;
            readonly responseType: typeof UpdatePNIDPermissionsResponse;
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
            readonly requestType: typeof ExchangeTokenForUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof ExchangeTokenForUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangeOAuthTokenForUserData exchanges an authentication token for PNID data. */
        readonly exchangeOAuthTokenForUserData: {
            readonly name: "ExchangeOAuthTokenForUserData";
            readonly requestType: typeof ExchangeOAuthTokenForUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof ExchangeOAuthTokenForUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangeNEXTokenForUserData exchanges a NEX token for NEX account data. */
        readonly exchangeNEXTokenForUserData: {
            readonly name: "ExchangeNEXTokenForUserData";
            readonly requestType: typeof ExchangeNEXTokenForUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof ExchangeNEXTokenForUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangeIndependentServiceTokenForUserData exchanges a service token for user data. PNID data is not returned for NASC tokens. */
        readonly exchangeIndependentServiceTokenForUserData: {
            readonly name: "ExchangeIndependentServiceTokenForUserData";
            readonly requestType: typeof ExchangeIndependentServiceTokenForUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof ExchangeIndependentServiceTokenForUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ExchangePasswordResetTokenForUserData exchanges a password reset token for PNID data. */
        readonly exchangePasswordResetTokenForUserData: {
            readonly name: "ExchangePasswordResetTokenForUserData";
            readonly requestType: typeof ExchangePasswordResetTokenForUserDataRequest;
            readonly requestStream: false;
            readonly responseType: typeof ExchangePasswordResetTokenForUserDataResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ValidateIndependentServiceToken validates that a service token data is correct, even on expired tokens. */
        readonly validateIndependentServiceToken: {
            readonly name: "ValidateIndependentServiceToken";
            readonly requestType: typeof ValidateIndependentServiceTokenRequest;
            readonly requestStream: false;
            readonly responseType: typeof ValidateIndependentServiceTokenResponse;
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
            readonly requestType: typeof DeleteAccountRequest;
            readonly requestStream: false;
            readonly responseType: typeof DeleteAccountResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListDevices returns a paginated list of devices. */
        readonly listDevices: {
            readonly name: "ListDevices";
            readonly requestType: typeof ListDevicesRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListDevicesResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetDevice retrieves details for a specific device. */
        readonly getDevice: {
            readonly name: "GetDevice";
            readonly requestType: typeof GetDeviceRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetDeviceResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateDevice updates device information. */
        readonly updateDevice: {
            readonly name: "UpdateDevice";
            readonly requestType: typeof UpdateDeviceRequest;
            readonly requestStream: false;
            readonly responseType: typeof UpdateDeviceResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListNEXAccounts returns a paginated list of NEX accounts. */
        readonly listNEXAccounts: {
            readonly name: "ListNEXAccounts";
            readonly requestType: typeof ListNEXAccountsRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListNEXAccountsResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetNEXAccount retrieves details for a specific NEX account. */
        readonly getNEXAccount: {
            readonly name: "GetNEXAccount";
            readonly requestType: typeof GetNEXAccountRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetNEXAccountResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateNEXAccount updates NEX account information. */
        readonly updateNEXAccount: {
            readonly name: "UpdateNEXAccount";
            readonly requestType: typeof UpdateNEXAccountRequest;
            readonly requestStream: false;
            readonly responseType: typeof UpdateNEXAccountResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListServers returns a paginated list of server configurations. */
        readonly listServers: {
            readonly name: "ListServers";
            readonly requestType: typeof ListServersRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListServersResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** CreateServer creates a new server configuration. */
        readonly createServer: {
            readonly name: "CreateServer";
            readonly requestType: typeof CreateServerRequest;
            readonly requestStream: false;
            readonly responseType: typeof CreateServerResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetServer retrieves the configuration for a specific server. */
        readonly getServer: {
            readonly name: "GetServer";
            readonly requestType: typeof GetServerRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetServerResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateServer updates a server configuration. */
        readonly updateServer: {
            readonly name: "UpdateServer";
            readonly requestType: typeof UpdateServerRequest;
            readonly requestStream: false;
            readonly responseType: typeof UpdateServerResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** DeleteServer removes a server configuration. */
        readonly deleteServer: {
            readonly name: "DeleteServer";
            readonly requestType: typeof DeleteServerRequest;
            readonly requestStream: false;
            readonly responseType: typeof DeleteServerResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListPNIDs returns a paginated list of PNID accounts. */
        readonly listPNIDs: {
            readonly name: "ListPNIDs";
            readonly requestType: typeof ListPNIDsRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListPNIDsResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetPNID retrieves details for a specific PNID account. */
        readonly getPNID: {
            readonly name: "GetPNID";
            readonly requestType: typeof GetPNIDRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetPNIDResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetPNIDs populates a map linking pid to PNID account data. */
        readonly getPNIDs: {
            readonly name: "GetPNIDs";
            readonly requestType: typeof GetPNIDsRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetPNIDsResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdatePNID updates PNID account information. */
        readonly updatePNID: {
            readonly name: "UpdatePNID";
            readonly requestType: typeof UpdatePNIDRequest;
            readonly requestStream: false;
            readonly responseType: typeof UpdatePNIDResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** DeletePNID permanently deletes a PNID account. */
        readonly deletePNID: {
            readonly name: "DeletePNID";
            readonly requestType: typeof DeletePNIDRequest;
            readonly requestStream: false;
            readonly responseType: typeof DeletePNIDResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListAuditLogs returns a paginated list of audit log entries. */
        readonly listAuditLogs: {
            readonly name: "ListAuditLogs";
            readonly requestType: typeof ListAuditLogsRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListAuditLogsResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListAuditLogComments returns comments for a specific audit log entry. */
        readonly listAuditLogComments: {
            readonly name: "ListAuditLogComments";
            readonly requestType: typeof ListAuditLogCommentsRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListAuditLogCommentsResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** CreateAuditLogComment adds a comment to an audit log entry. */
        readonly createAuditLogComment: {
            readonly name: "CreateAuditLogComment";
            readonly requestType: typeof CreateAuditLogCommentRequest;
            readonly requestStream: false;
            readonly responseType: typeof CreateAuditLogCommentResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListBans returns a paginated list of bans. */
        readonly listBans: {
            readonly name: "ListBans";
            readonly requestType: typeof ListBansRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListBansResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** IssueBan creates a new ban. Can target both users and devices. */
        readonly issueBan: {
            readonly name: "IssueBan";
            readonly requestType: typeof IssueBanRequest;
            readonly requestStream: false;
            readonly responseType: typeof IssueBanResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** GetBan retrieves details for a specific ban. */
        readonly getBan: {
            readonly name: "GetBan";
            readonly requestType: typeof GetBanRequest;
            readonly requestStream: false;
            readonly responseType: typeof GetBanResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** UpdateBan modifies an existing ban. */
        readonly updateBan: {
            readonly name: "UpdateBan";
            readonly requestType: typeof UpdateBanRequest;
            readonly requestStream: false;
            readonly responseType: typeof UpdateBanResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** PardonBan lifts a ban. */
        readonly pardonBan: {
            readonly name: "PardonBan";
            readonly requestType: typeof PardonBanRequest;
            readonly requestStream: false;
            readonly responseType: typeof PardonBanResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** ListBanComments returns comments for a specific ban. */
        readonly listBanComments: {
            readonly name: "ListBanComments";
            readonly requestType: typeof ListBanCommentsRequest;
            readonly requestStream: false;
            readonly responseType: typeof ListBanCommentsResponse;
            readonly responseStream: false;
            readonly options: {};
        };
        /** CreateBanComment adds a comment to a ban entry. */
        readonly createBanComment: {
            readonly name: "CreateBanComment";
            readonly requestType: typeof CreateBanCommentRequest;
            readonly requestStream: false;
            readonly responseType: typeof CreateBanCommentResponse;
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
    /** GetPNIDs populates a map linking pid to PNID account data. */
    getPNIDs(request: GetPNIDsRequest, context: CallContext & CallContextExt): Promise<DeepPartial<GetPNIDsResponse>>;
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
    /** GetPNIDs populates a map linking pid to PNID account data. */
    getPNIDs(request: DeepPartial<GetPNIDsRequest>, options?: CallOptions & CallOptionsExt): Promise<GetPNIDsResponse>;
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
export type DeepPartial<T> = T extends bigint ? string | number | bigint : T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
