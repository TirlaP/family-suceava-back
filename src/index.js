'use strict';

const classesData = require('./bootstrap/data/classes.json');
const instructorsData = require('./bootstrap/data/instructors.json');
const testimonialsData = require('./bootstrap/data/testimonials.json');

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    // Check if there is already data
    const existingClasses = await strapi.db.query('api::class.class').count();
    const existingInstructors = await strapi.db.query('api::instructor.instructor').count();
    const existingTestimonials = await strapi.db.query('api::testimonial.testimonial').count();

    if (existingClasses === 0) {
      const promises = classesData.classes.map(classData => 
        strapi.entityService.create('api::class.class', {
          data: {
            ...classData,
            publishedAt: new Date(),
          }
        })
      );
      await Promise.all(promises);
      console.log('✅ Classes seeded');
    }

    if (existingInstructors === 0) {
      const promises = instructorsData.instructors.map(instructorData =>
        strapi.entityService.create('api::instructor.instructor', {
          data: {
            ...instructorData,
            publishedAt: new Date(),
          }
        })
      );
      await Promise.all(promises);
      console.log('✅ Instructors seeded');
    }

    if (existingTestimonials === 0) {
      const promises = testimonialsData.testimonials.map(testimonialData =>
        strapi.entityService.create('api::testimonial.testimonial', {
          data: {
            ...testimonialData,
            publishedAt: new Date(),
          }
        })
      );
      await Promise.all(promises);
      console.log('✅ Testimonials seeded');
    }
  },
};