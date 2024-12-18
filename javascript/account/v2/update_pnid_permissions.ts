// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: account/v2/update_pnid_permissions.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { PNIDPermissionFlags } from "./pnid_permission_flags";

export const protobufPackage = "account.v2";

export interface UpdatePNIDPermissionsRequest {
  pid: number;
  permissions: PNIDPermissionFlags | undefined;
}

export interface UpdatePNIDPermissionsResponse {
}

function createBaseUpdatePNIDPermissionsRequest(): UpdatePNIDPermissionsRequest {
  return { pid: 0, permissions: undefined };
}

export const UpdatePNIDPermissionsRequest: MessageFns<UpdatePNIDPermissionsRequest> = {
  encode(message: UpdatePNIDPermissionsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    if (message.permissions !== undefined) {
      PNIDPermissionFlags.encode(message.permissions, writer.uint32(18).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdatePNIDPermissionsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePNIDPermissionsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.pid = reader.uint32();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.permissions = PNIDPermissionFlags.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdatePNIDPermissionsRequest {
    return {
      pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0,
      permissions: isSet(object.permissions) ? PNIDPermissionFlags.fromJSON(object.permissions) : undefined,
    };
  },

  toJSON(message: UpdatePNIDPermissionsRequest): unknown {
    const obj: any = {};
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    if (message.permissions !== undefined) {
      obj.permissions = PNIDPermissionFlags.toJSON(message.permissions);
    }
    return obj;
  },

  create(base?: DeepPartial<UpdatePNIDPermissionsRequest>): UpdatePNIDPermissionsRequest {
    return UpdatePNIDPermissionsRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<UpdatePNIDPermissionsRequest>): UpdatePNIDPermissionsRequest {
    const message = createBaseUpdatePNIDPermissionsRequest();
    message.pid = object.pid ?? 0;
    message.permissions = (object.permissions !== undefined && object.permissions !== null)
      ? PNIDPermissionFlags.fromPartial(object.permissions)
      : undefined;
    return message;
  },
};

function createBaseUpdatePNIDPermissionsResponse(): UpdatePNIDPermissionsResponse {
  return {};
}

export const UpdatePNIDPermissionsResponse: MessageFns<UpdatePNIDPermissionsResponse> = {
  encode(_: UpdatePNIDPermissionsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdatePNIDPermissionsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdatePNIDPermissionsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): UpdatePNIDPermissionsResponse {
    return {};
  },

  toJSON(_: UpdatePNIDPermissionsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<UpdatePNIDPermissionsResponse>): UpdatePNIDPermissionsResponse {
    return UpdatePNIDPermissionsResponse.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<UpdatePNIDPermissionsResponse>): UpdatePNIDPermissionsResponse {
    const message = createBaseUpdatePNIDPermissionsResponse();
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create(base?: DeepPartial<T>): T;
  fromPartial(object: DeepPartial<T>): T;
}
