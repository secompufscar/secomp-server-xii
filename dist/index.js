"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("express-async-errors");
const express_1 = __importDefault(require("express"));
const errorHandler_1 = __importDefault(require("./middlewares/errorHandler"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/v1', routes_1.default);
app.use(errorHandler_1.default);
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`> Servidor rodando na porta ${PORT}`);
});
