"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
exports.default = {
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client.user.findMany();
            return response;
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client.user.findFirst({
                where: {
                    id
                }
            });
            return response;
        });
    },
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client.user.findFirst({
                where: {
                    email
                }
            });
            return response;
        });
    },
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client.user.create({
                data
            });
            return response;
        });
    },
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield client.user.update({
                data,
                where: {
                    id
                }
            });
            return response;
        });
    },
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield client.user.delete({
                where: {
                    id
                }
            });
        });
    },
    updateQRCode(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client.user.update({
                data,
                where: { id }
            });
        });
    },
};
