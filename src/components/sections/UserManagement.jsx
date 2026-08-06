import React, { useState } from 'react';
import FormInput from '../ui/FormInput.jsx';
import Avatar from '../ui/Avatar.jsx';

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');

  const users = [
    { id: 1, name: 'Sarah Jenkins', email: 'sarah.j@corporate.io', role: 'Admin', status: 'Online', avatar: 'SJ', dept: 'Engineering' },
    { id: 2, name: 'Michael Chen', email: 'm.chen@corporate.io', role: 'Editor', status: 'Busy', avatar: 'MC', dept: 'Product' },
    { id: 3, name: 'Elena Rostova', email: 'elena@corporate.io', role: 'Admin', status: 'Online', avatar: 'ER', dept: 'Design' },
    { id: 4, name: 'David Miller', email: 'd.miller@corporate.io', role: 'Viewer', status: 'Offline', avatar: 'DM', dept: 'Marketing' },
    { id: 5, name: 'Amara Okafor', email: 'amara@corporate.io', role: 'Editor', status: 'Online', avatar: 'AO', dept: 'Operations' }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'All' || user.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const getStatusColor = status => {
    switch (status) {
      case 'Online': return 'bg-emerald-500';
      case 'Busy': return 'bg-amber-500';
      default: return 'bg-slate-300 dark:bg-slate-600';
    }
  };

  return (
    <div className="w-full rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 shadow-lg p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-700/60 pb-4">
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-lg">Corporate User Management</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">Team Directory, Access Roles, and Online Presence</p>
        </div>

        <div className="flex items-center space-x-3">
          <div className="w-56">
            <FormInput
              icon="🔍"
              placeholder="Search users..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              onClear={() => setSearchTerm('')}
            />
          </div>

          <div className="w-36">
            <FormInput
              type="select"
              value={roleFilter}
              onChange={e => setRoleFilter(e.target.value)}
              options={[
                { value: 'All', label: 'All Roles' },
                { value: 'Admin', label: 'Admin' },
                { value: 'Editor', label: 'Editor' },
                { value: 'Viewer', label: 'Viewer' }
              ]}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map(user => (
          <div key={user.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-700/60 bg-slate-50/50 dark:bg-slate-700/30 flex items-center justify-between hover:border-accent transition-all">

            <div className="flex items-center space-x-3">
              <Avatar name={user.name} initials={user.avatar} status={user.status} />

              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">{user.name}</h4>
                <span className="text-[10px] text-slate-400 block">{user.email}</span>
                <span className="text-[10px] font-semibold text-accent block mt-0.5 transition-colors">{user.dept}</span>
              </div>
            </div>


            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              {user.role}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
