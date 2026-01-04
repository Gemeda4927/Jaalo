import { skills } from "@/lib/data";
import {
  Code,
  Database,
  Smartphone,
  Wrench,
} from "lucide-react";

const skillIcons = {
  frontend: (
    <Code className="text-blue-600" size={24} />
  ),
  backend: (
    <Code className="text-green-600" size={24} />
  ),
  databases: (
    <Database
      className="text-purple-600"
      size={24}
    />
  ),
  tools: (
    <Wrench
      className="text-orange-600"
      size={24}
    />
  ),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I work with a wide range of
            technologies to deliver comprehensive
            solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(
            ([category, items]) => (
              <div
                key={category}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-white rounded-lg">
                    {skillIcons[
                      category as keyof typeof skillIcons
                    ] || <Wrench size={24} />}
                  </div>
                  <h3 className="text-xl font-semibold capitalize">
                    {category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {items.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        <div className="mt-20 bg-linear-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Currently Learning
            </h3>
            <p className="text-gray-600 mb-6">
              Always expanding my skill set with
              emerging technologies and best
              practices.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "AI/ML",
                "Cloud Architecture",
                "DevOps",
                "Blockchain",
                "IoT",
              ].map((topic) => (
                <span
                  key={topic}
                  className="bg-white px-4 py-2 rounded-lg border border-blue-200 text-blue-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
