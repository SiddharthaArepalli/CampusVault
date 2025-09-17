import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
// ...existing code...
import axios from "axios";

const DOMAINS = [
  { label: 'Frontend', url: '#' },
  { label: 'Backend', url: '#' },
  { label: 'Full Stack', url: '#' },
  { label: 'Data Analyst', url: '#' },
];

// Helper functions for file storage
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result.split(',')[1];
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

const base64ToBlob = (base64, type) => {
  const binStr = atob(base64);
  const len = binStr.length;
  const arr = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    arr[i] = binStr.charCodeAt(i);
  }
  return new Blob([arr], { type: type });
};

// Star Rating Component
const StarRating = ({ rating, totalRatings, onRate }) => {
  const [hover, setHover] = useState(0);
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            className="focus:outline-none"
            onClick={() => onRate(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
          >
            <svg
              className={`w-5 h-5 ${
                star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </button>
        ))}
      </div>
      <span className="text-sm text-gray-500">({totalRatings} ratings)</span>
    </div>
  );
};

const PrimaryButton = ({ onClick, children, className = "", disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`border border-gray-200 text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition font-medium ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    } ${className}`}
  >
    {children}
  </button>
);

const SecondaryButton = ({ onClick, children, className = "", disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`border border-gray-900 text-gray-900 hover:text-white bg-white hover:bg-gray-900 px-4 py-2 rounded-lg transition font-medium ${
      disabled ? 'opacity-50 cursor-not-allowed' : ''
    } ${className}`}
  >
    {children}
  </button>
);

const Resources = () => {
  // Academic resource form state
  const [academicYear, setAcademicYear] = useState("");
  const [academicSemester, setAcademicSemester] = useState("");
  const [academicSubjectTitle, setAcademicSubjectTitle] = useState("");
  const [academicPdf, setAcademicPdf] = useState(null);
  // Normal resource form state
  const [normalDomain, setNormalDomain] = useState("");
  const [normalTitle, setNormalTitle] = useState("");
  const [normalPdf, setNormalPdf] = useState(null);

  // Handler for academic resource upload
  const handleAcademicUpload = (e) => {
    e.preventDefault();
    if (!academicYear || !academicSemester || !academicSubjectTitle || !academicPdf) return;
    const newResource = {
      year: academicYear,
      semester: academicSemester,
      subjectTitle: academicSubjectTitle,
      file: academicPdf,
      name: academicPdf.name
    };
    setUploadedFiles(prev => ({
      ...prev,
      academic: [...(prev.academic || []), newResource]
    }));
    setAcademicYear("");
    setAcademicSemester("");
    setAcademicSubjectTitle("");
    setAcademicPdf(null);
  };

  // Handler for normal resource upload
  const handleNormalUpload = (e) => {
    e.preventDefault();
    if (!normalDomain || !normalTitle || !normalPdf) return;
    const newResource = {
      domain: normalDomain,
      title: normalTitle,
      file: normalPdf,
      name: normalPdf.name
    };
    setUploadedFiles(prev => ({
      ...prev,
      normal: [...(prev.normal || []), newResource]
    }));
    setNormalDomain("");
    setNormalTitle("");
    setNormalPdf(null);
  };
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);
  const [year, setYear] = useState(null);
  const [branch, setBranch] = useState(null);
  const [semester, setSemester] = useState(null);
  const [subject, setSubject] = useState(null);
  const [uploadingSubject, setUploadingSubject] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState(() => {
    const saved = localStorage.getItem('uploadedFiles');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Convert stored file data back to File objects
        Object.keys(parsed).forEach(subject => {
          parsed[subject] = parsed[subject].map(fileData => {
            return new File(
              [base64ToBlob(fileData.content, fileData.type)],
              fileData.name,
              { type: fileData.type }
            );
          });
        });
        return parsed;
      } catch (err) {
        console.error('Error loading saved files:', err);
        return {};
      }
    }
    return {};
  });
  const [ratings, setRatings] = useState(() => {
    const saved = localStorage.getItem('ratings');
    return saved ? JSON.parse(saved) : {};
  });
  const [downloadedFiles, setDownloadedFiles] = useState(() => {
    const saved = localStorage.getItem('downloadedFiles');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [userRatings, setUserRatings] = useState(() => {
    const saved = localStorage.getItem('userRatings');
    return saved ? JSON.parse(saved) : {};
  }); // Track if user has rated each file

  const years = ["1st Year", "2nd Year", "3rd Year", "4th Year"];
  const branches = ["CSE", "ECE", "EEE", "MECH","CIVIL","AIML","DS","IT","CS"];
  const semesters = ["Sem 1", "Sem 2"];

  // Fix: Add missing uploadCategory state
  const [uploadCategory, setUploadCategory] = useState('academic');

  const subjects = {
    "1st Year": {
      CSE: {
        "Sem 1": ["PSUC", "MAC", "Engineering Chemistry","EELS",],
        "Sem 2": ["DSA", "OOPS", "Networks"],
      },
      ECE: {
        "Sem 1": ["Maths ECE", "Physics ECE", "Chemistry ECE"],
        "Sem 2": ["Circuits", "Signals", "Systems"],
      },
      EEE: {
        "Sem 1": ["Basic Electrical", "Physics EEE", "Chemistry EEE"],
        "Sem 2": ["Electronics", "Control Systems", "Power Systems"],
      },
      MECH: {
        "Sem 1": ["Engineering Mechanics", "Physics MECH", "Chemistry MECH"],
        "Sem 2": ["Thermodynamics", "Material Science", "Manufacturing"],
      },
    },
    "2nd Year": {
      CSE: {
        "Sem 1": ["Data Structures", "Discrete Maths", "Digital Logic"],
        "Sem 2": ["Algorithms", "Operating Systems", "DBMS"],
      },
      ECE: {
        "Sem 1": ["Signals and Systems", "Electromagnetics", "Microprocessors"],
        "Sem 2": ["Communication Systems", "Analog Circuits", "Embedded Systems"],
      },
      EEE: {
        "Sem 1": ["Circuit Theory", "Electromagnetics", "Electrical Machines"],
        "Sem 2": ["Power Electronics", "Control Systems", "Renewable Energy"],
      },
      MECH: {
        "Sem 1": ["Fluid Mechanics", "Thermodynamics", "Material Science"],
        "Sem 2": ["Machine Design", "Manufacturing Processes", "Heat Transfer"],
      },
    },
    // Add other years and branches as needed
  };

  const reset = () => {
    setYear(null);
    setBranch(null);
    setSemester(null);
    setSubject(null);
    setUploadingSubject(null);
  };

  const goBack = () => {
    if (uploadingSubject) setUploadingSubject(null);
    else if (subject) setSubject(null);
    else if (semester) setSemester(null);
    else if (branch) setBranch(null);
    else if (year) setYear(null);
  };

  const pdfFiles = [
    { name: "Lecture Notes - Chapter 1", url: "/pdfs/lecture1.pdf" },
    { name: "Solved Question Papers - 2023", url: "/pdfs/question_papers_2023.pdf" },
    { name: "Lab Manual - Complete Guide", url: "/pdfs/lab_manual.pdf" },
  ];

  // Save states to localStorage whenever they change
  useEffect(() => {
    const saveUploadedFiles = async () => {
      const filesForStorage = {};
      for (const [subject, files] of Object.entries(uploadedFiles)) {
        filesForStorage[subject] = await Promise.all(
          files.map(async (file) => ({
            name: file.name,
            type: file.type,
            content: await fileToBase64(file)
          }))
        );
      }
      localStorage.setItem('uploadedFiles', JSON.stringify(filesForStorage));
    };
    saveUploadedFiles();
  }, [uploadedFiles]);

  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings));
  }, [ratings]);

  useEffect(() => {
    localStorage.setItem('downloadedFiles', JSON.stringify([...downloadedFiles]));
  }, [downloadedFiles]);

  useEffect(() => {
    localStorage.setItem('userRatings', JSON.stringify(userRatings));
  }, [userRatings]);

  const [customFileName, setCustomFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedFile(file);
    setCustomFileName(file.name);
  };

  const handleFileUpload = () => {
    if (!selectedFile || !customFileName.trim()) return;
    
    // Create a new File object with the custom name
    const customFile = new File([selectedFile], customFileName.endsWith('.pdf') ? customFileName : `${customFileName}.pdf`, {
      type: selectedFile.type,
    });
    
    setUploadedFiles((prev) => {
      const prevFiles = prev[uploadingSubject] || [];
      return {
        ...prev,
        [uploadingSubject]: [...prevFiles, customFile],
      };
    });

    // Reset the form
    setSelectedFile(null);
    setCustomFileName("");
    document.getElementById('uploadPdf').value = '';
  };

  return (

    <div className="relative min-h-screen flex flex-col bg-white">
      <div className="mesh-background" aria-hidden="true"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 relative z-10 px-6 py-8 bg-white/80">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 border border-gray-100">
          {/* Breadcrumb Path */}
          {(year || branch || semester || subject || uploadingSubject) && (
            <div className="mb-6">
              <nav className="flex items-center text-gray-500 text-base" aria-label="Breadcrumb">
                <ol className="flex flex-wrap gap-2">
                  {year && (
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-800">{year}</span>
                      {(branch || semester || subject || uploadingSubject) && <span className="mx-2">›</span>}
                    </li>
                  )}
                  {branch && (
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-800">{branch}</span>
                      {(semester || subject || uploadingSubject) && <span className="mx-2">›</span>}
                    </li>
                  )}
                  {semester && (
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-800">{semester}</span>
                      {(subject || uploadingSubject) && <span className="mx-2">›</span>}
                    </li>
                  )}
                  {subject && !uploadingSubject && (
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-800">{subject}</span>
                    </li>
                  )}
                  {uploadingSubject && (
                    <li className="flex items-center">
                      <span className="font-semibold text-gray-800">{uploadingSubject}</span>
                    </li>
                  )}
                </ol>
              </nav>
            </div>
          )}

          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-4xl font-bold text-gray-900">Academic Resources</h1>
              {(year || branch || semester || subject || uploadingSubject) && (
                <SecondaryButton onClick={reset} className="!w-auto">
                  Reset All
                </SecondaryButton>
              )}
            </div>

            {(year || branch || semester || subject || uploadingSubject) && (
              <SecondaryButton
                onClick={goBack}
                className="!w-auto flex items-center gap-1"
              >
                <span>←</span> Back
              </SecondaryButton>
            )}
          </div>

          {/* Select Year */}
          {!year && (
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-gray-900">Select Year</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {years.map((y) => (
                  <SecondaryButton key={y} onClick={() => setYear(y)}>
                    {y}
                  </SecondaryButton>
                ))}
              </div>
            </div>
          )}

         

          {/* Select Branch */}
          {year && !branch && (
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-gray-900">
                Select Branch ({year})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {branches.map((b) => (
                  <SecondaryButton key={b} onClick={() => setBranch(b)}>
                    {b}
                  </SecondaryButton>
                ))}
              </div>
            </div>
          )}

          {/* Select Semester */}
          {year && branch && !semester && (
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-gray-900">
                Select Semester ({branch})
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {semesters.map((s) => (
                  <SecondaryButton key={s} onClick={() => setSemester(s)}>
                    {s}
                  </SecondaryButton>
                ))}
              </div>
            </div>
          )}

          {/* Select Subject */}
          {year && branch && semester && !subject && !uploadingSubject && (
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-gray-900">
                Subjects in {semester} ({branch})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(subjects[year]?.[branch]?.[semester] || []).map((sub) => (
                  <div
                    key={sub}
                    className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center shadow-sm"
                  >
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{sub}</h3>
                    <div className="flex flex-col gap-3 w-full">
                      <PrimaryButton onClick={() => setSubject(sub)}>
                        View PDFs
                      </PrimaryButton>
                      <SecondaryButton onClick={() => setUploadingSubject(sub)}>
                        Upload PDF
                      </SecondaryButton>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Subject PDFs */}
          {year && branch && semester && subject && !uploadingSubject && (
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-gray-900">
                {subject} Resources ({semester} - {branch})
              </h2>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <ul className="space-y-3">
                  {pdfFiles.map(({ name, size, url }) => {
                    const fileId = `${subject}-${name}`;
                    const fileRatings = ratings[fileId] || { avg: 0, count: 0, total: 0 };
                    const hasDownloaded = downloadedFiles.has(fileId);
                    
                    return (
                      <li key={name} className="flex flex-col border-b pb-2">
                        <div className="flex justify-between items-center mb-0.5">
                          <p className="text-gray-900 font-medium">{name}</p>
                          <a
                            href={url}
                            download
                            onClick={() => {
                              setDownloadedFiles(prev => new Set([...prev, fileId]));
                            }}
                            className="px-4 py-1.5 text-gray-600 hover:text-black bg-white hover:bg-gray-50 rounded-lg transition border border-gray-200 text-sm font-medium"
                          >
                            Download
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <StarRating
                            rating={userRatings[fileId] || fileRatings.avg}
                            totalRatings={fileRatings.count}
                            onRate={hasDownloaded && !userRatings[fileId] ? (newRating) => {
                              setRatings(prev => {
                                const oldRating = prev[fileId] || { total: 0, count: 0 };
                                return {
                                  ...prev,
                                  [fileId]: {
                                    total: oldRating.total + newRating,
                                    count: oldRating.count + 1,
                                    avg: Math.round((oldRating.total + newRating) / (oldRating.count + 1))
                                  }
                                };
                              });
                              setUserRatings(prev => ({
                                ...prev,
                                [fileId]: newRating
                              }));
                            } : null}
                          />
                          {!hasDownloaded ? (
                            <span className="text-sm text-gray-400">Download to rate</span>
                          ) : userRatings[fileId] ? (
                            <span className="text-sm text-green-600">You rated this {userRatings[fileId]} ★</span>
                          ) : (
                            <span className="text-sm text-blue-600">Click stars to rate</span>
                          )}
                        </div>
                      </li>
                    );
                  })}

                  {(uploadedFiles[subject] || []).map((file, idx) => {
                    const fileId = `${subject}-${file.name}`;
                    const fileRatings = ratings[fileId] || { avg: 0, count: 0, total: 0 };
                    const hasDownloaded = downloadedFiles.has(fileId);

                    return (
                      <li key={idx} className="flex flex-col border-b pb-2">
                        <div className="flex justify-between items-center mb-0.5">
                          <p className="text-gray-900 font-medium">{file.name}</p>
                          <a
                            href={URL.createObjectURL(file)}
                            download={file.name}
                            onClick={() => {
                              setDownloadedFiles(prev => new Set([...prev, fileId]));
                            }}
                            className="px-4 py-2 text-gray-900 hover:bg-gray-50 rounded-lg transition border border-gray-200"
                          >
                            Download
                          </a>
                        </div>
                        <div className="flex items-center justify-between">
                          <StarRating
                            rating={userRatings[fileId] || fileRatings.avg}
                            totalRatings={fileRatings.count}
                            onRate={hasDownloaded && !userRatings[fileId] ? (newRating) => {
                              setRatings(prev => {
                                const oldRating = prev[fileId] || { total: 0, count: 0 };
                                return {
                                  ...prev,
                                  [fileId]: {
                                    total: oldRating.total + newRating,
                                    count: oldRating.count + 1,
                                    avg: Math.round((oldRating.total + newRating) / (oldRating.count + 1))
                                  }
                                };
                              });
                              setUserRatings(prev => ({
                                ...prev,
                                [fileId]: newRating
                              }));
                            } : null}
                          />
                          {!hasDownloaded ? (
                            <span className="text-sm text-gray-400">Download to rate</span>
                          ) : userRatings[fileId] ? (
                            <span className="text-sm text-green-600">You rated this {userRatings[fileId]} ★</span>
                          ) : (
                            <span className="text-sm text-blue-600">Click stars to rate</span>
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>

                <SecondaryButton
                  onClick={() => setSubject(null)}
                  className="mt-6 !w-auto"
                >
                  Back to Subjects
                </SecondaryButton>
              </div>
            </div>
          )}

          {/* Upload PDFs */}
          {uploadingSubject && (
            <div>
              <h2 className="mb-6 font-semibold text-2xl text-gray-900">
                Upload PDFs for {uploadingSubject} ({semester} - {branch})
              </h2>
              <div className="bg-white rounded-lg p-4 border border-gray-200">
                <ul className="text-sm space-y-2 text-gray-700">
                  {(uploadedFiles[uploadingSubject] || []).map((file, idx) => (
                    <li key={idx} className="flex justify-between items-center py-1 border-b">
                      <span className="truncate max-w-[200px]">{file.name}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={URL.createObjectURL(file)}
                          download={file.name}
                          className="text-xs text-green-600 hover:underline px-2"
                        >
                          Download
                        </a>
                        <button
                          onClick={() => {
                            setUploadedFiles(prev => {
                              const newFiles = { ...prev };
                              newFiles[uploadingSubject] = prev[uploadingSubject].filter((_, i) => i !== idx);
                              if (newFiles[uploadingSubject].length === 0) {
                                delete newFiles[uploadingSubject];
                              }
                              return newFiles;
                            });
                          }}
                          className="text-xs text-red-500 hover:text-red-700 px-2"
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 space-y-2">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="uploadPdf">
                      Select PDF
                    </label>
                    <input
                      type="file"
                      id="uploadPdf"
                      accept="application/pdf"
                      onChange={handleFileSelect}
                      className="text-sm border border-gray-300 rounded p-1.5 w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-1" htmlFor="fileName">
                      File Name
                    </label>
                    <input
                      type="text"
                      id="fileName"
                      value={customFileName}
                      onChange={(e) => setCustomFileName(e.target.value)}
                      placeholder="Enter file name"
                      className="text-sm border border-gray-300 rounded p-1.5 w-full"
                    />
                  </div>

                  <PrimaryButton
                    onClick={handleFileUpload}
                    className="!mt-3 !py-1.5 !text-sm"
                    disabled={!selectedFile || !customFileName.trim()}
                  >
                    Upload PDF
                  </PrimaryButton>
                </div>

                <SecondaryButton
                  onClick={() => setUploadingSubject(null)}
                  className="mt-6 !w-auto"
                >
                  Back to Subjects
                </SecondaryButton>
              </div>
            </div>
          )}


        {/* Resource Upload Section (Academic/Normal) */}
        <div className="mt-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Add New Resource</h2>
          <div className="flex gap-4 mb-6">
            <PrimaryButton
              onClick={() => setUploadCategory('academic')}
              className={uploadCategory === 'academic' ? '!bg-gray-900 !text-white !border-gray-900' : '!bg-white !text-gray-900 !border-gray-900'}
            >
              Academic Resource
            </PrimaryButton>
            <SecondaryButton
              onClick={() => setUploadCategory('normal')}
              className={uploadCategory === 'normal' ? '!bg-gray-900 !text-white !border-gray-900' : '!bg-white !text-gray-900 !border-gray-900'}
            >
              Normal Resource
            </SecondaryButton>
          </div>

          {/* Academic Resource Form */}
          {uploadCategory === 'academic' && (
            <form className="bg-white rounded-lg p-6 border border-gray-200 max-w-xl mb-8" onSubmit={handleAcademicUpload}>
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
              <PrimaryButton type="submit" className="w-full !bg-gray-900 !text-white !border-gray-900 !py-2 !text-lg font-semibold">Upload Academic Resource</PrimaryButton>
            </form>
          )}

          {/* Uploaded Academic Resources */}
          {uploadCategory === 'academic' && uploadedFiles.academic && uploadedFiles.academic.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 max-w-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Uploaded Academic Resources</h3>
              <ul className="space-y-3">
                {uploadedFiles.academic.map((res, idx) => (
                  <li key={idx} className="flex flex-col border-b pb-2">
                    <div className="flex justify-between items-center mb-0.5">
                      <div>
                        <span className="font-medium text-gray-900">{res.subjectTitle}</span>
                        <span className="ml-2 text-xs text-gray-500">({res.year}, Sem {res.semester})</span>
                      </div>
                      <a
                        href={URL.createObjectURL(res.file)}
                        download={res.name}
                        className="px-4 py-1.5 text-gray-600 hover:text-black bg-white hover:bg-gray-50 rounded-lg transition border border-gray-200 text-sm font-medium"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Normal Resource Form */}
          {uploadCategory === 'normal' && (
            <form className="bg-white rounded-lg p-6 border border-gray-200 max-w-xl mb-8" onSubmit={handleNormalUpload}>
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
              <PrimaryButton type="submit" className="w-full !bg-gray-900 !text-white !border-gray-900 !py-2 !text-lg font-semibold">Upload Normal Resource</PrimaryButton>
            </form>
          )}

          {/* Uploaded Normal Resources */}
          {uploadCategory === 'normal' && uploadedFiles.normal && uploadedFiles.normal.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 max-w-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Uploaded Normal Resources</h3>
              <ul className="space-y-3">
                {uploadedFiles.normal.map((res, idx) => (
                  <li key={idx} className="flex flex-col border-b pb-2">
                    <div className="flex justify-between items-center mb-0.5">
                      <div>
                        <span className="font-medium text-gray-900">{res.title}</span>
                        <span className="ml-2 text-xs text-gray-500">({res.domain})</span>
                      </div>
                      <a
                        href={URL.createObjectURL(res.file)}
                        download={res.name}
                        className="px-4 py-1.5 text-gray-600 hover:text-black bg-white hover:bg-gray-50 rounded-lg transition border border-gray-200 text-sm font-medium"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

      </div>
    </main>
  </div>
);
}

export default Resources;