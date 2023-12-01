import Navbar from "@/components/Navbar";

function Chart() {
  return (
    <>
      <Navbar />
      <div className="superset mx-auto">
        <h1 className="text-4xl mt-10 mb-2 font-black">Superset Dashboard</h1>
        <p className="text-gray-700 mb-10">
          DB 연동 관련으로 로컬 환경에서 구동하는 사진으로 첨부했습니다.
        </p>
        <iframe
          title="My Superset Chart"
          className="ring-2 ring-indigo-700 ring-offset-4"
          width="70%"
          height="500"
          src="/video/42.jpg"
          allowtransparency="true"
        />
      </div>
      <style jsx>{`
        .superset {
          width: 80%;
          height: 100%;
        }
      `}</style>
    </>
  );
}

export default Chart;
