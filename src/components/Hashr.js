import { useRef, useState } from "react";
import SPH_HashedPassword from "../vendor/SPH_HashedPassword";
import SPH_DomainExtractor from "../vendor/SPH_DomainExtractor";

function Hashr() {
    const websiteRef = useRef()
    const masterPasswordRef = useRef()
    const modifierRef = useRef()
    const [hashedPassword, setHashedPassword] = useState('')

    function updateHashedPassword() {
        console.log('update hashed password');

        let password = masterPasswordRef.current.value;
        let domain = websiteRef.current.value;

        let cleaned_domain = new SPH_DomainExtractor().extractDomain(domain);
        let modified_domain = modifyDomain(cleaned_domain);
        let password_hash = new SPH_HashedPassword(password, modified_domain).toString();

        setHashedPassword(password_hash);
    }

    function modifyDomain(domain) {
        let modifier = modifierRef.current.value;
        if (modifier >= 1) {
            return domain + ":" + modifier;
        } else {
            return domain;
        }
    }

    function copyToClipboard(event) {
        navigator.clipboard.writeText(hashedPassword)
        console.log("password copied to clipboard")
        event.preventDefault()
    }

    return (
        <div>
            <form>
                <div className="mb-6">
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                    <input
                        type="url"
                        id="website"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        onChange={updateHashedPassword}
                        ref={websiteRef} />
                </div>
                <div className="mb-6">
                    <label htmlFor="master_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Master Password</label>
                    <input
                        type="password"
                        id="master_password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required
                        onChange={updateHashedPassword}
                        ref={masterPasswordRef} />
                </div>
                <div className="mb-6">
                    <label htmlFor="modifier" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modifier</label>
                    <input
                        type="number"
                        id="modifier"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        defaultValue={0}
                        min={0}
                        max={999}
                        required
                        onChange={updateHashedPassword}
                        ref={modifierRef} />
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        <input
                            type="text"
                            className="dark:bg-gray-700"
                            value={hashedPassword}
                            readOnly
                            disabled />
                    </div>
                    <div>
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