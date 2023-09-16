import Image from "next/image";
import Link from "next/link";
import MoreIcon from "@icons/home/moreIcon.png";
import Button from "@/components/Button";
import SampleImage from "@image/sampleImage.png";
export default function Home() {
  return (
    <main className=" absolute w-[calc(100%-100px)] flex justify-center right-0 top-[64px] bottom-0 h-fit">
      <div className="w-full h-full p-[40px]">
        <div className="w-full flex items-center justify-between mb-5">
          <h1 className="text-[#14375F] font-bold text-[30px] leading-[45px]">
            Featured Blogs
          </h1>
          <Link
            href={"/blog/featured-blog"}
            className="flex items-center gap-[6px] cursor-pointer hover:gap-[10px] duration-300"
          >
            <Image src={MoreIcon} height={20} width={20} alt="Back"></Image>
            <div className="text-[#0066B2] text-xl leading-[24px] font-medium ">
              View more
            </div>
          </Link>
        </div>
        <div className="w-full flex flex-wrap justify-between">
          <div className="max-w-[calc((100%-60px)/3)] rounded-lg overflow-hidden w-full drop-shadow-lg shadow-lg">
            <Image
              src={SampleImage}
              alt="image"
              className="w-full object-cover"
            ></Image>
            <div className="w-full flex gap-2 flex-col p-4">
              <div className="w-full items-stretch text-2xl leading-[30px] font-bold ">
                Noteworthy technology acquisitions 2021
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-[14px] leading-[18px] text-[#0066B2] font-medium">
                  Author
                </p>
                <p className="text-[14px] leading-[18px] text-[#0066B2] font-medium">
                  Category
                </p>
              </div>
              <div className="self-stretch text-base font-normal text-gray-500">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="text-gray-500 text-[12px] font-medium">
                  a min ago
                </div>
                <Button
                  textContent="Read more"
                  icon="arrowRight"
                  iconPosition="right"
                  backgroundColor="bg-[#0066B2]"
                  href="/"
                  tailwind="hover:opacity-80"
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
