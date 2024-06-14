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
const userRepository_1 = __importDefault(require("../repositories/userRepository"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const login = (Email, Mot_De_Passe) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("EMAIL Service : ", Email);
        const user = yield userRepository_1.default.getUserByEmail(Email);
        console.log("USER : ", user);
        if (user && Mot_De_Passe === user.Mot_De_Passe) {
            const token = jsonwebtoken_1.default.sign({ id: user.ID_Admin, Email: user.Email }, process.env.JWT_SECRET, {
            // pas d'expiration pour le token
            });
            console.log("TOKEN : ", token);
            return token;
        }
        console.log("Invalid credentials");
        return null;
    }
    catch (error) {
        console.error("Error in login service:", error);
        throw new Error('Internal server error');
    }
});
exports.default = { login };
