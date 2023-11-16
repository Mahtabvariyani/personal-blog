import MyRules from "@/components/MyRules";
import Quote from "@/components/Quote";
import { quotes } from "@/constants";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <UserButton afterSignOutUrl="https://app.daily.dev/" />
      <div>

      <MyRules />
      <Quote quotes={quotes} />
      </div>
    </div>
  );
}
