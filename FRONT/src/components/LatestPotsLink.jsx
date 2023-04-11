import { Link } from "react-router-dom";

function LatestPotsLink() {
  return (
    <section className="mt-6">
      <Link to="/posts" className="text-[#5DC0F7] font-bold">ÚLTIMOS POST</Link>
    </section>  
  );
}

export default LatestPotsLink;
