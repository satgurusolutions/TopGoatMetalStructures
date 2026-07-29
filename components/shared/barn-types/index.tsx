'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Horse Barn',
    description:
      'Designed with round roof lines and horizontal sheet metal, horse barns are economical, durable, affordable, and easily maintained.',
  },
  {
    title: 'Carolina Barn',
    description:
      'Crafted in the Boxed Eave style with horizontal sheet metal and an A-frame roofline, Caroline Barns can be upgraded to the vertical roof style with vertical sheet metal.',
  },
  {
    title: 'Seneca Barn',
    description:
      'The most durable of the three barn styles, the Seneca barn features an A-frame roof line with boxed eaves and horizontal sheet metal, although they can be upgraded easily to the vertical roof style with vertical sheet metal. Because of cross braces used for the roof, Seneca barns offer greater resilience and are best for areas with high winds or heavy snowfall.',
  },
];

export default function BarnTypes() {
  return (
    <section>
      {/* Overlay for better contrast */}

      <div className="relative mx-auto max-w-7xl px-4 xl:px-0 [@media(width=1280px)]:px-4">
        {/* Title */}
        <motion.h2
          className="mb-12 text-center text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Types of Barns
        </motion.h2>
        <motion.p
          className="mb-12 text-center text-base font-bold md:text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Metal barn buildings come in different styles based on roof-type. Choose a barn by style
          or application:
        </motion.p>

        {/* Steps grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-3">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="space-y-3 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: idx * 0.1 }}
            >
              <div className="flex items-center justify-center">
                <span className="bg-accent flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white shadow-md lg:h-14 lg:w-14 xl:text-2xl">
                  {idx + 1}
                </span>
              </div>
              <h3 className="text-lg font-semibold uppercase lg:text-xl">{step.title}</h3>
              <p className="text-muted-foreground text-sm lg:text-base">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
