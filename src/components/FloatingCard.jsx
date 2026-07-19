import { BadgeCheck, BriefcaseBusiness } from "lucide-react";

export default function FloatingCard() {
  return (
    <div className="rounded-[30px] bg-white p-6 shadow-editorial">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
          <BadgeCheck
            className="text-green-600"
            size={28}
            strokeWidth={2.2}
          />
        </div>

        <div>
          <h3 className="font-body text-[18px] font-semibold text-neutral-dark">
            Verified Opportunity
          </h3>

          <p className="mt-1 text-[15px] text-neutral-600">
            Remote • Internship
          </p>
        </div>

      </div>

      <div className="my-5 h-px bg-neutral-light" />

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-neutral-600">
            Company
          </p>

          <h4 className="mt-1 text-lg font-semibold text-neutral-dark">
            ApplyNest
          </h4>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-white">
          <BriefcaseBusiness size={22} />
        </div>

      </div>
    </div>
  );
}