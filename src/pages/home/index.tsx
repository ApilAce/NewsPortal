import Link from "next/link";

const Homepage = () => {
  return (
    <div>
      <div>Homepage</div>
      <Link href={"/about/"}>About</Link>
    </div>
  );
};

export default Homepage;
