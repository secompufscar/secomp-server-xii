"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = exports.prismaClient = void 0;
const exceptions_1 = require("../utils/exceptions");
const client_1 = require("@prisma/client");
const secrets_1 = require("../secrets");
const jwt = __importStar(require("jsonwebtoken"));
const api_errors_1 = require("../utils/api-errors");
exports.prismaClient = new client_1.PrismaClient();
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { authorization } = req.headers;
            if (!authorization) {
                throw new exceptions_1.UnauthorizedUserError("Não autorizado");
            }
            const token = authorization.split(' ')[1];
            const { id } = jwt.verify(token, secrets_1.JWT_SECRET);
            const user = yield exports.prismaClient.user.findFirst({ where: { id } });
            const _a = user, { senha: _ } = _a, loggedUser = __rest(_a, ["senha"]);
            req.user = loggedUser;
            next();
        }
        catch (error) {
            if (error instanceof api_errors_1.ApiError)
                res.status(error.statusCode).json({ message: error.message, statusCode: error.statusCode });
            else if (error instanceof jwt.TokenExpiredError)
                res.status(401).json({ message: "Token expirado", statusCode: 401 });
            console.error("Erro em acesso: ", error.message);
        }
    });
}
exports.authMiddleware = authMiddleware;
