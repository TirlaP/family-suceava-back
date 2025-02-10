'use strict';

module.exports = async ({ strapi }) => {
  if (process.env.NODE_ENV === 'development') {
    try {
      // Load data
      const classesData = require('./data/classes.json');
      const instructorsData = require('./data/instructors.json');
      const testimonialsData = require('./data/testimonials.json');

      // Count existing entries
      const existingClasses = await strapi.db.query('api::class.class').count();
      const existingInstructors = await strapi.db.query('api::instructor.instructor').count();
      const existingTestimonials = await strapi.db.query('api::testimonial.testimonial').count();

      // Only seed if no entries exist
      if (existingClasses === 0) {
        for (const classData of classesData.classes) {
          await strapi.service('api::class.class').create({
            data: {
              ...classData,
              publishedAt: new Date()
            },
          });
        }
        console.log('Classes seeded successfully');
      }

      if (existingInstructors === 0) {
        for (const instructorData of instructorsData.instructors) {
          await strapi.service('api::instructor.instructor').create({
            data: {
              ...instructorData,
              publishedAt: new Date()
            },
          });
        }
        console.log('Instructors seeded successfully');
      }

      if (existingTestimonials === 0) {
        for (const testimonialData of testimonialsData.testimonials) {
          await strapi.service('api::testimonial.testimonial').create({
            data: {
              ...testimonialData,
              publishedAt: new Date()
            },
          });
        }
        console.log('Testimonials seeded successfully');
      }
    } catch (error) {
      console.error('Seeding error:', error);
    }
  }
};