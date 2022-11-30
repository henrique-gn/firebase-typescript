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
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const key_json_1 = __importDefault(require("./key.json"));
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)(key_json_1.default),
});
const database = (0, firestore_1.getFirestore)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    const snapshot = yield database
        .collection("customer")
        .get();
    snapshot.forEach(document => {
        console.log(document.data(), document.id);
    });
}))();
