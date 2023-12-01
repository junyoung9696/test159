import Navbar from "@/components/Navbar";
import Image from "next/image";
import Footer from "@/components/footer";

function Chart() {
  return (
    <>
      <Navbar />
      <div className="superset mx-auto">
        <h1 className="text-4xl mt-10 mb-2 font-black">Superset Dashboard</h1>
        <p className="text-gray-700 mb-10">
          DB 연동 관련으로 로컬 환경에서 구동하는 사진으로 첨부했습니다.
        </p>
        <div className="img flex space-x-16">
        <div className="artboard artboard-horizontal phone-6">
        <iframe
          title="My Superset Chart"
          className="ring-2 ring-indigo-700 ring-offset-4"
          width="100%"
          height="550"
          src="/video/42.jpg"
          allowtransparency="true"
        />
        </div>
        <div className="artboard phone-3">
        <Image src="/video/test4.gif" alt="y" width={720} height={120}/>
        </div>
        </div>
        
        <div className="flex flex-col w-full">
        <div className="divider divider-primary"></div>
        </div> 

        <div className="img auto-mx flex w-screen space-x-2">
        <div className="artboard phone-3">
        <Image src="/video/test5.gif" alt="y" width={720} height={120}/>
        </div>
        <div className="artboard phone-3 mx-auto">
        </div>
        <div className="artboard phone-3 mx-auto">
        <Image src="/video/test6.gif" alt="y" width={720} height={120}/>
        </div>
        </div>

      </div>
      <style jsx>{`
        .superset {
          width: 80%;
          height: 100%;
        }
      `}</style>
      <Footer/>
    </>
  );
}

export default Chart;
