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
exports.Role = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
let Role = class Role extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Role.prototype, "name", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.PrimaryColumn({ unique: true }),
    __metadata("design:type", Number)
], Role.prototype, "key", void 0);
__decorate([
    typeorm_1.ManyToOne(type => User_1.User, (user) => user.role),
    typeorm_1.JoinColumn(),
    __metadata("design:type", User_1.User)
], Role.prototype, "owner", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Role.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Role.prototype, "updatedAt", void 0);
Role = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Role);
exports.Role = Role;
//# sourceMappingURL=Role.js.map