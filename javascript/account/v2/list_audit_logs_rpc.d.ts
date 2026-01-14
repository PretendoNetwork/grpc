import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AuditLog } from "./audit_log";
import { AuditLogActionType } from "./audit_log_action_type";
import { PageInput, PageResults } from "./page";
export declare const protobufPackage = "account.v2";
export interface ListAuditLogsRequest {
    page: PageInput | undefined;
    filter: ListAuditLogsRequest_Filter | undefined;
}
export interface ListAuditLogsRequest_Filter {
    executedByPid: number[];
    actionType: AuditLogActionType[];
    extraJson?: string | undefined;
}
export interface ListAuditLogsResponse {
    page: PageResults | undefined;
    items: AuditLog[];
}
export declare const ListAuditLogsRequest: MessageFns<ListAuditLogsRequest>;
export declare const ListAuditLogsRequest_Filter: MessageFns<ListAuditLogsRequest_Filter>;
export declare const ListAuditLogsResponse: MessageFns<ListAuditLogsResponse>;
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export interface MessageFns<T> {
    encode(message: T, writer?: BinaryWriter): BinaryWriter;
    decode(input: BinaryReader | Uint8Array, length?: number): T;
    fromJSON(object: any): T;
    toJSON(message: T): unknown;
    create(base?: DeepPartial<T>): T;
    fromPartial(object: DeepPartial<T>): T;
}
export {};
