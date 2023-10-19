import { NetlifyAPI } from "netlify";

export async function GET(_request: Request) {
  const client = new NetlifyAPI(process.env.NETLIFY_TOKEN, {});
  // @ts-ignore
  const deploys = await client.listSiteDeploys({
    siteId: process.env.NETLIFY_SITE_ID,
  });

  return Response.json({
    status: deploys[0].state,
  });
}
