import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-blue-800 mt-10">
      <div className="w-[300px] h-[300px]">
        <SignIn />
      </div>
    </div>
  );
}
