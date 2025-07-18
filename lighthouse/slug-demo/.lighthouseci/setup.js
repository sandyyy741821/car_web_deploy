// .lighthouseci/setup.js
module.exports = async (page, context) => {
  await page.goto('https://dev.futurx.app', { waitUntil: 'load' });

  // Inject token into localStorage (or sessionStorage if that’s what your app uses)
  await page.evaluate((token) => {
    localStorage.setItem('access_token', token);
    // Modify based on how your app stores auth (e.g. localStorage.setItem('auth', JSON.stringify({...}))
  }, process.env.ACCESS_TOKEN);

  console.log("✅ Access token injected into localStorage");
};
