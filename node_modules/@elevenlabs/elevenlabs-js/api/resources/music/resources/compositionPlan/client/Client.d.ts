import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace CompositionPlanClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class CompositionPlanClient {
    protected readonly _options: NormalizedClientOptions<CompositionPlanClient.Options>;
    constructor(options?: CompositionPlanClient.Options);
    /**
     * Create a composition plan for music generation. Usage of this endpoint does not cost any credits but is subject to rate limiting depending on your tier.
     *
     * @param {ElevenLabs.music.BodyGenerateCompositionPlanV1MusicPlanPost} request
     * @param {CompositionPlanClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.music.compositionPlan.create({
     *         prompt: "prompt"
     *     })
     */
    create(request: ElevenLabs.music.BodyGenerateCompositionPlanV1MusicPlanPost, requestOptions?: CompositionPlanClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.MusicPrompt>;
    private __create;
}
