"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.student = void 0;
const typeorm_1 = require("typeorm");
let student = class student extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], student.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "image", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "password", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "reg_no", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "f_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "l_name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "email", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "batch_no", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "about", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "cover_pic", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "ContactNumber", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "linkedin", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "address", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "state", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "projectDis1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "project1", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "projectDis2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "project2", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "projectDis3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "project3", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], student.prototype, "skills", void 0);
student = __decorate([
    typeorm_1.Entity()
], student);
exports.student = student;
