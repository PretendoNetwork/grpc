import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
export declare const protobufPackage = "miiverse.v2";
export declare enum PostType {
    POST_TYPE_ANY_UNSPECIFIED = 0,
    POST_TYPE_TEXT = 1,
    POST_TYPE_MEMO = 2,
    POST_TYPE_SCREENSHOT = 3,
    UNRECOGNIZED = -1
}
export declare function postTypeFromJSON(object: any): PostType;
export declare function postTypeToJSON(object: PostType): string;
export declare enum QueryType {
    QUERY_TYPE_UNSPECIFIED = 0,
    QUERY_TYPE_FOLLOWINGS = 1,
    QUERY_TYPE_SELF = 2,
    UNRECOGNIZED = -1
}
export declare function queryTypeFromJSON(object: any): QueryType;
export declare function queryTypeToJSON(object: QueryType): string;
export declare enum SortBy {
    SORT_BY_UNSPECIFIED = 0,
    SORT_BY_NEW = 1,
    SORT_BY_POPULAR = 2,
    UNRECOGNIZED = -1
}
export declare function sortByFromJSON(object: any): SortBy;
export declare function sortByToJSON(object: SortBy): string;
export declare enum FeelingID {
    FEELING_ID_NORMAL_UNSPECIFIED = 0,
    FEELING_ID_HAPPY = 1,
    FEELING_ID_LIKE = 2,
    FEELING_ID_SURPRISED = 3,
    FEELING_ID_FRUSTRATED = 4,
    FEELING_ID_PUZZLED = 5,
    UNRECOGNIZED = -1
}
export declare function feelingIDFromJSON(object: any): FeelingID;
export declare function feelingIDToJSON(object: FeelingID): string;
export declare enum LanguageID {
    LANGUAGE_ID_JAPANESE_UNSPECIFIED = 0,
    LANGUAGE_ID_ENGLISH = 1,
    LANGUAGE_ID_FRENCH = 2,
    LANGUAGE_ID_GERMAN = 3,
    LANGUAGE_ID_ITALIAN = 4,
    LANGUAGE_ID_SPANISH = 5,
    LANGUAGE_ID_SIMPLIFIED_CHINESE = 6,
    LANGUAGE_ID_KOREAN = 7,
    LANGUAGE_ID_DUTCH = 8,
    LANGUAGE_ID_PORTUGUESE = 9,
    LANGUAGE_ID_RUSSIAN = 10,
    LANGUAGE_ID_TRADITIONAL_CHINESE = 11,
    LANGUAGE_ID_ANY = 254,
    LANGUAGE_ID_INVALID = 255,
    UNRECOGNIZED = -1
}
export declare function languageIDFromJSON(object: any): LanguageID;
export declare function languageIDToJSON(object: LanguageID): string;
export interface PostPainting {
    content: string;
    size: number;
    url: string;
}
export interface PostScreenshot {
    size: number;
    url: string;
    screenshotAspect?: string | undefined;
}
export interface PostTopicTag {
    name: string;
    titleId: string;
}
export interface PostBinaryData {
    url: string;
    size: number;
}
export interface PostData {
    appData?: string | undefined;
    body?: string | undefined;
    communityId: string;
    countryId: number;
    createdAt: string;
    feelingId: FeelingID;
    id: string;
    isAutopost: boolean;
    isCommunityPrivateAutopost: boolean;
    isSpoiler: boolean;
    isAppJumpable: boolean;
    empathyCount: number;
    languageId: number;
    mii?: string | undefined;
    url?: string | undefined;
    number: number;
    painting?: PostPainting | undefined;
    pid: number;
    platformId: number;
    regionId: number;
    replyCount: number;
    screenName: string;
    screenshot?: PostScreenshot | undefined;
    topicTag?: PostTopicTag | undefined;
    titleId: string;
    data?: PostBinaryData | undefined;
}
export declare const PostPainting: MessageFns<PostPainting>;
export declare const PostScreenshot: MessageFns<PostScreenshot>;
export declare const PostTopicTag: MessageFns<PostTopicTag>;
export declare const PostBinaryData: MessageFns<PostBinaryData>;
export declare const PostData: MessageFns<PostData>;
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
