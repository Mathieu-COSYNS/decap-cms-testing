import CMS from "./CMS";
import { useEffect } from "react";
import { Settings as SettingsIcon } from "@styled-icons/material/Settings";
// import { Analytics as AnalyticsIcon } from "@styled-icons/material-outlined/Analytics";
import { Pulse as PulseIcon } from "@styled-icons/boxicons-regular/Pulse";

import config from "~/components/cms/CMSConfig";

import type { FC } from "react";
import { BuildStatus } from "./BuildStatus";
import Providers from "~/app/providers";

const CMSPage: FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      config.local_backend = true;
    }

    if ("registerAdditionalLink" in CMS) {
      CMS.registerAdditionalLink({
        id: "status-page",
        title: "Status",
        data: () => (
          <Providers>
            <BuildStatus />
          </Providers>
        ),
        options: {
          icon: "pulse",
        },
      });
    }

    if ("registerIcon" in CMS) {
      CMS.registerIcon("settings", () => <SettingsIcon />);
      CMS.registerIcon("pulse", () => <PulseIcon />);
      // CMS.registerIcon("analytics", () => <AnalyticsIcon />);
    }

    CMS.init({
      config,
    });
  }, []);

  return (
    <div>
      <style jsx global>{`
        html,
        body {
          background: #eff0f4;
          height: 100%;
        }

        #__next {
          display: none;
        }
      `}</style>
    </div>
  );
};

CMSPage.displayName = "CMSPage";

export default CMSPage;
