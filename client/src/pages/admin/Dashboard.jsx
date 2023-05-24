import { Link } from "react-router-dom";

/* react icons */
import { RiDashboardFill } from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { VscAdd } from "react-icons/vsc";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { BiRupee } from "react-icons/bi";

export default function Dashboard() {
  return (
    <section className="ml-80">
      <div className="mt-12 mx-4 grid gap-8 grid-cols-[repeat(auto-fit,_minmax(18.375rem,_1fr))] ">
        <div className="flex items-center justify-between p-8 shadow-lg rounded-sm">
          <div>
            <h3 className="mb-4 text-4xl text-dark font-semibold">60</h3>
            <p className="text-xl text-text font-medium">customers</p>
          </div>
          <HiUserGroup className="h-12 w-12 fill-accent" />
        </div>

        <div className="flex items-center justify-between p-8 shadow-lg rounded-sm">
          <div>
            <h3 className="mb-4 text-4xl text-dark font-semibold">6</h3>
            <p className="text-xl text-text font-medium">Rooms</p>
          </div>
          <HiUserGroup className="h-12 w-12 fill-accent" />
        </div>

        <div className="flex items-center justify-between p-8 shadow-lg rounded-sm">
          <div>
            <h3 className="mb-4 text-4xl text-dark font-semibold">2</h3>
            <p className="text-xl text-text font-medium">Avaibale</p>
          </div>
          <HiUserGroup className="h-12 w-12 fill-accent" />
        </div>

        <div className="flex items-center justify-between p-8 bg-accent shadow-lg rounded-sm">
          <div>
            <h3 className="flex items-center mb-4 text-4xl text-white font-semibold">
              <span>
                <BiRupee />
              </span>
              <span>80K</span>
            </h3>
            <p className="text-xl text-white font-medium">Income</p>
          </div>
          <HiUserGroup className="h-12 w-12 fill-white" />
        </div>
      </div>
    </section>
  );
}
