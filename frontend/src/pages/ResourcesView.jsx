import React, { useEffect, useState } from "react";
import { saveAs } from "file-saver";
import Navbar from "../components/Navbar";
import axios from "axios";

const ResourcesView = () => {
  // This page is now split into /view/academic and /view/domain

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-6 flex flex-col items-center justify-center h-full">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Resource View Split</h1>
        <p className="text-lg text-gray-700 mb-6">Please use the links below to view resources:</p>
        <div className="flex gap-6">
          <a href="/view/academic" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">View Academic Resources</a>
          <a href="/view/domain" className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition">View Domain Resources</a>
        </div>
      </main>
    </div>
  );
};

export default ResourcesView;
