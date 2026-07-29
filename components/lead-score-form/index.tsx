// components/LeadScoringForm.tsx
'use client';
import { ChangeEvent, FormEvent, useState } from 'react';

export type LeadInput = {
  secondsOnSite: number;
  path: string;
  enquiry: string;
  buildingType: 'garage' | 'barn' | 'warehouse' | 'carport' | 'custom';
  width: number;
  height: number;
  length: number;
  zip: string;
  city: string;
  state: string;
  email: string;
  historicLabel?: 'won' | 'lost';
};

export default function LeadScoringForm() {
  const [lead, setLead] = useState<LeadInput>({
    secondsOnSite: 0,
    path: '/',
    enquiry: '',
    buildingType: 'garage',
    width: 30,
    height: 12,
    length: 40,
    zip: '',
    city: '',
    state: '',
    email: '',
  });
  const [result, setResult] = useState<{ score: number; reason: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const onChange =
    (k: keyof LeadInput) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setLead({ ...lead, [k]: e.target.value });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    const res = await fetch('/api/lead-score', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
    });
    const json = await res.json();
    setResult(json);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Metal-Building Lead</h2>

      <div className="flex gap-4">
        <label className="flex-1">
          Seconds on site
          <input
            type="number"
            value={lead.secondsOnSite}
            onChange={onChange('secondsOnSite')}
            className="input"
            min={0}
          />
        </label>
        <label className="flex-1">
          Page path
          <input value={lead.path} onChange={onChange('path')} className="input" />
        </label>
      </div>

      <textarea
        placeholder="Enquiry text"
        value={lead.enquiry}
        onChange={onChange('enquiry')}
        className="input h-28"
      />

      <div className="flex gap-4">
        {(['width', 'height', 'length'] as const).map((dim) => (
          <label key={dim} className="flex-1">
            {dim.charAt(0).toUpperCase() + dim.slice(1)} (ft)
            <input
              type="number"
              min={0}
              value={lead[dim]}
              onChange={onChange(dim)}
              className="input"
            />
          </label>
        ))}
      </div>

      <div className="flex gap-4">
        <label className="flex-1">
          Building type
          <select value={lead.buildingType} onChange={onChange('buildingType')} className="input">
            <option value="garage">Garage</option>
            <option value="barn">Barn</option>
            <option value="warehouse">Warehouse</option>
            <option value="carport">Carport</option>
            <option value="custom">Custom</option>
          </select>
        </label>
        <label className="flex-1">
          ZIP
          <input value={lead.zip} onChange={onChange('zip')} className="input" />
        </label>
        <label className="flex-1">
          City
          <input value={lead.city} onChange={onChange('city')} className="input" />
        </label>
        <label className="flex-1">
          State
          <input value={lead.state} onChange={onChange('state')} className="input" />
        </label>
      </div>

      <label className="block">
        Email
        <input value={lead.email} onChange={onChange('email')} className="input" />
      </label>

      <button
        disabled={loading}
        className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-40"
      >
        {loading ? 'Scoring…' : 'Get score'}
      </button>

      {result && (
        <p className="mt-4">
          <strong>Score:</strong> {result.score} / 100 — {result.reason}
        </p>
      )}
    </form>
  );
}
