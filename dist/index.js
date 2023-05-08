"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const data_source_1 = __importDefault(require("./src/data-source"));
const index_1 = __importDefault(require("./src/routers/index"));
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: '*',
    }
});
data_source_1.default.initialize().then(() => {
    console.log('con nếch súc sét !');
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use('', index_1.default);
io.on('connection', (socket) => {
    console.log('có đứa vô : ' + socket.id);
    io.on('client-chat', (data) => {
        console.log('Client id : ' + socket.id + "send :" + data);
    });
    socket.on('disconnect', () => {
        console.log('có đứa đi');
    });
});
server.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
//# sourceMappingURL=index.js.map