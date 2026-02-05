import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace TranscriptClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class TranscriptClient {
    protected readonly _options: NormalizedClientOptions<TranscriptClient.Options>;
    constructor(options?: TranscriptClient.Options);
    /**
     * Returns transcript for the dub as an SRT or WEBVTT file.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {string} language_code - ISO-693 language code to retrieve the transcript for. Use 'source' to fetch the transcript of the original media.
     * @param {ElevenLabs.dubbing.TranscriptGetTranscriptForDubRequest} request
     * @param {TranscriptClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.ForbiddenError}
     * @throws {@link ElevenLabs.NotFoundError}
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     * @throws {@link ElevenLabs.TooEarlyError}
     *
     * @example
     *     await client.dubbing.transcript.getTranscriptForDub("dubbing_id", "source", {
     *         formatType: "srt"
     *     })
     */
    getTranscriptForDub(dubbing_id: string, language_code: string, request?: ElevenLabs.dubbing.TranscriptGetTranscriptForDubRequest, requestOptions?: TranscriptClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.dubbing.TranscriptGetTranscriptForDubResponse>;
    private __getTranscriptForDub;
}
