import { updatePullRequestWithFileSizeLabel } from "./features/PullRequestFileSize";
import { Context, Probot } from "probot";
import { updatePullRequestWithLinesChangedLabel } from "./features/PullRequestLinesChanged";
import { getConfig } from "./shared/Config";

export = (app: Probot) => {
  app.on("pull_request.opened", async (context) => {
    await updatePullRequest(context);
  });

  app.on("pull_request.reopened", async (context) => {
    await updatePullRequest(context);
  });

  app.on("pull_request.synchronize", async (context) => {
    await updatePullRequest(context);
  });
};

async function updatePullRequest(
  context: Context<"pull_request">
): Promise<void> {
  const config = await getConfig(context);

  const features: Promise<void>[] = [];

  if (config.labels.files)
    features.push(updatePullRequestWithFileSizeLabel(context));
  if (config.labels.lines)
    features.push(updatePullRequestWithLinesChangedLabel(context));

  await Promise.all(features);
}
