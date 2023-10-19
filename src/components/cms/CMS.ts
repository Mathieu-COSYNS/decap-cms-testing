// import DecapCMS from "decap-cms-app";
// import type { CMS as DecapCMSType } from "decap-cms-core";
import StaticCMS from "@staticcms/core";
import "@staticcms/core/dist/main.css";

// import { CmsConfig } from "decap-cms-core";
import { Config as StaticCMSConfig } from "@staticcms/core";

const CMS = StaticCMS;

export type Config = StaticCMSConfig;

export default CMS;
