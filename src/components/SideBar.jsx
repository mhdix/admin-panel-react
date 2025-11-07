"use client";

import { useState } from "react";
import {
  Home,
  BarChart3,
  Plus,
  Users,
  UserPlus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { type: "header", label: "خانه" },
  { icon: Home, label: "داشبورد تحلیلی", link: "/" },
  { type: "header", label: "بلاگ" },
  { icon: BarChart3, label: "مدیریت بلاگ‌ها", link: "/blogs" },
  { icon: Plus, label: "افزودن بلاگ جدید", link: "/blogs/new" },
  { type: "header", label: "کاربران" },
  { icon: Users, label: "مدیریت کاربران", link: "/users" },
  { icon: UserPlus, label: "افزودن کاربر جدید", link: "/users/new" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`bg-white border-l border-gray-200 transition-all duration-300 flex flex-col fixed right-0 top-0 h-screen ${
        isCollapsed ? "w-16" : "w-64"
      }`}
      dir="rtl"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <h1
          className={`font-bold text-xl text-gray-800 transition-opacity ${
            isCollapsed ? "opacity-0 w-0" : "opacity-100"
          }`}
        >
          داشبورد
        </h1>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuItems.map((item, index) => {
          if (item.type === "header") {
            return (
              <div
                key={index}
                className={`px-4 py-2 mt-6 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider ${
                  isCollapsed ? "hidden" : "block"
                }`}
              >
                {item.label}
              </div>
            );
          }

          const Icon = item.icon;
          const isActive = currentPath === item.link;

          return (
            <Link
              to={item.link}
              key={index}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-all group ${
                isActive
                  ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              } ${isCollapsed ? "justify-center" : ""}`}
            >
              <Icon
                className={`w-5 h-5 flex-shrink-0 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-500 group-hover:text-gray-700"
                }`}
              />
              <span
                className={`transition-opacity ${
                  isCollapsed ? "opacity-0 w-0" : "opacity-100"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div
          className={`flex items-center gap-3 ${
            isCollapsed ? "justify-center" : ""
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
          <div
            className={`transition-opacity ${
              isCollapsed ? "opacity-0 w-0" : "opacity-100"
            }`}
          >
            <p className="text-sm font-medium text-gray-900">علی محمدی</p>
            <p className="text-xs text-gray-500">ali@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
