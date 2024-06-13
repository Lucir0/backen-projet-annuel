"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authMiddlesware_1 = require("../middlewares/authMiddlesware");
const router = (0, express_1.Router)();
router.get('/', authMiddlesware_1.authMiddleware, userController_1.userController.getUsers);
router.post('/', authMiddlesware_1.authMiddleware, userController_1.userController.createUser);
exports.default = router;
