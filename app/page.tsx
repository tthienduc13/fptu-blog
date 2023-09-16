import FeaturedBlog from "@/components/sections/home/FeatureBlog";

export default function Home() {
  return (
    <main className=" absolute sm:w-full h-full lg:w-[calc(100%-100px)] flex flex-col justify-center right-0 top-[64px] bottom-0 ">
      <div className="w-full h-full ">
        <FeaturedBlog></FeaturedBlog>
      </div>
    </main>
  );
}
