import Quote from "@/components/Quote";
import { quotes } from "@/constants";

export default function Home() {
  return (
    <div className="flex flex-col bg h-[100vh]">
      <div className="mt-9">
        <Quote quotes={quotes} />
      </div>
    </div>
  );
}
