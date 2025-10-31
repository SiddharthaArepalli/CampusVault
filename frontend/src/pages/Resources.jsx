
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Resources = () => {
	const navigate = useNavigate();
	return (
		<div className="min-h-screen bg-[#fafbfc]">
			<Navbar />
			<main className="max-w-3xl mx-auto p-6 md:p-10">
				<div className="mb-10 text-center">
					<p className="text-4xl md:text-5xl font-bold text-center text-black mb-3">
						Make finding resources effortless.
					</p>
					<p className="text-base md:text-lg text-gray-700 text-center max-w-xl italic mb-6">Explore academics, notes, and more in seconds.</p>
				</div>
				<div className="flex flex-row gap-8 justify-center items-stretch flex-wrap">
					{/* View Resources Card */}
					<div className="flex-1 max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-7 flex flex-col min-h-[370px] relative">
						<div className="flex items-center justify-between mb-2">
							<span className="text-sm font-semibold text-gray-500">CampusVault</span>
		
						</div>
						<h2 className="text-2xl font-bold text-gray-900 mb-1">View Resources</h2>
						<p className="text-gray-700 text-sm mb-4">Browse all resources, grouped by category.</p>
						
						<div className="mt-auto flex flex-col gap-3">
							<button
								className="bg-black text-white w-full py-2.5 rounded-lg font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
								onClick={() => navigate("/view/academic")}
							>
								View Academic Resources
							</button>
							<button
								className="bg-black text-white w-full py-2.5 rounded-lg font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-400"
								onClick={() => navigate("/view/domain")}
							>
								View Domain Resources
							</button>
						</div>
					</div>

					{/* Upload Resource Card */}
					<div
						className="flex-1 max-w-md mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-7 flex flex-col min-h-[370px] relative cursor-pointer hover:shadow-xl transition"
						onClick={() => navigate("/resources/add")}
					>
						<div className="flex items-center justify-between mb-2">
							<span className="text-sm font-semibold text-gray-500">CampusVault</span>
							
						</div>
						<h2 className="text-xl font-bold text-gray-900 mb-1">Upload Resource</h2>
						<p className="text-gray-700 text-sm mb-4">Add a new academic or general resource.</p>
						
						<div className="mt-auto">
							<button className="bg-black text-white w-full py-2.5 rounded-lg font-semibold shadow hover:bg-gray-900 transition focus:outline-none focus:ring-2 focus:ring-gray-400">Go to Upload</button>
						</div>
						
					</div>
				</div>
			</main>
		</div>
	);
};

export default Resources;
