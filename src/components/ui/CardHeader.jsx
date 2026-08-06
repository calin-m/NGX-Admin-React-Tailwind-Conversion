import React from 'react';

/**
 * CardHeader UI Primitive Component
 * Modernized React 18 + Tailwind CSS v4 Component
 * Reusable section card header featuring icon badge container, title, subtitle, and optional right-aligned action slot.
 */
export default function CardHeader({
  icon,
  title,
  subtitle,
  action,
  iconBgColor = 'bg-accent/10',
  iconTextColor = 'text-accent',
  className = ''
}) {
  return (
    <div className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 ${className}`}>
      <div className="flex items-center space-x-3">
        {icon && (
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${iconBgColor} ${iconTextColor}`}>
            {icon}
          </div>
        )}
        <div>
          {title && <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">{title}</h3>}
          {subtitle && <p className="text-xs text-slate-500 dark:text-slate-400 capitalize">{subtitle}</p>}
        </div>
      </div>

      {action && <div className="flex items-center">{action}</div>}
    </div>
  );
}
