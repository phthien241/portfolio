import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Skills.scss"

function Skills() {
  return (
    <>
      <div className="bg-skills">
        <Navbar></Navbar>
        <div class="gap-8 sm:grid sm:grid-cols-2 px-8">
          <div>
            <h1 className="font-bold mb-4">Font-end</h1>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                HTML5
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                CSS3
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Javascript
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Tailwind CSS
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Angular
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                ReactJS
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "40%" }}
                  ></div>
                </div>
              </dd>
            </dl>
          </div>
          <div>
            <h1 className="mb-4 font-bold">Back-end</h1>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                NoSQL
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                SQL
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "70%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Node.js
              </dt>
              <dd class="flex items-center mb-4">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <h1 className="mb-3 font-bold">Others</h1>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                Git & GitHub
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </dd>
            </dl>
            <dl>
              <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                C++
              </dt>
              <dd class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                  <div
                    class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
