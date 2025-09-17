import React from "react";

const Footer = () => (
  <footer className="w-full bg-none  mt-0 p-10 px-4 font-gilroy">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-10">
      <div className="flex-1 min-w-[220px] mb-8 md:mb-0 flex items-center gap-2">
        <span className="font-bold text-lg tracking-tight">CampusVault</span>
      </div>
      <div className="flex-[2] grid grid-cols-2 sm:grid-cols-4 gap-6">
        <div>
          <div className="font-bold text-gray-900 mb-2 text-sm">PRODUCTS</div>
          <ul className="space-y-1 text-sm">
            <li><a href="/resources" className="text-gray-600 hover:text-black">Resources</a></li>
            <li><a href="/clubs" className="text-gray-600 hover:text-black">Clubs</a></li>
            <li><a href="/roadmaps" className="text-gray-600 hover:text-black">Roadmaps</a></li>
            <li><a href="/hackathons" className="text-gray-600 hover:text-black">Hackathons</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-900 mb-2 text-sm">RESOURCES</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#blog" className="text-gray-600 hover:text-black">Blog</a></li>
            <li><a href="#newsletter" className="text-gray-600 hover:text-black">Newsletter</a></li>
            <li><a href="#community" className="text-gray-600 hover:text-black">Community</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-900 mb-2 text-sm">QUICK LINKS</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#pricing" className="text-gray-600 hover:text-black">Pricing</a></li>
            <li><a href="#testimonials" className="text-gray-600 hover:text-black">Testimonials</a></li>
            <li><a href="#merch" className="text-gray-600 hover:text-black">Merch</a></li>
            <li><a href="#support" className="text-gray-600 hover:text-black">Support</a></li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-gray-900 mb-2 text-sm">LEGAL</div>
          <ul className="space-y-1 text-sm">
            <li><a href="#terms" className="text-gray-600 hover:text-black">Terms</a></li>
            <li><a href="#privacy" className="text-gray-600 hover:text-black">Privacy</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
