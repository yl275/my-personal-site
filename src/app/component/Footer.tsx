import RightNav from "./Header/RightNav";

export default function Footer() {
  return (
    <>
      <div
        className="
            border-t-5 p-6 bg-amber-600 
        "
      >
        <div className="flex justify-between ml-10 mr-10">
          <div className="flex flex-col gap-2">
            <p>© 2025 Yuan Li</p>
            <a href="mailto:liyuan275@outlook.com">liyuan275@outlook.com</a>
          </div>

          <div className="">
            <RightNav></RightNav>
          </div>
        </div>
      </div>
    </>
  );
}
