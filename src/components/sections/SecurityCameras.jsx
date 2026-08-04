import React, { useState } from 'react';
import useSecurityCameras from '../../hooks/useSecurityCameras.js';

export default function SecurityCameras() {
  const [selectedCam, setSelectedCam] = useState(1);
  const { data } = useSecurityCameras();

  const cameras = [
    { id: 1, name: 'Front Entrance Cam 01', status: 'Live', feed: '📹 Camera Feed 1 - Active' },
    { id: 2, name: 'Backyard Garden Cam 02', status: 'Live', feed: '📹 Camera Feed 2 - Active' },
    { id: 3, name: 'Garage Driveway Cam 03', status: 'Live', feed: '📹 Camera Feed 3 - Active' },
    { id: 4, name: 'Living Hall Cam 04', status: 'Live', feed: '📹 Camera Feed 4 - Active' }
  ];

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/60 pb-3">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">Security Cameras Grid</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">4-Channel HD Video Stream</p>
        </div>

        <span className="text-xs font-bold text-rose-500 bg-rose-500/10 px-2.5 py-1 rounded-full animate-pulse">
          ● LIVE STREAM
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cameras.map(cam => (
          <div
            key={cam.id}
            onClick={() => setSelectedCam(cam.id)}
            className={`p-4 rounded-xl border transition-all cursor-pointer space-y-3 ${
              selectedCam === cam.id
                ? 'border-indigo-500 bg-indigo-50/30 dark:bg-indigo-900/20 shadow-md'
                : 'border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-700/30'
            }`}
          >
            <div className="h-32 rounded-lg bg-slate-900 text-slate-400 flex items-center justify-center font-mono text-xs font-semibold relative overflow-hidden">
              <span className="absolute top-2 left-2 text-[10px] bg-red-600 text-white px-1.5 py-0.5 rounded-sm font-bold">REC</span>
              {cam.feed}
            </div>

            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-slate-800 dark:text-slate-200">{cam.name}</span>
              <span className="text-emerald-500 font-semibold">{cam.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
