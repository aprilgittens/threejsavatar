import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
export declare namespace AudioClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class AudioClient {
    protected readonly _options: NormalizedClientOptions<AudioClient.Options>;
    constructor(options?: AudioClient.Options);
    /**
     * Returns dub as a streamed MP3 or MP4 file. If this dub has been edited using Dubbing Studio you need to use the resource render endpoint as this endpoint only returns the original automatic dub result.
     * @throws {@link ElevenLabs.ForbiddenError}
     * @throws {@link ElevenLabs.NotFoundError}
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     * @throws {@link ElevenLabs.TooEarlyError}
     */
    get(dubbing_id: string, language_code: string, requestOptions?: AudioClient.RequestOptions): core.HttpResponsePromise<ReadableStream<Uint8Array>>;
    private __get;
}
