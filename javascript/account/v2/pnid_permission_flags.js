"use strict";
// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.3.0
//   protoc               unknown
// source: account/v2/pnid_permission_flags.proto
Object.defineProperty(exports, "__esModule", { value: true });
exports.PNIDPermissionFlags = exports.protobufPackage = void 0;
/* eslint-disable */
const wire_1 = require("@bufbuild/protobuf/wire");
exports.protobufPackage = "account.v2";
function createBasePNIDPermissionFlags() {
    return {
        bannedAllPermanently: false,
        bannedAllTemporarily: false,
        betaAccess: false,
        accessAdminPanel: false,
        createServerConfigs: false,
        modifyServerConfigs: false,
        deployServer: false,
        modifyPnids: false,
        modifyNexAccounts: false,
        modifyConsoles: false,
        banPnids: false,
        banNexAccounts: false,
        banConsoles: false,
        moderateMiiverse: false,
        createApiKeys: false,
        createBossTasks: false,
        updateBossTasks: false,
        deleteBossTasks: false,
        uploadBossFiles: false,
        updateBossFiles: false,
        deleteBossFiles: false,
        updatePnidPermissions: false,
    };
}
exports.PNIDPermissionFlags = {
    encode(message, writer = new wire_1.BinaryWriter()) {
        if (message.bannedAllPermanently !== false) {
            writer.uint32(8).bool(message.bannedAllPermanently);
        }
        if (message.bannedAllTemporarily !== false) {
            writer.uint32(16).bool(message.bannedAllTemporarily);
        }
        if (message.betaAccess !== false) {
            writer.uint32(24).bool(message.betaAccess);
        }
        if (message.accessAdminPanel !== false) {
            writer.uint32(32).bool(message.accessAdminPanel);
        }
        if (message.createServerConfigs !== false) {
            writer.uint32(40).bool(message.createServerConfigs);
        }
        if (message.modifyServerConfigs !== false) {
            writer.uint32(48).bool(message.modifyServerConfigs);
        }
        if (message.deployServer !== false) {
            writer.uint32(56).bool(message.deployServer);
        }
        if (message.modifyPnids !== false) {
            writer.uint32(64).bool(message.modifyPnids);
        }
        if (message.modifyNexAccounts !== false) {
            writer.uint32(72).bool(message.modifyNexAccounts);
        }
        if (message.modifyConsoles !== false) {
            writer.uint32(80).bool(message.modifyConsoles);
        }
        if (message.banPnids !== false) {
            writer.uint32(88).bool(message.banPnids);
        }
        if (message.banNexAccounts !== false) {
            writer.uint32(96).bool(message.banNexAccounts);
        }
        if (message.banConsoles !== false) {
            writer.uint32(104).bool(message.banConsoles);
        }
        if (message.moderateMiiverse !== false) {
            writer.uint32(112).bool(message.moderateMiiverse);
        }
        if (message.createApiKeys !== false) {
            writer.uint32(120).bool(message.createApiKeys);
        }
        if (message.createBossTasks !== false) {
            writer.uint32(128).bool(message.createBossTasks);
        }
        if (message.updateBossTasks !== false) {
            writer.uint32(136).bool(message.updateBossTasks);
        }
        if (message.deleteBossTasks !== false) {
            writer.uint32(144).bool(message.deleteBossTasks);
        }
        if (message.uploadBossFiles !== false) {
            writer.uint32(152).bool(message.uploadBossFiles);
        }
        if (message.updateBossFiles !== false) {
            writer.uint32(160).bool(message.updateBossFiles);
        }
        if (message.deleteBossFiles !== false) {
            writer.uint32(168).bool(message.deleteBossFiles);
        }
        if (message.updatePnidPermissions !== false) {
            writer.uint32(176).bool(message.updatePnidPermissions);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof wire_1.BinaryReader ? input : new wire_1.BinaryReader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePNIDPermissionFlags();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1: {
                    if (tag !== 8) {
                        break;
                    }
                    message.bannedAllPermanently = reader.bool();
                    continue;
                }
                case 2: {
                    if (tag !== 16) {
                        break;
                    }
                    message.bannedAllTemporarily = reader.bool();
                    continue;
                }
                case 3: {
                    if (tag !== 24) {
                        break;
                    }
                    message.betaAccess = reader.bool();
                    continue;
                }
                case 4: {
                    if (tag !== 32) {
                        break;
                    }
                    message.accessAdminPanel = reader.bool();
                    continue;
                }
                case 5: {
                    if (tag !== 40) {
                        break;
                    }
                    message.createServerConfigs = reader.bool();
                    continue;
                }
                case 6: {
                    if (tag !== 48) {
                        break;
                    }
                    message.modifyServerConfigs = reader.bool();
                    continue;
                }
                case 7: {
                    if (tag !== 56) {
                        break;
                    }
                    message.deployServer = reader.bool();
                    continue;
                }
                case 8: {
                    if (tag !== 64) {
                        break;
                    }
                    message.modifyPnids = reader.bool();
                    continue;
                }
                case 9: {
                    if (tag !== 72) {
                        break;
                    }
                    message.modifyNexAccounts = reader.bool();
                    continue;
                }
                case 10: {
                    if (tag !== 80) {
                        break;
                    }
                    message.modifyConsoles = reader.bool();
                    continue;
                }
                case 11: {
                    if (tag !== 88) {
                        break;
                    }
                    message.banPnids = reader.bool();
                    continue;
                }
                case 12: {
                    if (tag !== 96) {
                        break;
                    }
                    message.banNexAccounts = reader.bool();
                    continue;
                }
                case 13: {
                    if (tag !== 104) {
                        break;
                    }
                    message.banConsoles = reader.bool();
                    continue;
                }
                case 14: {
                    if (tag !== 112) {
                        break;
                    }
                    message.moderateMiiverse = reader.bool();
                    continue;
                }
                case 15: {
                    if (tag !== 120) {
                        break;
                    }
                    message.createApiKeys = reader.bool();
                    continue;
                }
                case 16: {
                    if (tag !== 128) {
                        break;
                    }
                    message.createBossTasks = reader.bool();
                    continue;
                }
                case 17: {
                    if (tag !== 136) {
                        break;
                    }
                    message.updateBossTasks = reader.bool();
                    continue;
                }
                case 18: {
                    if (tag !== 144) {
                        break;
                    }
                    message.deleteBossTasks = reader.bool();
                    continue;
                }
                case 19: {
                    if (tag !== 152) {
                        break;
                    }
                    message.uploadBossFiles = reader.bool();
                    continue;
                }
                case 20: {
                    if (tag !== 160) {
                        break;
                    }
                    message.updateBossFiles = reader.bool();
                    continue;
                }
                case 21: {
                    if (tag !== 168) {
                        break;
                    }
                    message.deleteBossFiles = reader.bool();
                    continue;
                }
                case 22: {
                    if (tag !== 176) {
                        break;
                    }
                    message.updatePnidPermissions = reader.bool();
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
    fromJSON(object) {
        return {
            bannedAllPermanently: isSet(object.bannedAllPermanently)
                ? globalThis.Boolean(object.bannedAllPermanently)
                : false,
            bannedAllTemporarily: isSet(object.bannedAllTemporarily)
                ? globalThis.Boolean(object.bannedAllTemporarily)
                : false,
            betaAccess: isSet(object.betaAccess) ? globalThis.Boolean(object.betaAccess) : false,
            accessAdminPanel: isSet(object.accessAdminPanel) ? globalThis.Boolean(object.accessAdminPanel) : false,
            createServerConfigs: isSet(object.createServerConfigs) ? globalThis.Boolean(object.createServerConfigs) : false,
            modifyServerConfigs: isSet(object.modifyServerConfigs) ? globalThis.Boolean(object.modifyServerConfigs) : false,
            deployServer: isSet(object.deployServer) ? globalThis.Boolean(object.deployServer) : false,
            modifyPnids: isSet(object.modifyPnids) ? globalThis.Boolean(object.modifyPnids) : false,
            modifyNexAccounts: isSet(object.modifyNexAccounts) ? globalThis.Boolean(object.modifyNexAccounts) : false,
            modifyConsoles: isSet(object.modifyConsoles) ? globalThis.Boolean(object.modifyConsoles) : false,
            banPnids: isSet(object.banPnids) ? globalThis.Boolean(object.banPnids) : false,
            banNexAccounts: isSet(object.banNexAccounts) ? globalThis.Boolean(object.banNexAccounts) : false,
            banConsoles: isSet(object.banConsoles) ? globalThis.Boolean(object.banConsoles) : false,
            moderateMiiverse: isSet(object.moderateMiiverse) ? globalThis.Boolean(object.moderateMiiverse) : false,
            createApiKeys: isSet(object.createApiKeys) ? globalThis.Boolean(object.createApiKeys) : false,
            createBossTasks: isSet(object.createBossTasks) ? globalThis.Boolean(object.createBossTasks) : false,
            updateBossTasks: isSet(object.updateBossTasks) ? globalThis.Boolean(object.updateBossTasks) : false,
            deleteBossTasks: isSet(object.deleteBossTasks) ? globalThis.Boolean(object.deleteBossTasks) : false,
            uploadBossFiles: isSet(object.uploadBossFiles) ? globalThis.Boolean(object.uploadBossFiles) : false,
            updateBossFiles: isSet(object.updateBossFiles) ? globalThis.Boolean(object.updateBossFiles) : false,
            deleteBossFiles: isSet(object.deleteBossFiles) ? globalThis.Boolean(object.deleteBossFiles) : false,
            updatePnidPermissions: isSet(object.updatePnidPermissions)
                ? globalThis.Boolean(object.updatePnidPermissions)
                : false,
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.bannedAllPermanently !== false) {
            obj.bannedAllPermanently = message.bannedAllPermanently;
        }
        if (message.bannedAllTemporarily !== false) {
            obj.bannedAllTemporarily = message.bannedAllTemporarily;
        }
        if (message.betaAccess !== false) {
            obj.betaAccess = message.betaAccess;
        }
        if (message.accessAdminPanel !== false) {
            obj.accessAdminPanel = message.accessAdminPanel;
        }
        if (message.createServerConfigs !== false) {
            obj.createServerConfigs = message.createServerConfigs;
        }
        if (message.modifyServerConfigs !== false) {
            obj.modifyServerConfigs = message.modifyServerConfigs;
        }
        if (message.deployServer !== false) {
            obj.deployServer = message.deployServer;
        }
        if (message.modifyPnids !== false) {
            obj.modifyPnids = message.modifyPnids;
        }
        if (message.modifyNexAccounts !== false) {
            obj.modifyNexAccounts = message.modifyNexAccounts;
        }
        if (message.modifyConsoles !== false) {
            obj.modifyConsoles = message.modifyConsoles;
        }
        if (message.banPnids !== false) {
            obj.banPnids = message.banPnids;
        }
        if (message.banNexAccounts !== false) {
            obj.banNexAccounts = message.banNexAccounts;
        }
        if (message.banConsoles !== false) {
            obj.banConsoles = message.banConsoles;
        }
        if (message.moderateMiiverse !== false) {
            obj.moderateMiiverse = message.moderateMiiverse;
        }
        if (message.createApiKeys !== false) {
            obj.createApiKeys = message.createApiKeys;
        }
        if (message.createBossTasks !== false) {
            obj.createBossTasks = message.createBossTasks;
        }
        if (message.updateBossTasks !== false) {
            obj.updateBossTasks = message.updateBossTasks;
        }
        if (message.deleteBossTasks !== false) {
            obj.deleteBossTasks = message.deleteBossTasks;
        }
        if (message.uploadBossFiles !== false) {
            obj.uploadBossFiles = message.uploadBossFiles;
        }
        if (message.updateBossFiles !== false) {
            obj.updateBossFiles = message.updateBossFiles;
        }
        if (message.deleteBossFiles !== false) {
            obj.deleteBossFiles = message.deleteBossFiles;
        }
        if (message.updatePnidPermissions !== false) {
            obj.updatePnidPermissions = message.updatePnidPermissions;
        }
        return obj;
    },
    create(base) {
        return exports.PNIDPermissionFlags.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBasePNIDPermissionFlags();
        message.bannedAllPermanently = object.bannedAllPermanently ?? false;
        message.bannedAllTemporarily = object.bannedAllTemporarily ?? false;
        message.betaAccess = object.betaAccess ?? false;
        message.accessAdminPanel = object.accessAdminPanel ?? false;
        message.createServerConfigs = object.createServerConfigs ?? false;
        message.modifyServerConfigs = object.modifyServerConfigs ?? false;
        message.deployServer = object.deployServer ?? false;
        message.modifyPnids = object.modifyPnids ?? false;
        message.modifyNexAccounts = object.modifyNexAccounts ?? false;
        message.modifyConsoles = object.modifyConsoles ?? false;
        message.banPnids = object.banPnids ?? false;
        message.banNexAccounts = object.banNexAccounts ?? false;
        message.banConsoles = object.banConsoles ?? false;
        message.moderateMiiverse = object.moderateMiiverse ?? false;
        message.createApiKeys = object.createApiKeys ?? false;
        message.createBossTasks = object.createBossTasks ?? false;
        message.updateBossTasks = object.updateBossTasks ?? false;
        message.deleteBossTasks = object.deleteBossTasks ?? false;
        message.uploadBossFiles = object.uploadBossFiles ?? false;
        message.updateBossFiles = object.updateBossFiles ?? false;
        message.deleteBossFiles = object.deleteBossFiles ?? false;
        message.updatePnidPermissions = object.updatePnidPermissions ?? false;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
