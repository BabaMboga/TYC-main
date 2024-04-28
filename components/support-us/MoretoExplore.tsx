"use client";
import { FC } from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";
import { useState } from "react";
import Modal from "@/components/support-us/donate/modal";

const MoretoExplore = ({}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const handleModalOpen = (title: string, description: string) => {
    setModalTitle(title);
    setModalDescription(description);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="w-full md:px-20 py-14 bg-[#810E0E] flex-col justify-start items-center inline-flex">
        <div className="flex flex-col items-start justify-start gap-12 md:h-14 mb-6">
          <div className="flex flex-col items-center  self-stretch justify-start gap-2 md:h-14">
            <div className="self-stretch text-xl font-bold text-white leading-10 text-center  md:text-3xl">
              More ways to support us
            </div>
            <div className="self-stretch  font-bold leading-10 text-center md:text-2xl">
              <p className=" my-3 font-normal leading-10 text-center text-white md:text-xl">
                Discover diverse avenues to contribute to the mission of TYC
                Africa Trust beyond monetary donations. Connect with us using
                the contact details provided and let us guide you through
                alternative methods of support. Explore the following sections
                to learn about unconventional ways through which you can
                actively participate in advancing our cause.
              </p>
            </div>
          </div>
        </div>

        <div className="grid items-start justify-start gap-5 py-5 md:gap-24 md:grid-cols-2 md:py-20 px-14">
          <div
            className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]"
            onClick={() =>
              handleModalOpen(
                "Large Gift Donation",
                "Make a transformative impact with your most generous contribution. A large gift donation represents a signifcant investment in TYC Africa Trust's mission to empower communities across Africa. Your support enables us to implement vital programs, address pressing needs and create lasting change for those in need."
              )
            }
          >
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12 text-2xl font-semibold  leading-10 tracking-wide">
              Large gift donation
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          <div
            className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]"
            onClick={() =>
              handleModalOpen(
                "Philanthropic Giving",
                " I did not understand philanthropic giving."
              )
            }
          >
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12 text-2xl font-semibold  leading-10 tracking-wide">
              Philanthropic giving
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          <div
            className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]"
            onClick={() =>
              handleModalOpen(
                "Partner With Us",
                "Collaborate with TYC Africa Trust as a valued partner. Together we can amplify each other's commitment to social responsibility and community empowerment. Collaborate with us to drive meaningful change across Africa and the world at Large. Whether you're a corporation foundation nonprofit organization or individual donor our tailored partnership opportunities align with your values and goals. Through strategic collaborations, we address complex social challnges and build resilient communities, making a tangible difference in people's lives."
              )
            }
          >
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12  text-2xl font-semibold  leading-10 tracking-wide">
              Partner with us
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>

          <div
            className="relative rounded-md w-96 h-36 bg-primary text-primary-foreground hover:bg-primary/90 transition-transform duration-1000 transform -skew-x-12 gap-1 shadow-[10px_8px_0px_rgba(29,78,216,1)] hover:shadow-[15px_8px_0px_rgba(29,78,216,1)]"
            onClick={() =>
              handleModalOpen(
                "Volunteerism",
                "Volunteerism with TYC Africa Trust offers a rewarding opportunity to make a difference through mentoring, sharing talents and donating time & skills. Volunteers may offer their expertise, labor or professional services to support nonprofit organisations, schools, hospitals or other community groups. Through mentorship, you can ispire and guide individuals to unlock their potential while learning and growing. Join our volunteer community today and be part of the transformative journey towards positive change in Africa."
              )
            }
          >
            <div className="w-80 h-16 left-[19px] top-[58px] absolute skew-x-12 text-2xl font-semibold  leading-10 tracking-wide">
              Volunteerism
            </div>
            <div className="w-44 h-36 left-[274px] top-0 absolute opacity-70" />
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          title={modalTitle}
          description={modalDescription}
          handleClose={handleModalClose}
        />
      )}
    </>
  );
};

export default MoretoExplore;
