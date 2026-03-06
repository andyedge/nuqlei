import { useState } from "react";
import { DashboardLayout } from "../../components/DashboardLayout";

const avatarSrc = "https://www.figma.com/api/mcp/asset/ca4bb38f-9927-47c0-8bf1-0e34f5eec9b6";

function EditIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}
function MonitorIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}
function InfoIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-500">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function SettingRow({ label, description, children }: { label: string; description?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-4 border-b border-neutral-100 last:border-0 gap-6">
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="text-sm font-medium text-text-default">{label}</p>
        {description && <p className="text-xs text-text-secondary">{description}</p>}
      </div>
      <div className="flex-shrink-0">{children}</div>
    </div>
  );
}

function Toggle({ on }: { on: boolean }) {
  const [enabled, setEnabled] = useState(on);
  return (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={() => setEnabled(v => !v)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? "bg-sky-brand-500" : "bg-neutral-300"}`}
    >
      <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`} />
    </button>
  );
}

export function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-default">Profile Settings</h1>
          <p className="text-sm text-text-secondary mt-0.5">Here are your dashboard overview</p>
        </div>
        <button className="px-4 py-2 rounded-xl border border-neutral-200 text-sm font-medium text-text-default hover:bg-neutral-50 transition-colors">
          Button Text
        </button>
      </div>

      <div className="flex flex-col gap-4">

        {/* Account panel */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6">
          <SettingRow label="Profile Picture" description="Upload or change your account photo.">
            <div className="flex items-center gap-3">
              <img src={avatarSrc} alt="Avatar" className="w-10 h-10 rounded-full object-cover" />
              <button className="px-4 py-1.5 rounded-lg border border-neutral-200 text-sm font-medium text-text-default hover:bg-neutral-50 transition-colors">
                Change
              </button>
            </div>
          </SettingRow>
          <SettingRow label="Full Name" description="Change your display name as it appears across the platform.">
            <div className="flex items-center gap-2">
              <span className="text-sm text-text-default">Brian O'conner</span>
              <button className="text-neutral-400 hover:text-neutral-600"><EditIcon /></button>
            </div>
          </SettingRow>
          <SettingRow label="Email Address" description="Update your primary email for login and notifications.">
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-text-default">br**n@email.com</span>
                <button className="text-neutral-400 hover:text-neutral-600"><EditIcon /></button>
              </div>
              {/* Pending email change notice */}
              <div className="flex items-center justify-between gap-4 px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 max-w-sm">
                <div className="flex items-start gap-2">
                  <InfoIcon />
                  <div>
                    <p className="text-xs font-semibold text-text-default">Pending Email Change</p>
                    <p className="text-xs text-text-secondary leading-relaxed mt-0.5">
                      You've already requested a change of your email address yesterday. Please check your inbox, including spam folders.
                    </p>
                  </div>
                </div>
                <button className="flex-shrink-0 text-xs font-semibold text-red-500 hover:text-red-700 transition-colors whitespace-nowrap">
                  Cancel Update
                </button>
              </div>
            </div>
          </SettingRow>
          <SettingRow label="Phone Number" description="Add or modify your phone number for verification and contact.">
            <button className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-neutral-200 text-sm font-medium text-text-default hover:bg-neutral-50 transition-colors">
              <PlusIcon /> Add Phone Number
            </button>
          </SettingRow>
        </div>

        {/* Security panel */}
        <div className="bg-white rounded-2xl border border-neutral-200 shadow-xs p-6">
          <SettingRow label="Password" description="Update your account password for enhanced security.">
            <button className="px-4 py-1.5 rounded-lg border border-neutral-200 text-sm font-medium text-text-default hover:bg-neutral-50 transition-colors">
              Update Password
            </button>
          </SettingRow>
          <SettingRow label="Two-Factor Authentication (2FA)" description="Add an extra layer of security to your account.">
            <div className="flex items-center gap-2">
              <Toggle on={false} />
              <span className="text-sm text-text-secondary">Off</span>
            </div>
          </SettingRow>
          <SettingRow label="Passkey" description="Sign in securely without a password using device-based passkeys.">
            <div className="flex items-center gap-2">
              <Toggle on={true} />
              <span className="text-sm text-text-secondary">On</span>
            </div>
          </SettingRow>
          <SettingRow label="Active Session" description="View and manage devices currently logged in to your account.">
            <div />
          </SettingRow>
          {/* Session devices */}
          <div className="flex flex-col gap-3 mt-1">
            {[
              { name: "2025 Macbook Pro 14-inch", tag: "This device", location: "Whiteblack Lane Dallas Texas USA" },
              { name: "2023 Ipad Pro", tag: null, location: "Whiteblack Lane Dallas Texas USA" },
            ].map((device) => (
              <div key={device.name} className="flex items-start gap-3 px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50">
                <MonitorIcon />
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-text-default">{device.name}</p>
                    {device.tag && (
                      <span className="text-xs text-sky-brand-600 font-semibold">{device.tag}</span>
                    )}
                  </div>
                  <p className="text-xs text-text-secondary">{device.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
