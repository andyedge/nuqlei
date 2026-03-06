import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../components/DashboardLayout";

const avatarSrc  = "https://www.figma.com/api/mcp/asset/ca4bb38f-9927-47c0-8bf1-0e34f5eec9b6";
const productImg1 = "https://www.figma.com/api/mcp/asset/e2cf6a6c-83d3-4b8c-b3d4-1bdc432dab8a";
const productImg2 = "https://www.figma.com/api/mcp/asset/b3c4d5e6-7f8a-9b0c-d1e2-3f4a5b6c7d8e";

function BackIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function Divider() {
  return <div className="h-px bg-neutral-100 my-4" />;
}

export function ProjectViewPage() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      {/* Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1.5 text-sm text-text-secondary hover:text-text-default transition-colors mb-6"
      >
        <BackIcon /> Back to Projects
      </button>

      <div className="flex gap-5 items-start">
        {/* Main card */}
        <div className="flex-1 bg-white rounded-2xl border border-neutral-200 shadow-xs p-6 flex flex-col gap-2">

          {/* Title row */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-xl font-bold text-text-default">Refrigeration Unit Project</h1>
              <p className="text-sm text-text-secondary mt-0.5">Thermostats</p>
            </div>
            <p className="text-sm text-text-secondary">Project ID: 12345</p>
          </div>

          <div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-sky-brand-50 text-sky-brand-600">
              Project created on 02/04/2-26
            </span>
          </div>

          <Divider />

          {/* Budget */}
          <div>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Budget</p>
            <p className="text-2xl font-bold text-text-default">$ 12,000</p>
          </div>

          <Divider />

          {/* Delivery Date */}
          <div>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Delivery Date</p>
            <p className="text-xl font-bold text-text-default">September 2026</p>
          </div>

          <Divider />

          {/* Attachments */}
          <div>
            <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3">Attachments</p>
            <p className="text-xl font-bold text-text-default mb-4">September 2026</p>
            <div className="flex gap-3">
              {[productImg1, productImg2].map((src, i) => (
                <div key={i} className="w-36 h-28 rounded-xl overflow-hidden border border-neutral-200 bg-neutral-50">
                  <img
                    src={src}
                    alt={`Attachment ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Buyer sidebar */}
        <div className="w-56 flex-shrink-0 bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 flex flex-col items-center gap-4">
          <img src={avatarSrc} alt="John" className="w-14 h-14 rounded-full object-cover" />
          <div className="text-center">
            <p className="text-base font-bold text-text-default">John</p>
            <p className="text-xs text-text-secondary">Company name</p>
          </div>
          <button className="w-full h-9 rounded-full bg-sky-brand-500 text-white text-sm font-semibold hover:bg-sky-brand-600 transition-colors">
            Contact John
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
