import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../components/DashboardLayout";

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-400">
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
function ChevronIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}
function SortIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

const avatarSrc = "https://www.figma.com/api/mcp/asset/ca4bb38f-9927-47c0-8bf1-0e34f5eec9b6";

interface Project {
  id: string;
  name: string;
  category: string;
  deliveryDate: string;
  budget: string;
  buyer: string;
  status: "Active" | "Pending" | "Closed";
}

const PROJECTS: Project[] = [
  { id: "1", name: "Project Name", category: "Thermostat", deliveryDate: "Nov 3, 2025", budget: "$ 12,000", buyer: "John J", status: "Active" },
  { id: "2", name: "Project Name", category: "Thermostat", deliveryDate: "Nov 3, 2025", budget: "$ 12,000", buyer: "John J", status: "Active" },
  { id: "3", name: "Project Name", category: "Thermostat", deliveryDate: "Nov 3, 2025", budget: "$ 12,000", buyer: "John J", status: "Active" },
  { id: "4", name: "Project Name", category: "Thermostat", deliveryDate: "Nov 3, 2025", budget: "$ 12,000", buyer: "John J", status: "Active" },
  { id: "5", name: "Project Name", category: "Thermostat", deliveryDate: "Nov 3, 2025", budget: "$ 12,000", buyer: "John J", status: "Active" },
];

const STATUS_COLORS: Record<string, string> = {
  Active:  "text-teal-600 bg-teal-50",
  Pending: "text-amber-600 bg-amber-50",
  Closed:  "text-neutral-500 bg-neutral-100",
};

export function SellersProjectsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"published" | "drafts">("published");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  function toggleAll() {
    if (selected.size === PROJECTS.length) setSelected(new Set());
    else setSelected(new Set(PROJECTS.map(p => p.id)));
  }
  function toggleRow(id: string) {
    setSelected(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  return (
    <DashboardLayout>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-default">Projects</h1>
          <p className="text-sm text-text-secondary mt-0.5">View, process, and fulfill customer orders.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-1 px-5 pt-5 pb-0 border-b border-neutral-100">
          {(["published", "drafts"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-4 py-2 rounded-t-lg text-sm font-medium transition-colors capitalize -mb-px ${
                activeTab === tab
                  ? "bg-sky-brand-50 text-sky-brand-600 border-b-2 border-sky-brand-500"
                  : "text-text-secondary hover:text-text-default"
              }`}
            >
              {tab === "published" && (
                <span className="w-3.5 h-3.5 rounded border-2 border-sky-brand-500 bg-sky-brand-500 flex items-center justify-center">
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><polyline points="1.5,5 4,7.5 8.5,2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              )}
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Table header */}
        <div className="px-5 py-3 flex items-center justify-between border-b border-neutral-100">
          <p className="text-sm font-semibold text-text-default">All Projects</p>
          <div className="flex items-center gap-2">
            <button className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors">
              <SearchIcon />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-text-default hover:bg-neutral-50 transition-colors">
              Categories <ChevronIcon />
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-text-default hover:bg-neutral-50 transition-colors">
              <FilterIcon /> Filter
            </button>
            <button className="flex items-center justify-center w-8 h-8 rounded-lg text-neutral-500 hover:bg-neutral-100 transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="5" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="19" r="1" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-neutral-50 border-b border-neutral-100">
              <th className="w-10 pl-5 py-3 text-left">
                <input type="checkbox" checked={selected.size === PROJECTS.length} onChange={toggleAll} className="rounded accent-sky-brand-500" />
              </th>
              {["Project Name", "Category", "Delivery Date", "Budget", "Buyer", "Status"].map(col => (
                <th key={col} className="px-3 py-3 text-left text-xs font-semibold text-text-secondary whitespace-nowrap">
                  <span className="flex items-center gap-1">{col} <SortIcon /></span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PROJECTS.map((p) => (
              <tr
                key={p.id}
                onClick={() => navigate("/dashboard/seller/project-view")}
                className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50 cursor-pointer transition-colors"
              >
                <td className="pl-5 py-3" onClick={e => e.stopPropagation()}>
                  <input type="checkbox" checked={selected.has(p.id)} onChange={() => toggleRow(p.id)} className="rounded accent-sky-brand-500" />
                </td>
                <td className="px-3 py-3 font-medium text-text-default">{p.name}</td>
                <td className="px-3 py-3 text-text-secondary">{p.category}</td>
                <td className="px-3 py-3 text-text-secondary">{p.deliveryDate}</td>
                <td className="px-3 py-3 text-text-secondary">{p.budget}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center gap-2">
                    <img src={avatarSrc} alt={p.buyer} className="w-5 h-5 rounded-full object-cover" />
                    <span className="text-text-secondary">{p.buyer}</span>
                  </div>
                </td>
                <td className="px-3 py-3">
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_COLORS[p.status]}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  );
}
