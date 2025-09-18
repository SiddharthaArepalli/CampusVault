import React from "react";
import Navbar from "../components/Navbar";

const ViewDomain = () => {
  const [resources, setResources] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  // Domain filters
  const [filterDomain, setFilterDomain] = React.useState("");
  const [filterTitle, setFilterTitle] = React.useState("");

  React.useEffect(() => {
    const fetchResources = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/resources", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (!res.ok) {
          setResources([]);
          alert("Failed to fetch resources");
        } else {
          const data = await res.json();
          setResources(Array.isArray(data) ? data : []);
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
        <h1 className="text-4xl font-extrabold mb-8 text-gray-900 tracking-tight text-center drop-shadow-sm">Domain Resources</h1>
        <div className="mb-10 bg-white p-6 rounded-2xl border border-gray-200 shadow">
          <h2 className="text-xl font-bold mb-4 text-gray-900">Filter Domain Resources</h2>
          <div className="flex flex-wrap gap-4">
            <input type="text" placeholder="Domain" className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black text-gray-900 font-medium" value={filterDomain} onChange={e => setFilterDomain(e.target.value)} />
            <input type="text" placeholder="Title" className="border-2 border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-black text-gray-900 font-medium" value={filterTitle} onChange={e => setFilterTitle(e.target.value)} />
          </div>
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          resources.filter((r) => r.type === "normal").length > 0 ? (
            <div className="mb-10">
              {Object.entries(
                resources.filter((r) => r.type === "normal" &&
                  (!filterDomain || r.domain.toLowerCase().includes(filterDomain.toLowerCase())) &&
                  (!filterTitle || r.title.toLowerCase().includes(filterTitle.toLowerCase()))
                ).reduce((acc, res) => {
                  if (!acc[res.domain]) acc[res.domain] = [];
                  acc[res.domain].push(res);
                  return acc;
                }, {})
              ).map(([domain, domainResources]) => (
                <div key={domain} className="mb-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-700">{domain}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {domainResources.map((res) => (
                      <div key={res._id} className="bg-white rounded-2xl shadow p-6 border border-gray-200 flex flex-col justify-between">
                        <div>
                          <span className="font-extrabold text-gray-900 text-lg">{res.title}</span>
                          <div className="mb-2 text-sm text-gray-700">Uploaded by: {res.uploaderName || "Unknown"}</div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <span className="text-gray-600 text-sm">PDF</span>
                          {res.fileData ? (
                            <button
                              className="bg-black text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-gray-900 transition"
                              onClick={async () => {
                                try {
                                  const response = await fetch(`/api/resources/${res._id}/download`, {
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
                            <span className="text-gray-400">No file</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-gray-500">No domain resources found.</div>
          )
        )}
      </main>
    </div>
  );
};

export default ViewDomain;
