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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../config/db"));
const getUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield (0, db_1.default)();
        const [results] = yield db.query('SELECT * FROM users WHERE email = ?', [email]);
        return results[0];
    }
    catch (error) {
        throw error;
    }
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield (0, db_1.default)();
        const [results] = yield db.query('SELECT * FROM users');
        return results;
    }
    catch (error) {
        throw error;
    }
});
const createUser = (userData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield (0, db_1.default)();
        const [results] = yield db.query('INSERT INTO users SET ?', userData);
        return results;
    }
    catch (error) {
        throw error;
    }
});
exports.default = { getUserByEmail, getAllUsers, createUser };
