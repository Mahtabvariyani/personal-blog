import MyRules from "@/components/MyRules";
import Quote from "@/components/Quote";
import { quotes } from "@/constants";

export default function Home() {
  return (
    <div>
      <MyRules/>
      <Quote quotes={quotes} />
    </div>
  );
}
