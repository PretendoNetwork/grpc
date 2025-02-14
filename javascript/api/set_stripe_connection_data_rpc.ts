// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: api/set_stripe_connection_data_rpc.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";

export const protobufPackage = "api";

export interface SetStripeConnectionDataRequest {
  customerId?: string | undefined;
  subscriptionId?: string | undefined;
  priceId?: string | undefined;
  tierLevel?: number | undefined;
  tierName?: string | undefined;
  timestamp: bigint;
}

function createBaseSetStripeConnectionDataRequest(): SetStripeConnectionDataRequest {
  return {
    customerId: undefined,
    subscriptionId: undefined,
    priceId: undefined,
    tierLevel: undefined,
    tierName: undefined,
    timestamp: 0n,
  };
}

export const SetStripeConnectionDataRequest: MessageFns<SetStripeConnectionDataRequest> = {
  encode(message: SetStripeConnectionDataRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.customerId !== undefined) {
      writer.uint32(10).string(message.customerId);
    }
    if (message.subscriptionId !== undefined) {
      writer.uint32(18).string(message.subscriptionId);
    }
    if (message.priceId !== undefined) {
      writer.uint32(26).string(message.priceId);
    }
    if (message.tierLevel !== undefined) {
      writer.uint32(32).uint32(message.tierLevel);
    }
    if (message.tierName !== undefined) {
      writer.uint32(42).string(message.tierName);
    }
    if (message.timestamp !== 0n) {
      if (BigInt.asUintN(64, message.timestamp) !== message.timestamp) {
        throw new globalThis.Error("value provided for field message.timestamp of type uint64 too large");
      }
      writer.uint32(48).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): SetStripeConnectionDataRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSetStripeConnectionDataRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.customerId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.subscriptionId = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.priceId = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 32) {
            break;
          }

          message.tierLevel = reader.uint32();
          continue;
        }
        case 5: {
          if (tag !== 42) {
            break;
          }

          message.tierName = reader.string();
          continue;
        }
        case 6: {
          if (tag !== 48) {
            break;
          }

          message.timestamp = reader.uint64() as bigint;
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

  fromJSON(object: any): SetStripeConnectionDataRequest {
    return {
      customerId: isSet(object.customerId) ? globalThis.String(object.customerId) : undefined,
      subscriptionId: isSet(object.subscriptionId) ? globalThis.String(object.subscriptionId) : undefined,
      priceId: isSet(object.priceId) ? globalThis.String(object.priceId) : undefined,
      tierLevel: isSet(object.tierLevel) ? globalThis.Number(object.tierLevel) : undefined,
      tierName: isSet(object.tierName) ? globalThis.String(object.tierName) : undefined,
      timestamp: isSet(object.timestamp) ? BigInt(object.timestamp) : 0n,
    };
  },

  toJSON(message: SetStripeConnectionDataRequest): unknown {
    const obj: any = {};
    if (message.customerId !== undefined) {
      obj.customerId = message.customerId;
    }
    if (message.subscriptionId !== undefined) {
      obj.subscriptionId = message.subscriptionId;
    }
    if (message.priceId !== undefined) {
      obj.priceId = message.priceId;
    }
    if (message.tierLevel !== undefined) {
      obj.tierLevel = Math.round(message.tierLevel);
    }
    if (message.tierName !== undefined) {
      obj.tierName = message.tierName;
    }
    if (message.timestamp !== 0n) {
      obj.timestamp = message.timestamp.toString();
    }
    return obj;
  },

  create(base?: DeepPartial<SetStripeConnectionDataRequest>): SetStripeConnectionDataRequest {
    return SetStripeConnectionDataRequest.fromPartial(base ?? {});
  },
  fromPartial(object: DeepPartial<SetStripeConnectionDataRequest>): SetStripeConnectionDataRequest {
    const message = createBaseSetStripeConnectionDataRequest();
    message.customerId = object.customerId ?? undefined;
    message.subscriptionId = object.subscriptionId ?? undefined;
    message.priceId = object.priceId ?? undefined;
    message.tierLevel = object.tierLevel ?? undefined;
    message.tierName = object.tierName ?? undefined;
    message.timestamp = object.timestamp ?? 0n;
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
