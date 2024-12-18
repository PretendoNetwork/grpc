// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: boss/v2/list_known_boss_apps.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "boss.v2";

export interface BOSSApp {
  bossAppId: string;
  titleId: string;
  titleRegion: string;
  name: string;
  tasks: string[];
}

export interface ListKnownBOSSAppsRequest {
}

export interface ListKnownBOSSAppsResponse {
  apps: BOSSApp[];
}

function createBaseBOSSApp(): BOSSApp {
  return { bossAppId: "", titleId: "", titleRegion: "", name: "", tasks: [] };
}

export const BOSSApp: MessageFns<BOSSApp> = {
  encode(message: BOSSApp, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.bossAppId !== "") {
      writer.uint32(10).string(message.bossAppId);
    }
    if (message.titleId !== "") {
      writer.uint32(18).string(message.titleId);
    }
    if (message.titleRegion !== "") {
      writer.uint32(26).string(message.titleRegion);
    }
    if (message.name !== "") {
      writer.uint32(34).string(message.name);
    }
    for (const v of message.tasks) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): BOSSApp {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBOSSApp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.bossAppId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.titleId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.titleRegion = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.name = reader.string();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.tasks.push(reader.string());
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

  fromJSON(object: any): BOSSApp {
    return {
      bossAppId: isSet(object.bossAppId) ? globalThis.String(object.bossAppId) : "",
      titleId: isSet(object.titleId) ? globalThis.String(object.titleId) : "",
      titleRegion: isSet(object.titleRegion) ? globalThis.String(object.titleRegion) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      tasks: globalThis.Array.isArray(object?.tasks) ? object.tasks.map((e: any) => globalThis.String(e)) : [],
    };
  },

  toJSON(message: BOSSApp): unknown {
    const obj: any = {};
    if (message.bossAppId !== "") {
      obj.bossAppId = message.bossAppId;
    }
    if (message.titleId !== "") {
      obj.titleId = message.titleId;
    }
    if (message.titleRegion !== "") {
      obj.titleRegion = message.titleRegion;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.tasks?.length) {
      obj.tasks = message.tasks;
    }
    return obj;
  },

  create(base?: DeepPartial<BOSSApp>): BOSSApp {
    return BOSSApp.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<BOSSApp>): BOSSApp {
    const message = createBaseBOSSApp();
    message.bossAppId = object.bossAppId ?? "";
    message.titleId = object.titleId ?? "";
    message.titleRegion = object.titleRegion ?? "";
    message.name = object.name ?? "";
    message.tasks = object.tasks?.map((e) => e) || [];
    return message;
  },
};

function createBaseListKnownBOSSAppsRequest(): ListKnownBOSSAppsRequest {
  return {};
}

export const ListKnownBOSSAppsRequest: MessageFns<ListKnownBOSSAppsRequest> = {
  encode(_: ListKnownBOSSAppsRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListKnownBOSSAppsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKnownBOSSAppsRequest();
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

  fromJSON(_: any): ListKnownBOSSAppsRequest {
    return {};
  },

  toJSON(_: ListKnownBOSSAppsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create(base?: DeepPartial<ListKnownBOSSAppsRequest>): ListKnownBOSSAppsRequest {
    return ListKnownBOSSAppsRequest.fromPartial(base ?? {});
  },
  fromPartial(_: DeepPartial<ListKnownBOSSAppsRequest>): ListKnownBOSSAppsRequest {
    const message = createBaseListKnownBOSSAppsRequest();
    return message;
  },
};

function createBaseListKnownBOSSAppsResponse(): ListKnownBOSSAppsResponse {
  return { apps: [] };
}

export const ListKnownBOSSAppsResponse: MessageFns<ListKnownBOSSAppsResponse> = {
  encode(message: ListKnownBOSSAppsResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    for (const v of message.apps) {
      BOSSApp.encode(v!, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): ListKnownBOSSAppsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseListKnownBOSSAppsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.apps.push(BOSSApp.decode(reader, reader.uint32()));
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

  fromJSON(object: any): ListKnownBOSSAppsResponse {
    return { apps: globalThis.Array.isArray(object?.apps) ? object.apps.map((e: any) => BOSSApp.fromJSON(e)) : [] };
  },

  toJSON(message: ListKnownBOSSAppsResponse): unknown {
    const obj: any = {};
    if (message.apps?.length) {
      obj.apps = message.apps.map((e) => BOSSApp.toJSON(e));
    }
    return obj;
  },

  create(base?: DeepPartial<ListKnownBOSSAppsResponse>): ListKnownBOSSAppsResponse {
    return ListKnownBOSSAppsResponse.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<ListKnownBOSSAppsResponse>): ListKnownBOSSAppsResponse {
    const message = createBaseListKnownBOSSAppsResponse();
    message.apps = object.apps?.map((e) => BOSSApp.fromPartial(e)) || [];
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
