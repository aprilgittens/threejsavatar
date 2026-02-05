/** Format to return transcript in. For subtitles use either 'srt' or 'webvtt', and for a full transcript use 'json'. The 'json' format is not yet supported for Dubbing Studio. */
export declare const TranscriptsGetRequestFormatType: {
    readonly Srt: "srt";
    readonly Webvtt: "webvtt";
    readonly Json: "json";
};
export type TranscriptsGetRequestFormatType = (typeof TranscriptsGetRequestFormatType)[keyof typeof TranscriptsGetRequestFormatType];
