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
exports.LOGIN = void 0;
const graphql_1 = require("graphql");
const student_1 = require("../../entities/student");
const user_1 = require("../../entities/user");
const messages_1 = require("../typeDef/messages");
const userValidations_1 = require("../validations/userValidations");
const crypto_1 = __importDefault(require("crypto"));
const company_1 = require("../../entities/company");
exports.LOGIN = {
    type: messages_1.LoginResponseMessageType,
    args: {
        email: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = args;
            if (!(yield userValidations_1.isExistEmail(email))) {
                return { successful: false, message: "Couldn't find your account", type: '', id: null };
            }
            const PasswordSh1 = crypto_1.default.createHash('md5').update(password).digest('hex');
            const tempUser = yield user_1.user.findOne({ email: email });
            if ((tempUser === null || tempUser === void 0 ? void 0 : tempUser.type) == 'student') {
                const tempStudent = yield student_1.student.findOne({ email: email });
                if ((tempStudent === null || tempStudent === void 0 ? void 0 : tempStudent.password) == PasswordSh1) {
                    return { successful: true, message: "Welcome to virtual career fair UCSC", type: 'student', id: tempStudent === null || tempStudent === void 0 ? void 0 : tempStudent.id };
                }
                else {
                    return { successful: false, message: "Wrong password. Try again or click ‘Forgot password’ to reset it. ", type: '', id: null };
                }
            }
            else if ((tempUser === null || tempUser === void 0 ? void 0 : tempUser.type) == 'company') {
                const tempCompany = yield company_1.company.findOne({ email: email });
                if ((tempCompany === null || tempCompany === void 0 ? void 0 : tempCompany.password) == PasswordSh1) {
                    return { successful: true, message: "Welcome to virtual career fair UCSC", type: 'company', id: tempCompany === null || tempCompany === void 0 ? void 0 : tempCompany.com_id };
                }
                else {
                    return { successful: false, message: "Wrong password. Try again or click ‘Forgot password’ to reset it. ", type: '', id: null };
                }
            }
            else if ((tempUser === null || tempUser === void 0 ? void 0 : tempUser.type) == 'organizer') {
                return { successful: true, message: "Welcome to virtual career fair UCSC", type: 'organizer', id: 3 };
            }
            else if ((tempUser === null || tempUser === void 0 ? void 0 : tempUser.type) == 'admin') {
                return { successful: true, message: "Welcome to virtual career fair UCSC", type: 'admin', id: 1 };
            }
            else if ((tempUser === null || tempUser === void 0 ? void 0 : tempUser.type) == 'coordinator') {
                return { successful: true, message: "Welcome to virtual career fair UCSC", type: 'coordinator', id: 2 };
            }
            else {
                return { successful: false, message: "Unable to logging,try again", type: '', id: null };
            }
        });
    }
};
