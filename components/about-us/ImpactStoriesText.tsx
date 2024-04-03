import { FC } from "react";

const ImpactStoriesText = () => {
  return (
    <div className="flex items-center flex-col gap-4 px-3 md:px-14 py-10 text-[#19251D] bg-slate-50">
      <div className="flex text-center md:px-12">
        <h1 className="font-semibold text-3xl">Wondering what sets us apart</h1>
      </div>

      <div className="flex items-center md:px-12 w-10/12">
        <ul className=" list-outside list-disc">
          <li>
            <p className="text-base font-normal text-center md:px-2">
              <span className=" text-xl font-semibold">Proven Impact: </span>Over the years,
              we&apos;ve witnessed countless success stories of individuals
              whose lives have been transformed through TYC Africa Trust&apos;s
              programs.
            </p>
          </li>
          <li>
            <p className="text-base font-normal text-center md:px-2">
              <span className="text-xl font-semibold">Holistic Approach: </span>We don&apos;t just address the surface; we delve into
              the holistic development of youth—mind, body, and spirit.
            </p>
          </li>
          <li>
            <p className="text-base font-normal text-center md:px-2">
              <span className="text-xl font-semibold">Future Focus: </span>Our commitment extends beyond the present. We&apos;re dedicated to
              shaping a future where empowered youth become the catalysts for positive change in their communities.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImpactStoriesText;
