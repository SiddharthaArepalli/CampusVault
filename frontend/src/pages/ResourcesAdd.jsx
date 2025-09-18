import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const ResourcesAdd = () => {
  // Academic resource form state
  const [academicYear, setAcademicYear] = useState("");
  const [academicSemester, setAcademicSemester] = useState("");
  const [academicSubjectTitle, setAcademicSubjectTitle] = useState("");
  const [academicPdf, setAcademicPdf] = useState(null);
  // Normal resource form state
  const [normalDomain, setNormalDomain] = useState("");
  const [normalTitle, setNormalTitle] = useState("");
  const [normalPdf, setNormalPdf] = useState(null);
  const [uploadCategory, setUploadCategory] = useState("academic");
  const [loading, setLoading] = useState(false);

  // Upload academic resource to backend
  const handleAcademicUpload = async (e) => {
    e.preventDefault();
    if (!academicYear || !academicSemester || !academicSubjectTitle || !academicPdf) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("type", "academic");
      formData.append("year", academicYear);
      formData.append("semester", academicSemester);
      formData.append("subjectTitle", academicSubjectTitle);
      formData.append("file", academicPdf);
      await axios.post("/api/resources", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAcademicYear("");
      setAcademicSemester("");
      setAcademicSubjectTitle("");
      setAcademicPdf(null);
      alert("Academic resource uploaded!");
    } catch (err) {
      alert("Failed to upload resource");
    }
    setLoading(false);
  };

  // Upload normal resource to backend
  const handleNormalUpload = async (e) => {
    e.preventDefault();
    if (!normalDomain || !normalTitle || !normalPdf) return;
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("type", "normal");
      formData.append("domain", normalDomain);
      formData.append("title", normalTitle);
      formData.append("file", normalPdf);
      await axios.post("/api/resources", formData, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setNormalDomain("");
      setNormalTitle("");
      setNormalPdf(null);
      alert("Resource uploaded!");
    } catch (err) {
      alert("Failed to upload resource");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Add Resource</h1>
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded-lg font-semibold border transition ${uploadCategory === "academic" ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-900 border-gray-900"}`}
            onClick={() => setUploadCategory("academic")}
          >
            Academic Resource
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-semibold border transition ${uploadCategory === "normal" ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-900 border-gray-900"}`}
            onClick={() => setUploadCategory("normal")}
          >
            Normal Resource
          </button>
        </div>
        {/* Academic Resource Form */}
        {uploadCategory === "academic" && (
          <form className="bg-white rounded-lg p-6 border border-gray-200 mb-8" onSubmit={handleAcademicUpload}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-1">Year</label>
              <input type="text" className="border rounded p-2 w-full" value={academicYear} onChange={e => setAcademicYear(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-1">Semester</label>
              <input type="text" className="border rounded p-2 w-full" value={academicSemester} onChange={e => setAcademicSemester(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-1">Subject Title</label>
              <input type="text" className="border rounded p-2 w-full" value={academicSubjectTitle} onChange={e => setAcademicSubjectTitle(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-1">PDF</label>
              <input type="file" accept="application/pdf" className="border rounded p-2 w-full" onChange={e => setAcademicPdf(e.target.files[0])} required />
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white border-gray-900 py-2 text-lg font-semibold rounded-lg">{loading ? "Uploading..." : "Upload Academic Resource"}</button>
          </form>
        )}
        {/* Normal Resource Form */}
        {uploadCategory === "normal" && (
          <form className="bg-white rounded-lg p-6 border border-gray-200 mb-8" onSubmit={handleNormalUpload}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-1">Domain</label>
              <input type="text" className="border rounded p-2 w-full" value={normalDomain} onChange={e => setNormalDomain(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-1">Title</label>
              <input type="text" className="border rounded p-2 w-full" value={normalTitle} onChange={e => setNormalTitle(e.target.value)} required />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-900 mb-1">PDF</label>
              <input type="file" accept="application/pdf" className="border rounded p-2 w-full" onChange={e => setNormalPdf(e.target.files[0])} required />
            </div>
            <button type="submit" className="w-full bg-gray-900 text-white border-gray-900 py-2 text-lg font-semibold rounded-lg">{loading ? "Uploading..." : "Upload Normal Resource"}</button>
          </form>
        )}
      </main>
    </div>
  );
};

export default ResourcesAdd;
