import React, { Component } from 'react';

class Hashr extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="mb-6">
                        <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website</label>
                        <input
                            type="url"
                            id="website"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="google.com"
                            required />
                    </div>
                    <div class="mb-6">
                        <label for="master_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Master Password</label>
                        <input
                            type="password"
                            id="master_password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="•••••••••"
                            required />
                    </div>
                    <div class="mb-6">
                        <label for="modificator" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Modificator</label>
                        <input
                            type="number"
                            id="modificator"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={0}
                            required />
                    </div>
                    <div class="mb-6">
                        <input
                            type="text"
                            id="hashed_password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue={"Hashed Password"}
                            readOnly
                            disabled />
                    </div>
                </form>
            </div>
        );
    }
}

export default Hashr;