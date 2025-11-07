"use client";

import React from "react";
import {
  TrendingUp,
  Users,
  ShoppingCart,
  DollarSign,
  Activity,
  Calendar,
  Clock,
  ChevronLeft,
  FileText,
} from "lucide-react";

export default function HomeDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 w-full mx-auto" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">داشبورد تحلیلی</h1>
            <p className="text-sm text-gray-500 mt-1">خلاصه فعالیت‌های امروز</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              <Calendar className="w-4 h-4" />
              امروز، ۱۶ آبان ۱۴۰۴
            </button>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[
            {
              label: "درآمد کل",
              value: "۱۲٬۸۵۰٬۰۰۰ تومان",
              change: "+12.5%",
              icon: DollarSign,
              color: "blue",
            },
            {
              label: "کاربران جدید",
              value: "۱٬۲۴۳",
              change: "+8.1%",
              icon: Users,
              color: "green",
            },
            {
              label: "سفارشات",
              value: "۸۴",
              change: "-3.2%",
              icon: ShoppingCart,
              color: "purple",
            },
            {
              label: "نرخ تبدیل",
              value: "۳٫۴۵٪",
              change: "+0.8%",
              icon: TrendingUp,
              color: "orange",
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-50`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Charts & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              روند فروش هفتگی
            </h3>
            <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <p className="text-gray-500">
                نمودار خطی فروش (React Chart.js یا Recharts)
              </p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              فعالیت‌های اخیر
            </h3>
            <div className="space-y-4">
              {[
                {
                  user: "سارا احمدی",
                  action: "سفارش جدید ثبت کرد",
                  time: "۵ دقیقه پیش",
                  icon: ShoppingCart,
                },
                {
                  user: "محمد رضایی",
                  action: "پروفایل را به‌روزرسانی کرد",
                  time: "۱۲ دقیقه پیش",
                  icon: Activity,
                },
                {
                  user: "زهرا کریمی",
                  action: "فایل گزارش را آپلود کرد",
                  time: "۱ ساعت پیش",
                  icon: FileText,
                },
              ].map((act, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <act.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {act.user}
                    </p>
                    <p className="text-xs text-gray-500">{act.action}</p>
                    <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {act.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-sm text-blue-600 hover:text-blue-700 font-medium">
              مشاهده همه فعالیت‌ها
              <ChevronLeft className="inline w-4 h-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Table & Calendar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Orders Table */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              سفارشات اخیر
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-right py-3 px-4 font-medium text-gray-700">
                      شناسه
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-gray-700">
                      مشتری
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-gray-700">
                      مبلغ
                    </th>
                    <th className="text-right py-3 px-4 font-medium text-gray-700">
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      id: "#ORD-124",
                      customer: "علی حسینی",
                      amount: "۲٬۳۵۰٬۰۰۰",
                      status: "تحویل شده",
                      color: "green",
                    },
                    {
                      id: "#ORD-123",
                      customer: "مریم نوری",
                      amount: "۱٬۸۹۰٬۰۰۰",
                      status: "در حال پردازش",
                      color: "yellow",
                    },
                    {
                      id: "#ORD-122",
                      customer: "رضا محمدی",
                      amount: "۳٬۱۰۰٬۰۰۰",
                      status: "لغو شده",
                      color: "red",
                    },
                  ].map((order) => (
                    <tr
                      key={order.id}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-3 px-4 font-mono text-xs">
                        {order.id}
                      </td>
                      <td className="py-3 px-4">{order.customer}</td>
                      <td className="py-3 px-4 font-medium">{order.amount}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex px-2 py-1 text-xs rounded-full font-medium ${
                            order.color === "green"
                              ? "bg-green-100 text-green-700"
                              : order.color === "yellow"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mini Calendar */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">تقویم</h3>
            <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
              <p className="text-gray-500 text-sm">
                تقویم کوچک (React Calendar)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
