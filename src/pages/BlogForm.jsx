"use client";

import React, { useState } from "react";
import { Plus, Tag, Clock, User, ChevronLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const categories = ["آموزش", "تکنولوژی", "دیزاین", "امنیت"];

export default function BlogForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    readTime: "",
    image: "",
  });
  console.log(formData);
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {};

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // const validateForm = () => {
  //   const newErrors = {};
  //   if (!formData.title.trim()) newErrors.title = "عنوان الزامی است";
  //   if (!formData.excerpt.trim()) newErrors.excerpt = "خلاصه الزامی است";
  //   if (!formData.content.trim()) newErrors.content = "محتوا الزامی است";
  //   if (!imagePreview) newErrors.image = "تصویر الزامی است";
  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     console.log("پست جدید:", { ...formData, image: imagePreview });
  //     alert("پست با موفقیت ایجاد شد!");
  //     navigate("/blogs");
  //   }
  // };

  return (
    <div className="min-h-screen w-full bg-gray-50" dir="rtl">
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/blogs"
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                افزودن پست جدید
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                ایجاد مقاله جدید در بلاگ
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/blogs")}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
            >
              لغو
            </button>
            <button
              // onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              <Plus className="w-4 h-4" />
              ذخیره پست
            </button>
          </div>
        </div>
      </header>

      <div className="p-6 max-w-4xl mx-auto">
        <form className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              تصویر شاخص
            </label>
            <div className="space-y-4">
              <input
                onChange={(e) => setFormData({ image: e.target.files[0] })}
                type="file"
                label="image"
                id="file-upload"
                name="blog"
                accept=".jpeg, .jpg, .png"
              />

              {/* {imagePreview ? (
                <div className="relative">
                  <img
                    name="blog"
                    src={imagePreview}
                    alt="پیش‌نمایش"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setImagePreview(null);
                      setErrors((prev) => ({ ...prev, image: "" }));
                    }}
                    className="absolute top-2 left-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                  <Image className="w-12 h-12 text-gray-400 mb-3" />
                  <p className="text-sm text-gray-600">
                    کلیک کنید یا تصویر را اینجا بکشید
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )} */}
              {errors.image && (
                <p className="text-red-500 text-xs">{errors.image}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                عنوان پست
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="عنوان جذاب و واضح..."
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                  errors.title ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.title && (
                <p className="text-red-500 text-xs mt-1">{errors.title}</p>
              )}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                خلاصه پست
              </label>
              <input
                type="text"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleInputChange}
                placeholder="در یک جمله، محتوای پست را خلاصه کنید..."
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition ${
                  errors.excerpt ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.excerpt && (
                <p className="text-red-500 text-xs mt-1">{errors.excerpt}</p>
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              محتوای کامل
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              rows="10"
              placeholder="محتوای کامل پست خود را اینجا بنویسید..."
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none ${
                errors.content ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.content && (
              <p className="text-red-500 text-xs mt-1">{errors.content}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Tag className="w-4 h-4" />
                دسته‌بندی
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4" />
                زمان مطالعه
              </label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                placeholder="مثلاً: ۸ دقیقه"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                <User className="w-4 h-4" />
                نویسنده
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="نام نویسنده"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
