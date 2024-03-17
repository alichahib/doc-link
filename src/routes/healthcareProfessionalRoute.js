"use strict";
// routes/addHealthcareProfessionalRoute.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const healthcareProfessionalController_1 = require("../controllers/healthcareProfessionalController");
const router = express_1.default.Router();
// Route to add a new healthcare professional
router.post('/healthcareProfessional', healthcareProfessionalController_1.addHealthcareProfessionalController);
exports.default = router;
