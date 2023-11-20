"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = 3000;
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({ origin: '*' });
    await app.listen(PORT);
    console.log(`server running on port ${PORT}`);
}
bootstrap();
//# sourceMappingURL=index.js.map