import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace TranscriptsClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TranscriptsClient {
    protected readonly _options: NormalizedClientOptions<TranscriptsClient.Options>;
    constructor(options?: TranscriptsClient.Options);
    /**
     * Fetch the transcript for one of the languages in a dub.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {string} language_code - ISO-693 language code to retrieve the transcript for. Use 'source' to fetch the transcript of the original media.
     * @param {ElevenLabs.dubbing.TranscriptsGetRequestFormatType} format_type - Format to return transcript in. For subtitles use either 'srt' or 'webvtt', and for a full transcript use 'json'. The 'json' format is not yet supported for Dubbing Studio.
     * @param {TranscriptsClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.transcripts.get("dubbing_id", "source", "srt")
     */
    get(dubbing_id: string, language_code: string, format_type: ElevenLabs.dubbing.TranscriptsGetRequestFormatType, requestOptions?: TranscriptsClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.DubbingTranscriptsResponseModel>;
    private __get;
}
