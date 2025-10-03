const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 50,
    args: ["--window-size=1280,720"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });

  await page.goto("https://www.youtube.com/");
  const youtubeSearchSelector =
    "#center > yt-searchbox > div.ytSearchboxComponentInputBox > form > input";

  await page.waitForSelector(youtubeSearchSelector);

  await page.click(youtubeSearchSelector);

  await page.keyboard.type("JavaScript course");
  await page.keyboard.press("Enter");

  console.log("Search completed");

  const ytvideoSelector =
    "#contents > yt-lockup-view-model:nth-child(2) > div > a > yt-collection-thumbnail-view-model > yt-collections-stack > div > yt-thumbnail-view-model > div > img";
  await page.waitForSelector(ytvideoSelector);
  await page.click(ytvideoSelector);
  console.log("First video clicked");

  // Wait for video page to load
  await page.waitForSelector(".html5-video-player");

  // Function to check for "Skip Ads"
  async function skipAds() {
    try {
      const skipButtonSelector = "#skip-button\\:2 > div";
      await page.waitForSelector(skipButtonSelector, { timeout: 5000 });
      await page.click(skipButtonSelector);
      console.log("Ad skipped!");
    } catch (e) {
      console.log("No skippable ad found (yet).");
    }
  }

  // Keep checking for ads every few seconds
  setInterval(skipAds, 3000);

  //await skipAds();

  console.log("Video page loaded. Watching...");

  await new Promise((resolve) => setTimeout(resolve, 3000));

  await browser.close();
  console.log("Browser closed ✅");
})();
