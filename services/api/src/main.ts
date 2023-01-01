import { NestFactory } from "@nestjs/core";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import { PrismaService } from "./prisma.service";
import { AppModule } from "./app.module";

async function bootstrap() {
  const config = new DocumentBuilder()
    .setTitle(`Frontend Mentor Invoice API`)
    .setDescription(`API for use in the Frontend Mentor Invoice App challenge`)
    .setVersion(`1.0`)
    .addTag(`invoice`)
    .build();

  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(`documentation`, app, document);

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  await app.listen(8080);
}

bootstrap();
