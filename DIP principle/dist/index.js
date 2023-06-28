"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app_router_1 = __importDefault(require("./app.router"));
const port = 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send({ message: "App works fine" });
});
(0, app_router_1.default)(app);
app.listen(port, () => {
    console.log("App works fine on port", port);
});
//# sourceMappingURL=index.js.map