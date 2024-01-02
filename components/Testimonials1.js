import Image from "next/image";

import userImage from "@/public/olivia-testimonial.webp";

// A beautiful single testimonial with a user name and and company logo logo
const Testimonial = () => {
  return (
    <section
      className="relative isolate overflow-hidden bg-base-100 px-8 py-24 sm:py-32"
      id="testimonials"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.base-300),theme(colors.base-100))] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-base-100 shadow-lg ring-1 ring-base-content/10 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <figure className="mt-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative rounded-xl border border-base-content/5 bg-base-content/5 p-1.5 sm:-rotate-1">
              <Image
                width={320}
                height={320}
                className="rounded-lg max-w-[320px] md:max-w-[280px] lg:max-w-[320px] object-center border-2 border-white/10 shadow-md"
                // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
                // If you're using a static image, add placeholder="blur"
                src={userImage}
                placeholder="blur"
                alt="A testimonial from a happy customer"
              />
            </div>

            <div>
              <blockquote className="text-xl font-medium leading-8 text-base-content sm:text-2xl sm:leading-10">
                I got your blueprint after my friend recommended it to me and I
                loved the 3D renders. I picked one that just screamed
                &apos;me&apos;, calculated how many tiles I need, and went
                through the shopping list to get everything. The tips on how to
                choose a builder were very helpful. 100% recommend this.
              </blockquote>
              <figcaption className="mt-10 flex items-center justify-start gap-5">
                <div className="text-base">
                  <div className="font-semibold text-base-content mb-0.5">
                    Olivia Harris
                  </div>
                  <div className="text-base-content/60">
                    Professional Photographer
                  </div>
                </div>

                <Image
                  width={150}
                  height={50}
                  className="w-20 md:w-24"
                  // Ideally, load from a statically generated image for better SEO performance (import userImage from "@/public/userImage.png")
                  src="https://logos-world.net/wp-content/uploads/2020/10/Reddit-Logo.png"
                  alt="Reddit logo"
                />
              </figcaption>
            </div>
          </div>
        </figure>
      </div>
    </section>
  );
};

export default Testimonial;
