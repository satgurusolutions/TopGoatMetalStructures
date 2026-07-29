'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// === Team Data ===
const teamMembers = [
  {
    name: 'Cliff Mills',
    designation: 'Owner',
    img: '/images/about-us/Cliff_Mills.webp',
    desc: `The founder and owner of Top Goat Metal Structures has been in the metal structure industry for 14 years. 
      He is a proud supporter of the military and all of his military brothers and sisters. 
      Outside of work he enjoys outdoor activities like riding ATVs, participating in water sports, and playing football.`,
  },
  {
    name: 'Kristy Baker',
    designation: 'Sales Manager',
    img: '/images/about-us/kristy-2.webp',
    desc: `Kristy Baker is the Sales Manager at Top Goat Metal Structures with eight years of experience in the metal building industry. 
      Outside of work she enjoys spending time with her family and friends.`,
  },
  {
    name: 'David Truban',
    designation: 'Building Specialist',
    img: '/images/about-us/david_truban.webp',
    desc: `My name is David Truban, and I am a Building Specialist at Top Goat Metal Structures. Transparency and communication are key to providing customers with the best building solutions. 
      Outside of work, I have a wonderful wife and two daughters, and I enjoy fly fishing, hunting, and spending time outdoors.`,
  },
  // {
  //   name: 'Leslie Hamm',
  //   designation: 'Building Specialist',
  //   img: '/images/about-us/leslie.webp',
  //   desc: `Hi, my name is Leslie. I enjoy spending my spare time with my husband and daughter. I love reading, photography, and traveling.`,
  // },
  {
    name: 'Makayla Baker',
    designation: 'Building Specialist',
    img: '/images/about-us/makayla.webp',
    desc: `My name is MaKayla. I enjoy firefighting, spending time with family, and taking vacations to West Virginia to ride SXS’s. I’m competitive and headstrong, always ready for a challenge.`,
  },
  // {
  //   name: 'Eric Cabrera',
  //   designation: 'Building Specialist',
  //   img: '/images/about-us/Eric.webp',
  //   desc: `My name is Eric. Outside of work, I enjoy spending time with friends and attending concerts.`,
  // },
  {
    name: 'Isabella Hooker',
    designation: 'Building Specialist',
    img: '/images/about-us/bella_hooker.webp',
    desc: `My name is Bella. I enjoy spending time with friends and family, being outdoors, and experiencing new things.`,
  },
  // {
  //   name: 'Junior Torres',
  //   designation: 'Building Specialist',
  //   img: '/images/about-us/Junior_Torrest.webp',
  //   desc: `My name is Junior Torres.`,
  // },
];

const MeetOurTeam = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-4 xl:px-0 [@media(width=1280px)]:px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-black xl:text-[56px]">
            Meet Our <span className="text-primary">Warrior Team</span>
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[32px] bg-gray-50 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative h-[380px] overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay Bio */}
                <div className="absolute inset-0 flex items-end bg-black/70 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-white">{member.desc}</p>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 text-center">
                {/* Warrior Star Logo (SVG) */}
                <div className="mx-auto mb-4 h-10 w-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 47"
                    fill="none"
                    className="h-full w-full"
                  >
                    <path
                      d="M39.8027 46.5571L34.1547 29.0372L49.0219 18.1828L30.6142 18.1407L24.8857 0.646729L19.1572 18.1407L0.74939 18.1828L15.6163 29.0372L9.96813 46.5571L24.8857 35.7714L39.8027 46.5571Z"
                      fill="#2C2B29"
                    />
                  </svg>
                </div>

                <h3 className="text-lg font-semibold text-black">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.designation}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
