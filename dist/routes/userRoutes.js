"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddlesware_1 = require("../middlewares/authMiddlesware");
const typedi_1 = __importDefault(require("typedi"));
const userController_1 = __importDefault(require("../controllers/userController"));
const router = (0, express_1.Router)();
const userController = typedi_1.default.get(userController_1.default);
router.get('/', authMiddlesware_1.authMiddleware, (req, res) => userController.getUsers(req, res));
exports.default = router;
