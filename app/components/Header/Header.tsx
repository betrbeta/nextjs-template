import Link from "next/link";
import { SendEmail } from "../SendEmail/SendEmail";

export const Header = () => {
  return (
    <div className="flex justify-between items-center mt-1 transition-all">
      <div className="flex justify-center items-center transition-all">
        <button className="px-6 py-3 text-white transition-all hover:bg-white hover:text-[#330033] rounded-s-[22px] border-[3px] border-black border-solid">
          <Link href="/mySubscription">Subscription</Link>
        </button>
        <button className="px-6 py-3 text-white transition-all hover:bg-white hover:text-[#330033] rounded-e-[22px] border-[3px] border-l-0 border-black border-solid">
          <Link href="/feedback" className="whitespace-nowrap">
            Feedback Form
          </Link>
        </button>
      </div>
      <SendEmail />
    </div>
  );
};
