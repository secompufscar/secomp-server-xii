"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = __importDefault(require("./users"));
const activities_1 = __importDefault(require("./activities"));
const usersAtActivities_1 = __importDefault(require("./usersAtActivities"));
const categories_1 = __importDefault(require("./categories"));
const diretorias_1 = __importDefault(require("./diretorias"));
const checkIn_1 = __importDefault(require("./checkIn"));
const routes = (0, express_1.Router)();
routes.use('/activities', activities_1.default);
routes.use('/users', users_1.default);
routes.use('/categories', categories_1.default);
routes.use('/userAtActivities', usersAtActivities_1.default);
// routes.use('/admin', adminRoutes)
routes.use('/diretorias', diretorias_1.default);
routes.use('/checkIn', checkIn_1.default);
routes.get('/', (_, response) => response.status(200).json({ message: "API SECOMP XII" }));
exports.default = routes;
