import React, { useState, useEffect } from 'react';
import { Settings, BarChart2, BookOpen, Users, PlusCircle, Search, ChevronDown, CheckSquare, FileText, Link, Info, X, Upload, FileUp, Layout } from 'lucide-react';

const AIWorkspaceLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
    <rect width="24" height="24" rx="4" fill="#FFFFFF" />
    <rect x="4" y="6" width="7" height="12" rx="2" fill="#4299E1" />
    <rect x="13" y="6" width="7" height="12" rx="2" fill="#4FD1C5" />
  </svg>
);

export default function AIWorkspacePlatform() {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [showAITools, setShowAITools] = useState(false);
  const [resources, setResources] = useState(['Human', 'Infrastructure']);
  const [newResource, setNewResource] = useState('');
  const [checklist, setChecklist] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [insights, setInsights] = useState([]);
  const [newLink, setNewLink] = useState('');
  const [newInfo, setNewInfo] = useState('');
  const [showTemplateModal, setShowTemplateModal] = useState(false);

  const tabs = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Projects', icon: Users },
    { name: 'Learning', icon: BookOpen },
    { name: 'Settings', icon: Settings },
  ];

  // ... (previous useEffects and functions remain the same)

  return (
    <div className="flex h-screen bg-gray-100 transition-all duration-300">
      {/* Left Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col transition-all duration-300">
        <div className="p-4 flex items-center space-x-4">
          <AIWorkspaceLogo />
          <span className="font-bold text-lg">AI Workspace</span>
        </div>
        <nav className="flex-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              className={`flex items-center space-x-2 w-full p-4 ${
                activeTab === tab.name ? 'bg-gray-800 text-white' : 'text-gray-300 hover:bg-gray-800'
              } transition-all duration-300`}
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.icon size={20} />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
        <div className="p-4 space-y-2">
          <button
            className="flex items-center space-x-2 w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
            onClick={() => setShowUploadModal(true)}
          >
            <Upload size={20} />
            <span>Upload</span>
          </button>
          <button
            className="flex items-center space-x-2 w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all duration-300"
            onClick={() => setShowTemplateModal(true)}
          >
            <Layout size={20} />
            <span>Template</span>
          </button>
        </div>
        {/* Checklist Section */}
        <div className="p-4 border-t border-gray-700">
          <h3 className="font-bold mb-2">Checklist</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleTask(index)}
                  className="mr-2 cursor-pointer"
                />
                <span className={`${item.completed ? 'line-through text-gray-500' : ''} transition-all duration-300`}>{item.task}</span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="New task"
              className="flex-1 px-2 py-1 bg-gray-800 text-white border border-gray-700 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <button
              onClick={addTask}
              className="px-2 py-1 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-all duration-300"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <div className="bg-black text-white p-4 flex items-center justify-between transition-all duration-300">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="relative">
            <button
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-300"
              onMouseEnter={() => setShowAITools(true)}
              onMouseLeave={() => setShowAITools(false)}
            >
              <span>AI Tools</span>
              <ChevronDown size={16} />
            </button>
            {showAITools && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 transition-all duration-300">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300">AI Assistant</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300">Model Training</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-all duration-300">Data Analysis</a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 overflow-auto">
          <h1 className="text-2xl font-bold mb-4">{activeTab}</h1>
          {activeTab === 'Dashboard' && (
            <div className="grid grid-cols-3 gap-4">
              {/* ... (Dashboard content remains the same) ... */}
            </div>
          )}
          {/* ... (other tab contents) ... */}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300">
          <div className="bg-white p-6 rounded-lg w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Upload</h2>
              <button onClick={() => setShowUploadModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            {/* ... (Upload modal content remains the same) ... */}
          </div>
        </div>
      )}

      {/* Template Modal */}
      {showTemplateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-all duration-300">
          <div className="bg-white p-6 rounded-lg w-1/2 max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Templates</h2>
              <button onClick={() => setShowTemplateModal(false)} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300">
                <Layout size={24} className="mb-2" />
                <span>Project Plan</span>
              </button>
              <button className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300">
                <FileUp size={24} className="mb-2" />
                <span>Report</span>
              </button>
              <button className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300">
                <Users size={24} className="mb-2" />
                <span>Team Meeting</span>
              </button>
              <button className="p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition-all duration-300">
                <PlusCircle size={24} className="mb-2" />
                <span>Custom Template</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
