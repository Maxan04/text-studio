import { useState } from "react";
import { mockTransform } from "~/lib/mockTransform";

export default function TextStudio() {
  const [text, setText] = useState("");
  const [mode, setMode] = useState("Summary");
  const [output, setOutput] = useState("");

  const modes = ["Summary", "Rewrite", "Social post", "Campaign intro"];

  const handleGenerate = () => {
    const result = mockTransform(mode, text);
    setOutput(result);
  };

  return (
    <main className="p-8 min-h-screen bg-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-gray-100">
        Text Studio
      </h1>

      <textarea
        className="w-full h-[20vh] p-4 border border-gray-700 rounded-lg shadow-sm resize-none
                  focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100"
        placeholder="Skriv din text här..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-4 mb-4">
        <label className="block mb-2 text-gray-300 font-medium">
          Select mode:
        </label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
          className="p-2 border border-gray-700 rounded-lg shadow-sm focus:outline-none 
                    focus:ring-2 focus:ring-blue-500 bg-gray-800 text-gray-100"
        >
          {modes.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>
      </div>

      <button
      onClick={handleGenerate}
        className="mb-4 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg
                  shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Generate
      </button>

      <div className="mt-4 p-4 border border-gray-700 rounded-lg bg-gray-800 text-gray-100 
                      whitespace-pre-wrap min-h-[20vh]">
        {output || "No ouput yet..."}
      </div>
    </main>
  );
}
