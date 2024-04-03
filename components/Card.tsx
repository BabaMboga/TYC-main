import Image from "next/image";
import Link from "next/link";
import {FC} from 'react'

interface CardProps{
    title: string;
    description: string;
    link: string;
    image: string;
}

const OpportunityCard: FC<CardProps> = ({ title, description, link, image }) => (
    <div className="border border-zinc-200  flex-col justify-between items-center gap-[5px] inline-flex">
      <Image alt={description} src={image} height={400} width={400} sizes="100vw" style={{ width: '100%', height: '400px' }} />
      <div className="flex flex-col items-start self-stretch justify-start gap-4 px-4 pt-6 pb-4">
        <h2 className="text-xl md:text-[30px] text-center font-semibold md:leading-[34px]">{title}</h2>
        <p className="self-stretch text-base font-normal leading-[33.60px]">{description}</p>
      </div>
      <div className="inline-flex items-start justify-start gap-4 p-4 ">
        <div className="flex items-center justify-between h-12 py-4 pr-2 grow shrink basis-0">
          <div className="flex items-center justify-center">
            <div className="text-base font-medium leading-tight tracking-wide underline ">
              {/* <Link href={link}>{title}</Link> */}
            </div>
          </div>
          <div className="relative w-6 h-6" />
        </div>
      </div>
    </div>
  );

export default OpportunityCard