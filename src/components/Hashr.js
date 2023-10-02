import { useEffect, useRef, useState } from "react";
import History from "./History";
import SPH_HashedPassword from "../vendor/SPH_HashedPassword";
import SPH_DomainExtractor from "../vendor/SPH_DomainExtractor";

function Hashr() {
    const websiteRef = useRef();
    const masterPasswordRef = useRef();

    const [website, setWebsite] = useState(null);
    const [masterPassword, setMasterPassword] = useState(null);
    const [hashedPassword, setHashedPassword] = useState('');
    const [modifier, setModifier] = useState(0);
    const [historyItems, setHistoryItems] = useState([{'website': "google.com"}, {'website': "apple.com", "modifier": 1}]);

    useEffect(updateHashedPassword)

    function updateHashedPassword() {
        if (!website || !masterPassword) {
            return;
        }

        console.log('update hashed password with modifier: ' + modifier);

        let cleaned_domain = new SPH_DomainExtractor().extractDomain(website);
        let modified_domain = modifyDomain(cleaned_domain);
        let password_hash = new SPH_HashedPassword(masterPassword, modified_domain).toString();

        setHashedPassword(password_hash);
    }

    function modifyDomain(domain) {
        if (modifier >= 1) {
            return domain + ":" + modifier;
        } else {
            return domain;
        }
    }

    function copyToClipboard(event) {
        navigator.clipboard.writeText(hashedPassword);

        const item = {
            'website': website,
            'modifier': modifier,
        };
        console.log("add history item: " + item.website)
        setHistoryItems(historyItems => historyItems.concat(item))

        console.log("password copied to clipboard");
    }

    function decreaseModifier() {
        setModifier(Math.max(0, modifier - 1));
    }

    function increaseModifier() {
        setModifier(modifier + 1);
    }

    return (
        <div>
            <History items={historyItems} />
            <form>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </div>
                    <input
                        type="url"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Website (URL or Domain)"
                        ref={websiteRef}
                        onChange={() => setWebsite(websiteRef.current.value)}
                        required />
                </div>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>
                    </div>
                    <input
                        type="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Master Password"
                        ref={masterPasswordRef}
                        onChange={() => setMasterPassword(masterPasswordRef.current.value)}
                        required />
                </div>
                <div className="mb-6 relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-500 dark:text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                        </svg>
                    </div>
                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {modifier >= 1 ? "Variant " + modifier : "No modifier"}
                    </div>
                    <div className="absolute inset-y-0 right-0 flex flex-row m-1.5 divide-x">
                        <button type="button" onClick={decreaseModifier} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-12 rounded-l cursor-pointer">
                            <span className="">-</span>
                        </button>
                        <button type="button" onClick={increaseModifier} className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-12 rounded-r cursor-pointer">
                            <span className="">+</span>
                        </button>
                    </div>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <p className="text-4xl font-medium text-gray-900 dark:text-white">
                            {hashedPassword}
                        </p>
                    </div>
                    <div className="justify-self-end">
                        <button
                            type="submit"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            name="copyButton"
                            onClick={copyToClipboard}
                        >Copy to clipboard</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Hashr;