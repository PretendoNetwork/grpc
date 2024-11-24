// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: account/get_user_data_rpc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { Mii } from "./mii";
import { PNIDPermissionFlags } from "./pnid_permission_flags";

export const protobufPackage = "account";

export interface GetUserDataRequest {
  pid: number;
}

export interface GetUserDataResponse {
  deleted: boolean;
  pid: number;
  username: string;
  accessLevel: number;
  serverAccessLevel: string;
  mii: Mii | undefined;
  creationDate: string;
  birthdate: string;
  gender: string;
  country: string;
  language: string;
  emailAddress: string;
  tierName: string;
  permissions: PNIDPermissionFlags | undefined;
}

function createBaseGetUserDataRequest(): GetUserDataRequest {
  return { pid: 0 };
}

export const GetUserDataRequest: MessageFns<GetUserDataRequest> = {
  encode(message: GetUserDataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.pid !== 0) {
      writer.uint32(8).uint32(message.pid);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserDataRequest();
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
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserDataRequest {
    return { pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0 };
  },

  toJSON(message: GetUserDataRequest): unknown {
    const obj: any = {};
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserDataRequest>): GetUserDataRequest {
    return GetUserDataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserDataRequest>): GetUserDataRequest {
    const message = createBaseGetUserDataRequest();
    message.pid = object.pid ?? 0;
    return message;
  },
};

function createBaseGetUserDataResponse(): GetUserDataResponse {
  return {
    deleted: false,
    pid: 0,
    username: "",
    accessLevel: 0,
    serverAccessLevel: "",
    mii: undefined,
    creationDate: "",
    birthdate: "",
    gender: "",
    country: "",
    language: "",
    emailAddress: "",
    tierName: "",
    permissions: undefined,
  };
}

export const GetUserDataResponse: MessageFns<GetUserDataResponse> = {
  encode(message: GetUserDataResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.deleted !== false) {
      writer.uint32(8).bool(message.deleted);
    }
    if (message.pid !== 0) {
      writer.uint32(16).uint32(message.pid);
    }
    if (message.username !== "") {
      writer.uint32(26).string(message.username);
    }
    if (message.accessLevel !== 0) {
      writer.uint32(32).int32(message.accessLevel);
    }
    if (message.serverAccessLevel !== "") {
      writer.uint32(42).string(message.serverAccessLevel);
    }
    if (message.mii !== undefined) {
      Mii.encode(message.mii, writer.uint32(50).fork()).join();
    }
    if (message.creationDate !== "") {
      writer.uint32(58).string(message.creationDate);
    }
    if (message.birthdate !== "") {
      writer.uint32(66).string(message.birthdate);
    }
    if (message.gender !== "") {
      writer.uint32(74).string(message.gender);
    }
    if (message.country !== "") {
      writer.uint32(82).string(message.country);
    }
    if (message.language !== "") {
      writer.uint32(90).string(message.language);
    }
    if (message.emailAddress !== "") {
      writer.uint32(98).string(message.emailAddress);
    }
    if (message.tierName !== "") {
      writer.uint32(106).string(message.tierName);
    }
    if (message.permissions !== undefined) {
      PNIDPermissionFlags.encode(message.permissions, writer.uint32(114).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetUserDataResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserDataResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 8) {
            break;
          }

          message.deleted = reader.bool();
          continue;
        }
        case 2: {
          if (tag !== 16) {
            break;
          }

          message.pid = reader.uint32();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.accessLevel = reader.int32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.serverAccessLevel = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 50) {
            break;
          }

          message.mii = Mii.decode(reader, reader.uint32());
          continue;
        }
        case 7: {
          if (tag !== 58) {
            break;
          }

          message.creationDate = reader.string();
          continue;
        }
        case 8: {
          if (tag !== 66) {
            break;
          }

          message.birthdate = reader.string();
          continue;
        }
        case 9: {
          if (tag !== 74) {
            break;
          }

          message.gender = reader.string();
          continue;
        }
        case 10: {
          if (tag !== 82) {
            break;
          }

          message.country = reader.string();
          continue;
        }
        case 11: {
          if (tag !== 90) {
            break;
          }

          message.language = reader.string();
          continue;
        }
        case 12: {
          if (tag !== 98) {
            break;
          }

          message.emailAddress = reader.string();
          continue;
        }
        case 13: {
          if (tag !== 106) {
            break;
          }

          message.tierName = reader.string();
          continue;
        }
        case 14: {
          if (tag !== 114) {
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

  fromJSON(object: any): GetUserDataResponse {
    return {
      deleted: isSet(object.deleted) ? globalThis.Boolean(object.deleted) : false,
      pid: isSet(object.pid) ? globalThis.Number(object.pid) : 0,
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      accessLevel: isSet(object.accessLevel) ? globalThis.Number(object.accessLevel) : 0,
      serverAccessLevel: isSet(object.serverAccessLevel) ? globalThis.String(object.serverAccessLevel) : "",
      mii: isSet(object.mii) ? Mii.fromJSON(object.mii) : undefined,
      creationDate: isSet(object.creationDate) ? globalThis.String(object.creationDate) : "",
      birthdate: isSet(object.birthdate) ? globalThis.String(object.birthdate) : "",
      gender: isSet(object.gender) ? globalThis.String(object.gender) : "",
      country: isSet(object.country) ? globalThis.String(object.country) : "",
      language: isSet(object.language) ? globalThis.String(object.language) : "",
      emailAddress: isSet(object.emailAddress) ? globalThis.String(object.emailAddress) : "",
      tierName: isSet(object.tierName) ? globalThis.String(object.tierName) : "",
      permissions: isSet(object.permissions) ? PNIDPermissionFlags.fromJSON(object.permissions) : undefined,
    };
  },

  toJSON(message: GetUserDataResponse): unknown {
    const obj: any = {};
    if (message.deleted !== false) {
      obj.deleted = message.deleted;
    }
    if (message.pid !== 0) {
      obj.pid = Math.round(message.pid);
    }
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.accessLevel !== 0) {
      obj.accessLevel = Math.round(message.accessLevel);
    }
    if (message.serverAccessLevel !== "") {
      obj.serverAccessLevel = message.serverAccessLevel;
    }
    if (message.mii !== undefined) {
      obj.mii = Mii.toJSON(message.mii);
    }
    if (message.creationDate !== "") {
      obj.creationDate = message.creationDate;
    }
    if (message.birthdate !== "") {
      obj.birthdate = message.birthdate;
    }
    if (message.gender !== "") {
      obj.gender = message.gender;
    }
    if (message.country !== "") {
      obj.country = message.country;
    }
    if (message.language !== "") {
      obj.language = message.language;
    }
    if (message.emailAddress !== "") {
      obj.emailAddress = message.emailAddress;
    }
    if (message.tierName !== "") {
      obj.tierName = message.tierName;
    }
    if (message.permissions !== undefined) {
      obj.permissions = PNIDPermissionFlags.toJSON(message.permissions);
    }
    return obj;
  },

  create(base?: DeepPartial<GetUserDataResponse>): GetUserDataResponse {
    return GetUserDataResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<GetUserDataResponse>): GetUserDataResponse {
    const message = createBaseGetUserDataResponse();
    message.deleted = object.deleted ?? false;
    message.pid = object.pid ?? 0;
    message.username = object.username ?? "";
    message.accessLevel = object.accessLevel ?? 0;
    message.serverAccessLevel = object.serverAccessLevel ?? "";
    message.mii = (object.mii !== undefined && object.mii !== null) ? Mii.fromPartial(object.mii) : undefined;
    message.creationDate = object.creationDate ?? "";
    message.birthdate = object.birthdate ?? "";
    message.gender = object.gender ?? "";
    message.country = object.country ?? "";
    message.language = object.language ?? "";
    message.emailAddress = object.emailAddress ?? "";
    message.tierName = object.tierName ?? "";
    message.permissions = (object.permissions !== undefined && object.permissions !== null)
      ? PNIDPermissionFlags.fromPartial(object.permissions)
      : undefined;
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
