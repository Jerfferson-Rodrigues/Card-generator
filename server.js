import fastify from "fastify";
import UsersController from "./app/Controllers/UsersController";
import VCardController from "./app/Controllers/VCardController";

require("dotenv").config();

let port = process.env.PORT || 3080;

const app = fastify({ logger: true });

app.register(require("fastify-cors"), {
  origin: "*",
});

if (process.env.NODE_ENV == "development") {
  app.register(require("fastify-swagger"), {
    routePrefix: "/docs",
    swagger: {
      info: {
        title: "Commcepta's V-Card Generator Test API docs",
        description: "This document describe api routes for v-card generator.",
        version: "1.0.0",
      },
      host: `localhost:${port}`,
      schemes: ["http"],
    },
    uiConfig: {
      docExpansion: "full",
      deepLinking: false,
    },
    staticCSP: true,
    transformStaticCSP: (header) => header,
    exposeRoute: true,
  });
}

app.get(
  "/commcepters",
  {
    schema: {
      description: "Get data from all registered commcepters.",
    },
  },
  UsersController.getCommcepters
);

app.get(
  "/commcepter/:commcepter_id",
  {
    schema: {
      params: {
        type: "object",
        properties: {
          commcepter_id: { type: "integer" },
        },
      },
      description: "Get data from one commcepter.",
    },
  },
  UsersController.getCommcepter
);

app.get(
  "/vcard/qrcode/commcepter/:commcepter_id",
  {
    schema: {
      params: {
        type: "object",
        properties: {
          commcepter_id: { type: "integer" },
        },
      },
      queryString: {
        color: { type: "string" },
      },
      description: "Generate V-Card QR Code for registered commcepter.",
    },
  },
  VCardController.generateQRCodeForCommcepter
);

app.post(
  "/vcard/qrcode/new",
  {
    schema: {
      body: {
        type: "object",
        required: [
          "first_name",
          "last_name",
          "cellphone",
          "email",
          "company",
          "title",
          "street",
          "city",
          "state",
        ],
        properties: {
          first_name: { type: "string" },
          last_name: { type: "string" },
          cellphone: { type: "string" },
          email: { format: "email" },
          company: { type: "string" },
          title: { type: "string" },
          city: { type: "string" },
          street: { type: "string" },
          state: { type: "string" },
          color: { type: "string" },
        },
      },
      description:
        "Generate V-Card QR Code for a new and non-existent commcepter.",
    },
  },
  VCardController.generateQRCodeFromNewData
);

app.get(
  "/",
  {
    schema: {
      description: "Endpoint for check API status.",
    },
  },
  (request, reply) => {
    reply.send({
      message: "Everything is fine.",
    });
  }
);

app.listen(port, (err, address) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`server listening on ${address}`);
});
