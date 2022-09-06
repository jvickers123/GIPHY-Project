import { TIMEOUT_SECONDS } from './config';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(
        new Error(
          `Request took too long! Timeout after ${s} seconds. Please try again.`
        )
      );
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    // 1) AJAX race between giphy.com and timeout
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
    if (!res.ok)
      throw new Error(
        `(${res.status}) Failed to connect to host. Please try again later!`
      );
    // 2) Return JSON data
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const checkNetworkSpeed = function () {
  // 1) Check if browser supports navigator.connection
  if (!navigator.connection) return '4g';

  // 2) Return effective type: (4g, 3g or 2g)
  return navigator.connection.effectiveType;
};
