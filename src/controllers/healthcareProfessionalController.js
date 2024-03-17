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
exports.addHealthcareProfessionalController = void 0;
const healthcareProfessionalService_1 = require("../services/healthcareProfessionalService");
function addHealthcareProfessionalController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const professionalData = req.body; // Assuming the data is sent in the request body
            const newProfessional = yield (0, healthcareProfessionalService_1.addHealthcareProfessional)(professionalData);
            res.status(201).json(newProfessional);
        }
        catch (error) {
            res.status(500).json({ message: 'Failed to add healthcare professional' });
        }
    });
}
exports.addHealthcareProfessionalController = addHealthcareProfessionalController;
