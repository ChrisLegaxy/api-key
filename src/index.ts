/**
 * @author Chris Van
 * @contact chrisvan.vshmr@gmail.com
 * @website http://chrisvan.netlify.app
 */

import { nanoid } from "nanoid";
import { createHmac } from "crypto";

const API_KEY_SECRET = process.env.API_KEY_SECRET || "API Key Secret";

/**
 * @function generateApiKey
 * @description used to generate api key
 * @returns random 30 characters from nanoid
 */
export const generateApiKey = () => nanoid(30);

/**
 * @function apiKeyHash
 * @description used to hash api key and store it in DB
 * @param apiKey - random string consists of 30 characters or more
 * @returns hash
 */
export const hashApiKey = (apiKey: string) => {
  return createHmac("sha1", API_KEY_SECRET).update(apiKey).digest("hex");
};

const apiKey = generateApiKey();
const apiKeyHash = hashApiKey(apiKey);

console.log(`API Key: ${apiKey}`);
console.log(`API Key Hash: ${apiKeyHash}`);
