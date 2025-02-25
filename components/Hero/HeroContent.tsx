import { motion } from "framer-motion";
import Image from "next/image";
export default function HeroContent() {
  return (
    <div className="text-left">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 4 }}
        className="text-left sm:text-5xl tablet:text-7xl milker-font"
      >
        Welcome
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 4.5 }}
      >
        ✦ You're in the right place to take your website to the next level ✦
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 5 }}
        className="sm:text-base tablet:text-lg sm:w-[90%] laptop:w-1/2 py-8 text-justify"
      >
        Hey there! I‘m passionate about bringing fresh ideas to life on the web.
        I build websites that not only look amazing but feel amazing to use.
        From smooth animations to responsive designs, I focus on the details
        that make your site stand out. Need an online store that converts? A
        portfolio that wows? Or maybe a custom web app? I‘ve got you covered.
        Let‘s team up and create something that truly represents your brand!
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", delay: 5.5 }}
        className="sm:w-[90%] laptop:w-1/2"
      >
        <h4 className="sm:text-2xl tablet:text-3xl milker-font">Trusted by</h4>

        <div className="grid sm:grid-cols-3 tablet:grid-cols-6 gap-4 mt-2">
          {img.map((data, dataIndex) => (
            <Image
              key={dataIndex}
              src={data.src}
              alt={data.alt}
              width={512}
              height={512}
              className="w-24 h-auto rounded"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const img = [
  {
    src: "/Hero/arrowdia.webp",
    alt: "arrowdia",
  },
  {
    src: "/Hero/flow.webp",
    alt: "flow",
  },
  {
    src: "/Hero/academy.webp",
    alt: "academy",
  },
  {
    src: "/Hero/wuffey.webp",
    alt: "wuffey",
  },
  {
    src: "/Hero/unicorn.webp",
    alt: "unicorn",
  },
  {
    src: "/Hero/dara.webp",
    alt: "dara",
  },
];
