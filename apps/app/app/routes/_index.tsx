import { redirect, type LoaderFunctionArgs } from "react-router";

const SEO_TITLE =
  "AgentHQ — Self-hosted analytics your agent can operate";
const SEO_DESCRIPTION =
  "Self-hosted Agent-Native analytics: humans and agents share the same queries, charts, and dashboards. Your data stays on your machine.";

export function meta() {
  return [
    { title: SEO_TITLE },
    {
      name: "description",
      content: SEO_DESCRIPTION,
    },
    { property: "og:title", content: SEO_TITLE },
    { property: "og:description", content: SEO_DESCRIPTION },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: SEO_TITLE },
    { name: "twitter:description", content: SEO_DESCRIPTION },
  ];
}

function target(url: URL): string {
  return `/ask${url.search}${url.hash}`;
}

export function loader({ url }: LoaderFunctionArgs) {
  throw redirect(target(url));
}

export function clientLoader({ url }: LoaderFunctionArgs) {
  throw redirect(target(url));
}

export default function IndexRoute() {
  return null;
}
