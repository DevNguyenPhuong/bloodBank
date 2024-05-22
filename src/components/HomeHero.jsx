import background from "../assets/freepik-export-20240518235644yHzw.png";
function HomeHero() {
  return (
    <div className="bg-zinc-200 w-full h-[500px] flex items-center pt-12">
      <div className="flex-[2] flex flex-col gap-4 justify-center items-center">
        <div className="font-bold text-4xl uppercase text-red-600">
          Ngân hàng máu trung ương
        </div>
        <div className="text-3xl text-red-500">
          - Quyên góp <span>máu</span> để cứu hàng triệu sinh mạng -
        </div>
      </div>
      <img className=" w-72 h-auto object-cover" src={background} alt="" />
    </div>
  );
}

export default HomeHero;
