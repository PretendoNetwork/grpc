export declare const protobufPackage = "boss.v2";
export declare enum PlatformType {
    PLATFORM_TYPE_UNSPECIFIED = 0,
    PLATFORM_TYPE_CTR = 1,
    PLATFORM_TYPE_WUP = 2,
    UNRECOGNIZED = -1
}
export declare function platformTypeFromJSON(object: any): PlatformType;
export declare function platformTypeToJSON(object: PlatformType): string;
