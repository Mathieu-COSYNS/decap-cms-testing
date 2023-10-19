import CMS from "./CMS";
import { useEffect } from "react";
import { Settings as SettingsIcon } from "@styled-icons/material/Settings";
import { Analytics as AnalyticsIcon } from "@styled-icons/material-outlined/Analytics";

import config from "~/components/cms/CMSConfig";

import type { FC } from "react";

// const CustomPage: FC = () => {
//   return <div>I am a custom page!</div>;
// };

const CMSPage: FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      config.local_backend = true;
    }

    // if ("registerAdditionalLink" in CMS) {
    //   CMS.registerAdditionalLink({
    //     id: "analytics-page",
    //     title: "Analytics",
    //     data: CustomPage,
    //     options: {
    //       icon: "analytics",
    //     },
    //   });
    // }

    if ("registerIcon" in CMS) {
      CMS.registerIcon("settings", () => <SettingsIcon />);
      CMS.registerIcon("analytics", () => <AnalyticsIcon />);
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
