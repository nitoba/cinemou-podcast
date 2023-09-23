import { google } from "googleapis"

const apiKey = import.meta.env.YOUTUBE_API_KEY
export const youtube = google.youtube({ version: 'v3', auth: apiKey })