import React from 'react';
import useCountryOrdersMap from '../../hooks/useCountryOrdersMap.js';

/**
 * CountryOrdersMap Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Source Reference: old-src/ngx-admin-master <ngx-country-orders-map>
 */
export default function CountryOrdersMap(props) {
  const { selectedCountry, countryDetails, mapData, selectCountry } = useCountryOrdersMap();

  return (
    <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-xs border border-slate-200 dark:border-slate-700">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-3 mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
            Global Country Orders Distribution Map
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Interactive Geo-Location Analytics</p>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold">
          &lt;ngx-country-orders-map&gt;
        </span>
      </div>

      {/* Country Selection Chips */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.keys(mapData).map(code => (
          <button
            key={code}
            onClick={() => selectCountry(code)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCountry === code
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {code} ({mapData[code].name})
          </button>
        ))}
      </div>

      {/* Active Country Detail Metrics Card */}
      {countryDetails && (
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-slate-100">{countryDetails.name}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400">Coordinates: {countryDetails.lat}° N, {countryDetails.lng}° W</p>
          </div>
          <div className="text-right">
            <p className="text-lg font-extrabold text-blue-600 dark:text-blue-400">{countryDetails.orders.toLocaleString()} Orders</p>
            <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">{countryDetails.value} Revenue</p>
          </div>
        </div>
      )}
    </div>
  );
}

