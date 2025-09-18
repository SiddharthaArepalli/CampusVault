import React from "react";
import Navbar from "../components/Navbar";

const ViewAcademic = () => {
  const [resources, setResources] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // Academic filters
  const [filterYear, setFilterYear] = React.useState("");
  const [filterSemester, setFilterSemester] = React.useState("");
  const [filterBranch, setFilterBranch] = React.useState("");
  const [filterSubject, setFilterSubject] = React.useState("");

  React.useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/resources`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        const data = await res.json();
        // Ensure resources is always an array
        if (Array.isArray(data)) {
          setResources(data);
        } else {
          setResources([]);
        }
      } catch (err) {
        setResources([]);
        alert("Failed to fetch resources");
      }
      setLoading(false);
    };
    fetchResources();
  }, []);

  return (
  <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight text-center drop-shadow-sm">Academic Resources</h1>
        <div className="mb-10 bg-white p-6 rounded-2xl border border-gray-200 shadow">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Filter Academic Resources</h2>
          <div className="flex flex-wrap gap-4">
            <select className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black text-gray-900 font-medium" value={filterYear} onChange={e => setFilterYear(e.target.value)}>
              <option value="">Year</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black text-gray-900 font-medium" value={filterSemester} onChange={e => setFilterSemester(e.target.value)}>
              <option value="">Semester</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            <select className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black text-gray-900 font-medium" value={filterBranch} onChange={e => setFilterBranch(e.target.value)}>
              <option value="">Branch</option>
              <option value="cse">CSE</option>
              <option value="cs">CS</option>
              <option value="it">IT</option>
              <option value="iot">IoT</option>
              <option value="ds">DS</option>
              <option value="aiml">AIML</option>
              <option value="ece">ECE</option>
              <option value="mech">Mech</option>
              <option value="civil">Civil</option>
            </select>
            <input type="text" placeholder="Subject Title" className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black text-gray-900 font-medium" value={filterSubject} onChange={e => setFilterSubject(e.target.value)} />
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          (() => {
            const filtered = resources.filter((r) => r.type === "academic" &&
              (!filterYear || r.year === filterYear) &&
              (!filterSemester || r.semester === filterSemester) &&
              (!filterBranch || r.branch === filterBranch) &&
              (!filterSubject || r.subjectTitle.toLowerCase().includes(filterSubject.toLowerCase()))
            );
            if (filtered.length > 0) {
              return (
                <div className="mb-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((res) => (
                      <div key={res._id} className="bg-white rounded-2xl shadow p-6 border border-gray-200 flex flex-col justify-between">
                        <div>
                          <span className="font-extrabold text-gray-900 text-lg">{res.subjectTitle}</span>
                          <div className="mb-2 text-sm text-gray-700">Uploaded by: {res.uploaderName || "Unknown"}</div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-600 text-sm">PDF</span>
                          {res.fileData ? (
                            <button
                              className="bg-black text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-900 transition"
                              onClick={async () => {
                                try {
                                  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/resources/${res._id}/download`, {
                                      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
                                    });
                                  const blob = await response.blob();
                                  const fileName = res.fileName || 'resource.pdf';
                                  if (window.navigator.msSaveOrOpenBlob) {
                                    window.navigator.msSaveOrOpenBlob(blob, fileName);
                                  } else {
                                    const link = document.createElement('a');
                                    link.href = window.URL.createObjectURL(blob);
                                    link.download = fileName;
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                  }
                                } catch (err) {
                                  alert('Failed to download file');
                                }
                              }}
                            >
                              Download
                            </button>
                          ) : (
                            <span className="text-gray-400 text-xs">No file</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            } else {
              return <div className="text-gray-500 text-center">No resources found.</div>;
            }
          })()
        )}
      </main>
    </div>
  );
};

export default ViewAcademic;
