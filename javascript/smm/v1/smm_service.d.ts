import { type CallContext, type CallOptions } from "nice-grpc-common";
import { DeleteCourseRequest, DeleteCourseResponse } from "./delete_course_rpc";
export declare const protobufPackage = "smm.v1";
export type SMMServiceDefinition = typeof SMMServiceDefinition;
export declare const SMMServiceDefinition: {
    readonly name: "SMMService";
    readonly fullName: "smm.v1.SMMService";
    readonly methods: {
        readonly deleteCourse: {
            readonly name: "DeleteCourse";
            readonly requestType: import("./delete_course_rpc").MessageFns<DeleteCourseRequest>;
            readonly requestStream: false;
            readonly responseType: import("./delete_course_rpc").MessageFns<DeleteCourseResponse>;
            readonly responseStream: false;
            readonly options: {};
        };
    };
};
export interface SMMServiceImplementation<CallContextExt = {}> {
    deleteCourse(request: DeleteCourseRequest, context: CallContext & CallContextExt): Promise<DeepPartial<DeleteCourseResponse>>;
}
export interface SMMServiceClient<CallOptionsExt = {}> {
    deleteCourse(request: DeepPartial<DeleteCourseRequest>, options?: CallOptions & CallOptionsExt): Promise<DeleteCourseResponse>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | bigint | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
