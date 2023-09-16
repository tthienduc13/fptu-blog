import Image from "next/image";
import Link from "next/link";
import SampleImage from "@image/sampleImage.png";
import MoreIcon from "@icons/home/moreIcon.png";
import BlogCard from "@/components/BlogCard";
export default function Home() {
  const sampleDate = [
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Sofware Engineering",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Language",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
    {
      image: SampleImage,
      title: "Noteworthy technology acquisitions 2021",
      author: "Nguyen Le Thien Duc",
      category: "Business",
      desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
      time: "a min ago",
    },
  ];
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
          {sampleDate.map((data, index) => (
            <BlogCard
              key={index}
              title={data.title}
              author={data.author}
              image={data.image}
              category={data.category}
              desc={data.desc}
              time={data.time}
            ></BlogCard>
          ))}
        </div>
      </div>
    </main>
  );
}
