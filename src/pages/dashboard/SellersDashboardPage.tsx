import { DashboardLayout } from "../../components/DashboardLayout";

function DotsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="1" fill="currentColor" /><circle cx="12" cy="12" r="1" fill="currentColor" /><circle cx="12" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

interface PanelProps { title: string; wide?: boolean; tall?: boolean; }

function Panel({ title, wide, tall }: PanelProps) {
  return (
    <div className={`bg-white rounded-2xl border border-neutral-200 shadow-xs p-5 flex flex-col gap-3 ${wide ? "col-span-2" : ""} ${tall ? "min-h-[200px]" : "min-h-[150px]"}`}>
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-text-default">{title}</p>
        <button className="text-neutral-400 hover:text-neutral-600"><DotsIcon /></button>
      </div>
    </div>
  );
}

export function SellersDashboardPage() {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-default">Dashboard</h1>
          <p className="text-sm text-text-secondary mt-0.5">Here are your dashboard overview</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 text-sm font-medium text-text-default hover:bg-neutral-50 transition-colors">
          <FilterIcon /> Button Text
        </button>
      </div>

      {/* Main content area */}
      <div className="flex flex-col gap-4">

        {/* Top wide panel with search/filter */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
          <div className="p-5 flex items-center justify-between border-b border-neutral-100">
            <p className="text-sm font-semibold text-text-default">Page Title</p>
            <div className="flex items-center gap-2">
              <button className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors">
                <SearchIcon />
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-text-default hover:bg-neutral-50 transition-colors">
                Categories <ChevronDownIcon />
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-text-default hover:bg-neutral-50 transition-colors">
                <FilterIcon /> Filter
              </button>
              <button className="text-neutral-400 hover:text-neutral-600"><DotsIcon /></button>
            </div>
          </div>
          <div className="p-5 min-h-[200px]" />
        </div>

        {/* Two-column panels */}
        <div className="grid grid-cols-2 gap-4">
          <Panel title="Page Title" tall />
          <Panel title="Page Title" tall />
        </div>

        {/* Three-column panels */}
        <div className="grid grid-cols-3 gap-4">
          <Panel title="Page Title" />
          <Panel title="Page Title" />
          <Panel title="Page Title" />
        </div>
      </div>
    </DashboardLayout>
  );
}
