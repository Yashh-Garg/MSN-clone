import "../styles/Home.css";
import Left from "../component/Header/Left";
import Middle from "../component/Header/Middle";
import Right from "../component/Header/Right";
export default function Home() {
  return (
    <>
      <section className="min-h-screen overflow-auto">
        <div className="grid grid-cols-12 gap-2 mx-1 my-1">
          <div className="col-span-3">
            <Left />
          </div>
          <div className="col-span-6">
            <Middle />
          </div>
          <div className="col-span-3">
            <Right />
          </div>
        </div>
      </section>
    </>
  );
}
