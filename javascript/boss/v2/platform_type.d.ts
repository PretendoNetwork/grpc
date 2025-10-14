export declare const protobufPackage = "boss.v2";
export declare enum PlatformType {
    CTR = 0,
    WUP = 1,
    UNRECOGNIZED = -1
}
export declare function platformTypeFromJSON(object: any): PlatformType;
export declare function platformTypeToJSON(object: PlatformType): string;
