import SectionTitle from "../SectionTitle";
import Blogs from "./Blogs";

export default function BlogsSection() {
  return (
    <div className="min-h-[50vh] flex flex-col  bg-green-300  border-b-6 md:p-15 gap-6">
      <SectionTitle title="Blogs" />
      <Blogs />
    </div>
  );
}
