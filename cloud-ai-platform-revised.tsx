import React, { useState } from 'react';
import { Camera, Search, Bell, User, Home, Cloud, Code, Users, RefreshCw } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const Sidebar = ({ activeView, setActiveView }) => (
  <div className="w-64 h-screen bg-gray-900 text-white p-4">
    <div className="mb-6">
      <h1 className="text-xl font-bold">Performance Review</h1>
    </div>
    <nav>
      {[
        { icon: <Home size={20} />, text: "Dashboard", view: "dashboard" },
        { icon: <Cloud size={20} />, text: "Resources", view: "resources" },
        { icon: <Code size={20} />, text: "Develop", view: "develop" },
        { icon: <Users size={20} />, text: "Team", view: "team" },
        { icon: <RefreshCw size={20} />, text: "CI/CD", view: "cicd" },
      ].map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveView(item.view)}
          className={`flex items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left ${
            activeView === item.view ? 'bg-gray-800 text-white' : 'text-gray-400 hover:bg-gray-800 hover:text-white'
          }`}
        >
          {item.icon}
          <span className="ml-2">{item.text}</span>
        </button>
      ))}
    </nav>
  </div>
);

const Header = () => (
  <header className="bg-white shadow-md p-4">
    <div className="flex items-center justify-between">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search resources..."
          className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Camera className="text-gray-600" size={24} />
        <Bell className="text-gray-600" size={24} />
        <User className="text-gray-600" size={24} />
      </div>
    </div>
  </header>
);

const Dashboard = () => (
  <div className="p-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Create Resource</button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Summary</h3>
        <p className="text-3xl font-bold">574</p>
        <p className="text-gray-600">Resources</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">To Do</h3>
        <p className="text-3xl font-bold">2</p>
        <p className="text-gray-600">Upcoming</p>
        <button className="mt-4 text-blue-600 hover:underline">View All</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Progress Management</h3>
        <p className="text-3xl font-bold">25</p>
        <p className="text-gray-600">Active</p>
        <button className="mt-4 text-blue-600 hover:underline">View All</button>
      </div>
    </div>
  </div>
);

const Welcome = () => (
  <div className="p-6">
    <h2 className="text-2xl font-semibold mb-6">Welcome</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">AI</h3>
        <p className="mb-4">Work efficiently with AI.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Get Started</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
        <p className="mb-4">Enhance your infrastructure.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Get Started</button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-xl font-semibold mb-4">Services</h3>
        <p className="mb-4">Check out all our services and status.</p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Get Started</button>
      </div>
    </div>
  </div>
);

const App = () => {
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {activeView === 'dashboard' && <Dashboard />}
          {activeView === 'resources' && <Welcome />}
          {/* Add more views as needed */}
        </main>
        <Alert>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components and hooks from the shadcn/ui library.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

export default App;
