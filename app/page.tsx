import Quote from "@/components/Quote";
import { quotes } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col  h-[90vh]">
      <div >
        <Quote quotes={quotes} />
      </div>
    </div>
  );
}
