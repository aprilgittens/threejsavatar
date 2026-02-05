import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace LanguageClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LanguageClient {
    protected readonly _options: NormalizedClientOptions<LanguageClient.Options>;
    constructor(options?: LanguageClient.Options);
    /**
     * Adds the given ElevenLab Turbo V2/V2.5 language code to the resource. Does not automatically generate transcripts/translations/audio.
     *
     * @param {string} dubbing_id - ID of the dubbing project.
     * @param {ElevenLabs.dubbing.resource.BodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost} request
     * @param {LanguageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.dubbing.resource.language.add("dubbing_id")
     */
    add(dubbing_id: string, request?: ElevenLabs.dubbing.resource.BodyAddALanguageToTheResourceV1DubbingResourceDubbingIdLanguagePost, requestOptions?: LanguageClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.LanguageAddedResponse>;
    private __add;
}
