import { Code } from "lucide-react";
import { ResumeButton } from "./ResumeButton";

export function CodeIllustration() {
  return (
    <div className="sm:col-span-2 lg:col-span-2 row-span-2 bg-gray-50 p-6 sm:p-8 flex items-center justify-center group">
      <div className="text-center max-w-xs w-full">
        <div className="relative mb-6">
          <div className="w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Code className="w-8 h-8 text-white" />
          </div>
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
        <div className="flex justify-center">
          <ResumeButton
            href={
              "https://drive.google.com/file/d/1fO-eTQ5husAEKMeuARSghLAoG-TQ913Y/view?usp=sharing"
            }
          />
        </div>
      </div>
    </div>
  );
}
