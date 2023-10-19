"use client";

import { Loader4 as LoaderIcon } from "@styled-icons/remix-fill/Loader4";
import { useQuery } from "react-query";
import { NetlifyLogo } from "../NetlifyLogo";

export const BuildStatus = () => {
  const { data, error } = useQuery({
    queryKey: ["build-status"],
    queryFn: async () => {
      const response = await fetch("/api/build-status");
      if (!response.ok) {
        throw new Error(`Network response status: ${response?.status}`);
      }
      return (await response.json()) as { status: "ready" | "error" };
    },
  });

  const statusBgColors = {
    ready: "before:bg-green-400",
    enqueued: "before:bg-gray-700",
    building: "before:bg-orange-400",
    processing: "before:bg-orange-400",
    error: "before:bg-red-600",
  };

  const statusText = {
    ready: "Prêt!",
    enqueued: "En Attente",
    building: "En construction...",
    processing: "En construction...",
    error: "Erreur survenue",
  };

  return (
    <div className="m-2 md:m-8 max-w-2xl rounded-md bg-neutral-200 dark:bg-slate-800 flex flex-col items-center overflow-hidden font-sans">
      <div className="p-8">
        <NetlifyLogo width={200} />
      </div>
      <div className="bg-gradient-to-b from-cyan-600 to-blue-600 w-full p-6 md:p-12 text-center">
        <p className="uppercase font-semibold text-3xl">
          Status du dernier changement
        </p>
        <div
          className={`flex justify-center items-center font-medium mt-4 text-lg`}
        >
          <div
            className={
              data
                ? `flex items-center before:inline-block before:w-4 before:h-4 before:rounded-full before:mr-2 ${
                    statusBgColors[data.status]
                  }`
                : "opacity-0"
            }
          >
            {data ? statusText[data.status] : "Loading"}
          </div>
          <LoaderIcon
            className={`w-8 h-8 animate-spin absolute ${
              data ? "opacity-0" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};
