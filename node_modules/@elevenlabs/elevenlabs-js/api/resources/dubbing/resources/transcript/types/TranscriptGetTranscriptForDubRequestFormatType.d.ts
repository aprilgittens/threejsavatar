/** Format to return transcript in. For subtitles use either 'srt' or 'webvtt', and for a full transcript use 'json'. The 'json' format is not yet supported for Dubbing Studio. */
export declare const TranscriptGetTranscriptForDubRequestFormatType: {
    readonly Srt: "srt";
    readonly Webvtt: "webvtt";
    readonly Json: "json";
};
export type TranscriptGetTranscriptForDubRequestFormatType = (typeof TranscriptGetTranscriptForDubRequestFormatType)[keyof typeof TranscriptGetTranscriptForDubRequestFormatType];
