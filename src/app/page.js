import HomeHeader from "googleclon/components/HomeHeader";
import HomeSearch from "googleclon/components/HomeSearch";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="Google logo"
          width={300}
          height={100}
          priority
          style={{ with: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
}
