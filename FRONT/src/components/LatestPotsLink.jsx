import { Link } from "react-router-dom";

function LatestPotsLink() {
  return (
    <section className="mt-28">
      <Link to="/posts" className="text-[#5DC0F7] text-xs">ÚLTIMOS POST</Link>
    </section>  
  );
}

export default LatestPotsLink;
