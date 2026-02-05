import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../BaseClient";
import * as core from "../../../../../../core";
import * as ElevenLabs from "../../../../../index";
export declare namespace LlmUsageClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LlmUsageClient {
    protected readonly _options: NormalizedClientOptions<LlmUsageClient.Options>;
    constructor(options?: LlmUsageClient.Options);
    /**
     * Returns a list of LLM models and the expected cost for using them based on the provided values.
     *
     * @param {ElevenLabs.conversationalAi.LlmUsageCalculatorPublicRequestModel} request
     * @param {LlmUsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.llmUsage.calculate({
     *         promptLength: 1,
     *         numberOfPages: 1,
     *         ragEnabled: true
     *     })
     */
    calculate(request: ElevenLabs.conversationalAi.LlmUsageCalculatorPublicRequestModel, requestOptions?: LlmUsageClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.LlmUsageCalculatorResponseModel>;
    private __calculate;
}
