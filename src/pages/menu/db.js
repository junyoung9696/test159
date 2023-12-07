import Navbar from "@/components/Navbar";
import styled from "styled-components";
import Link from 'next/link';


const MovieContainer = styled.div`
  width: 720px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
`;

const MovieBox = styled.video`
  width: 720px;
  height: 1200px;
  display: block;
`;

function Chart() {
  return (
    <>
      <Navbar />
      <div className="superset mx-auto">
        <h1 className="text-4xl mt-10 mb-2 font-black">DB 관련</h1>
        <p className="text-gray-700 mb-10">
          
        </p>

        <Link href="/video/db.mp4">
        <MovieContainer>
        <MovieBox src="/video/db.mp4">
        </MovieBox>
        </MovieContainer>
        </Link>
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