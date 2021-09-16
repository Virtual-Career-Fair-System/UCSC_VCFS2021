"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExistEventName = exports.isExistRegNo = exports.isExistEmail = void 0;
const student_1 = require("../../entities/student");
const user_1 = require("../../entities/user");
const event_1 = require("../../entities/event");
const isExistEmail = (email) => {
    return user_1.user.findOne({ email: email });
};
exports.isExistEmail = isExistEmail;
const isExistRegNo = (regNo) => {
    return student_1.student.findOne({ reg_no: regNo });
};
exports.isExistRegNo = isExistRegNo;
const isExistEventName = (eventName) => {
    return event_1.event.findOne({ name: eventName });
};
exports.isExistEventName = isExistEventName;
