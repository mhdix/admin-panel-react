"use client";

import React, { useState } from "react";
import {
  Search,
  Plus,
  Calendar,
  User,
  Tag,
  ChevronLeft,
  ChevronRight,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "راهنمای کامل راه‌اندازی فروشگاه آنلاین با React و Node.js",
    excerpt:
      "در این مقاله به صورت گام به گام نحوه ساخت یک فروشگاه آنلاین کامل با فناوری‌های مدرن وب را بررسی می‌کنیم...",
    author: "علی رضایی",
    date: "۱۴۰۴/۰۸/۱۴",
    category: "آموزش",
    readTime: "۸ دقیقه",
    image: "/api/placeholder/400/250",
  },
  {
    id: 2,
    title: "بهینه‌سازی عملکرد در اپلیکیشن‌های Next.js 14",
    excerpt:
      "با استفاده از Server Components، Streaming و Partial Prerendering می‌توانید سرعت اپلیکیشن خود را تا ۴۰٪ افزایش دهید...",
    author: "سارا احمدی",
    date: "۱۴۰۴/۰۸/۱۲",
    category: "تکنولوژی",
    readTime: "۶ دقیقه",
    image: "/api/placeholder/400/250",
  },
  {
    id: 3,
    title: "معرفی Tailwind CSS 3.4: ویژگی‌های جدید و کاربردی",
    excerpt:
      "نسخه جدید Tailwind با قابلیت‌های پیشرفته‌تر برای تم‌بندی، انیمیشن و دسترسی‌پذیری منتشر شد...",
    author: "محمد کاظمی",
    date: "۱۴۰۴/۰۸/۱۰",
    category: "دیزاین",
    readTime: "۵ دقیقه",
    image: "/api/placeholder/400/250",
  },
  {
    id: 4,
    title: "امنیت در توسعه فرانت‌اند: ۱۰ نکته کلیدی",
    excerpt:
      "چگونه از حملات XSS، CSRF و مشکلات امنیتی رایج در برنامه‌های وب جلوگیری کنیم...",
    author: "زهرا کریمی",
    date: "۱۴۰۴/۰۸/۰۸",
    category: "امنیت",
    readTime: "۱۰ دقیقه",
    image: "/api/placeholder/400/250",
  },
  {
    id: 5,
    title: "ساخت داشبورد تحلیلی با Recharts و TypeScript",
    excerpt:
      "آموزش کامل ساخت داشبورد حرفه‌ای با نمودارهای تعاملی و داده‌های زنده...",
    author: "رضا محمدی",
    date: "۱۴۰۴/۰۸/۰۶",
    category: "آموزش",
    readTime: "۱۲ دقیقه",
    image: "/api/placeholder/400/250",
  },
  {
    id: 6,
    title: "آینده هوش مصنوعی در توسعه وب",
    excerpt:
      "نقش AI در کدنویسی خودکار، تست و بهینه‌سازی تجربه کاربری در سال ۲۰۲۵...",
    author: "نیما حسینی",
    date: "۱۴۰۴/۰۸/۰۴",
    category: "تکنولوژی",
    readTime: "۷ دقیقه",
    image: "/api/placeholder/400/250",
  },
];

const categories = ["همه", "آموزش", "تکنولوژی", "دیزاین", "امنیت"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  // فیلتر پست‌ها
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "همه" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // صفحه‌بندی
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 w-full mx-auto" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">بلاگ</h1>
            <p className="text-sm text-gray-500 mt-1">
              آخرین مقالات و آموزش‌ها
            </p>
          </div>
          <Link
            to="/blogs/new"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            <Plus className="w-4 h-4" />
            پست جدید
          </Link>
        </div>
      </header>

      <div className="p-6">
        {/* Search & Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="جستجو در مقالات..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full pr-10 pl-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setCurrentPage(1);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="bg-gray-200 border-2 border-dashed rounded-t-xl w-full h-48" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">{post.author}</p>
                      <p className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </p>
                    </div>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
                    ادامه مطلب
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">مقاله‌ای یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
}
