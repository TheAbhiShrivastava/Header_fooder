// src/components/Footer.js
import React from 'react';
import brandLogo from '../brand-logo.svg';

const Footer = () => {
    return (
        <footer className=" text-white  py-8 bg-cyan-950">
            <div className="container mx-auto grid grid-cols-1  gap-3 md:grid-cols-5">
                <div>
                    <h5 className="font-bold text-xl px-10 mb-4">Solution</h5>
                    <ul>
                        <li className="mb-3 px-10"><a href="/" className="hover:underline ">Dealership-wide</a></li>
                        <li className="mb-3 px-10"><a href="/" className="hover:underline ">Finance</a></li>
                        <li className="mb-3 px-10"><a href="/" className="hover:underline ">Service</a></li>
                        <li className="mb-3 px-10"><a href="/" className="hover:underline ">All Solutions</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold text-xl mb-4">Resources</h5>
                    <ul>
                        <li className="mb-3"><a href="/resources" className="hover:underline">Industry News</a></li>
                        <li className="mb-3"><a href="/resources" className="hover:underline">Whitepapers and Reports</a></li>
                        <li className="mb-3"><a href="/resources" className="hover:underline">Fuel Newsletter</a></li>
                        <li className="mb-3"><a href="/resources" className="hover:underline">Connected Podcast</a></li>
                    </ul>
                </div>
                <div>
                    <h5 className="font-bold  text-xl mb-4">Document Services</h5>
                    <ul>
                        <li className="mb-3"><a href="/document-services" className="hover:underline">Marketing & Branding</a></li>
                        <li className="mb-3"><a href="/document-services" className="hover:underline">Service</a></li>
                        <li className="mb-3"><a href="/document-services" className="hover:underline">Business Office</a></li>
                        <li className="mb-3"><a href="/document-services" className="hover:underline">Sales</a></li>
                       </ul>
                </div>
                <div>
                    <h5 className="font-bold  text-xl mb-4">Company</h5>
                    <ul>
                        <li className="mb-3"><a href="/company" className="hover:underline">About Us</a></li>
                        <li className="mb-3"><a href="/company" className="hover:underline">Careers</a></li>
                        <li className="mb-3"><a href="/company" className="hover:underline">Community Outreach</a></li>
                        <li className="mb-3"><a href="/company" className="hover:underline">Customer Success Stories</a></li>
                       </ul>
                </div>
                <div>
                    <h5 className="font-bold  text-xl mb-4">Contact Us</h5>
                    <ul>
                        <li className="mb-1">Office: <a href="tel:9374852000" className="hover:underline">937.485.7654</a></li>
                        <li className="mb-1">Sales: <a href="tel:8007677879" className="hover:underline">800.767.7879</a></li>
                        <li className="mb-1">Document Sales: <a href="tel:8003440996" className="hover:underline">800.344.0996</a></li>
                        <li className="mb-1">Support: <a href="tel:8007670080" className="hover:underline">800.767.0080</a></li>
                        <li className="mb-1"><a href="/contact" className="hover:underline">More Contact Information</a></li>
                       
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center">
                <img src={brandLogo} className="h-20 w-60 mr-5" alt="logo" />
                <div className="text-center md:text-left mt-4 md:mt-0">
                    <p><a href="/legal-notices" className="hover:underline">Legal Notices</a></p>
                    <p><a href="/privacy-rights" className="hover:underline">Your Privacy Rights</a></p>
                   </div>
                <div className="text-center md:text-right mt-4 md:mt-0 p-10">
                    <p>© 2024 The Emergent Dealer Service.</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
