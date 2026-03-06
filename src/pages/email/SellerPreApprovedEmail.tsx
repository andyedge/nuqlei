// Illustration and social icons from Figma node 52761:5923
const illustration = "https://www.figma.com/api/mcp/asset/644d63e2-6dad-4cea-84ff-56a7ded7959b";
const iconInstagram = "https://www.figma.com/api/mcp/asset/bde7e4cc-7273-49d2-9936-a50144ee12f6";
const iconLinkedin  = "https://www.figma.com/api/mcp/asset/c2601a37-5cb9-491b-952e-27f0521b9efd";
const iconFacebook  = "https://www.figma.com/api/mcp/asset/76f38edb-bd78-43af-a0b4-8fde9b167364";

import { Link } from "react-router-dom";
import { NuqleiLogo } from "../../components/NuqleiLogo";

export function SellerPreApprovedEmail() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-[640px] bg-white flex flex-col gap-6 p-8">

        {/* Logo */}
        <NuqleiLogo size="sm" variant="default" />

        {/* Illustration */}
        <div className="w-full">
          <img src={illustration} alt="" className="w-full" />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-8">
          <h1 className="text-[36px] font-normal text-[#262626] leading-tight">
            Hey there!<br />
            You are pre-approved to join the Nuqlei Network!
          </h1>

          <h2 className="text-[36px] font-normal text-[#262626] leading-tight">
            Claim your account to start creating project
          </h2>

          <div className="text-[18px] text-[#737373] leading-[24px]">
            <p>Hi John,</p>
            <p>&nbsp;</p>
            <p>You have been pre approved, you are verified.</p>
          </div>

          {/* Primary CTA */}
          <Link
            to="/register/set-password"
            className="w-full flex items-center justify-center h-11 rounded-full bg-[#418fde] text-white text-sm font-semibold shadow-sm hover:bg-[#3a7fc4] transition-colors"
          >
            Claim your account
          </Link>

          {/* Secondary CTA */}
          <Link
            to="/dashboard/projects"
            className="w-full flex items-center justify-center h-11 rounded-full border border-neutral-200 text-[#262626] text-sm font-semibold hover:bg-neutral-50 transition-colors"
          >
            Create your first project
          </Link>

          <p className="text-[18px] font-semibold text-[#262626]">Nuqlei Team</p>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-6">
          <div className="text-[18px] text-[#737373] leading-[24px]">
            <p>This email was sent to sammy@email.com. If you'd rather not receive this kind of email, you can unsubscribe or manage your email preferences.</p>
            <p>&nbsp;</p>
            <p>© 2026 Nuqlei, 5100 South Service Rd, Unit 2, Burlington, ON L7L 6A5</p>
          </div>

          <div className="h-px bg-[#e5e5e5]" />

          <div className="flex items-center justify-between">
            <NuqleiLogo size="sm" variant="default" />
            <div className="flex items-center gap-2">
              <img src={iconInstagram} alt="Instagram" className="w-6 h-6" />
              <img src={iconLinkedin}  alt="LinkedIn"  className="w-6 h-6" />
              <img src={iconFacebook}  alt="Facebook"  className="w-6 h-6" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
