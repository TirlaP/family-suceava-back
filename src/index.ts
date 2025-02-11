import { Strapi } from "@strapi/types/dist/core";
import startHealthCheck from "../config/functions/healthcheck";
const classesData = require("./bootstrap/data/classes.json");
const instructorsData = require("./bootstrap/data/instructors.json");
const testimonialsData = require("./bootstrap/data/testimonials.json");
const servicesData = require("./bootstrap/data/services.json");
const eventsData = require("./bootstrap/data/events.json");
const locationsData = require("./bootstrap/data/locations.json");

export default {
  register({ strapi }: { strapi: Strapi }) {
    // Start health check monitoring when Strapi is ready
    strapi.server.httpServer.on('listening', () => {
      console.log('🏥 Starting health check monitoring...');
      startHealthCheck(strapi);
    });
  },

  async bootstrap({ strapi }: { strapi: Strapi }) {
    try {
      console.log("Starting seeding...");

      // // 1) Remove all existing data in each collection
      // await strapi.db.query("api::class.class").deleteMany({});
      // await strapi.db.query("api::instructor.instructor").deleteMany({});
      // await strapi.db.query("api::testimonial.testimonial").deleteMany({});
      // await strapi.db.query("api::service.service").deleteMany({});
      // await strapi.db.query("api::event.event").deleteMany({});
      // await strapi.db.query("api::location.location").deleteMany({});

      // console.log("❌ Old data removed.");

      // // 2) Seed Classes
      // {
      //   const promises = classesData.classes.map(async (classData: any) => {
      //     // generate slug
      //     const slug = classData.title
      //       .toLowerCase()
      //       .replace(/\s+/g, "-")
      //       .replace(/[^a-z0-9-]/g, "");

      //     return strapi.entityService.create("api::class.class", {
      //       data: {
      //         ...classData,
      //         slug,
      //         publishedAt: new Date(),
      //       },
      //     });
      //   });
      //   await Promise.all(promises);
      //   console.log("✅ Classes seeded successfully");
      // }

      // // 3) Seed Instructors
      // {
      //   const promises = instructorsData.instructors.map(
      //     async (instructorData: any) => {
      //       const slug = instructorData.name
      //         .toLowerCase()
      //         .replace(/\s+/g, "-")
      //         .replace(/[^a-z0-9-]/g, "");
      //       return strapi.entityService.create("api::instructor.instructor", {
      //         data: {
      //           ...instructorData,
      //           slug,
      //           publishedAt: new Date(),
      //         },
      //       });
      //     }
      //   );
      //   await Promise.all(promises);
      //   console.log("✅ Instructors seeded successfully");
      // }

      // // 4) Seed Testimonials
      // {
      //   const promises = testimonialsData.testimonials.map(
      //     async (testimonialData: any) => {
      //       return strapi.entityService.create("api::testimonial.testimonial", {
      //         data: {
      //           ...testimonialData,
      //           publishedAt: new Date(),
      //         },
      //       });
      //     }
      //   );
      //   await Promise.all(promises);
      //   console.log("✅ Testimonials seeded successfully");
      // }

      // // 5) Seed Services
      // {
      //   const promises = servicesData.services.map(async (serviceData: any) => {
      //     return strapi.entityService.create("api::service.service", {
      //       data: {
      //         ...serviceData,
      //         publishedAt: new Date(),
      //       },
      //     });
      //   });
      //   await Promise.all(promises);
      //   console.log("✅ Services seeded successfully");
      // }

      // // 6) Seed Events
      // {
      //   const promises = eventsData.events.map(async (eventData: any) => {
      //     const slug = eventData.title
      //       .toLowerCase()
      //       .replace(/\s+/g, "-")
      //       .replace(/[^a-z0-9-]/g, "");
      //     return strapi.entityService.create("api::event.event", {
      //       data: {
      //         ...eventData,
      //         slug,
      //         publishedAt: new Date(),
      //       },
      //     });
      //   });
      //   await Promise.all(promises);
      //   console.log("✅ Events seeded successfully");
      // }

      // // 7) Seed Locations
      // {
      //   const promises = locationsData.locations.map(
      //     async (locationData: any) => {
      //       const slug = locationData.city
      //         .toLowerCase()
      //         .replace(/\s+/g, "-")
      //         .replace(/[^a-z0-9-]/g, "");
      //       return strapi.entityService.create("api::location.location", {
      //         data: {
      //           ...locationData,
      //           slug,
      //           publishedAt: new Date(),
      //         },
      //       });
      //     }
      //   );
      //   await Promise.all(promises);
      //   console.log("✅ Locations seeded successfully");
      // }

      console.log("Seeding completed!");
    } catch (error) {
      console.error("Bootstrap error:", error);
    }
  },
};
