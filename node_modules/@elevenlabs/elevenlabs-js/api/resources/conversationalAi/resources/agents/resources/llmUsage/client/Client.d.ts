import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace LlmUsageClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LlmUsageClient {
    protected readonly _options: NormalizedClientOptions<LlmUsageClient.Options>;
    constructor(options?: LlmUsageClient.Options);
    /**
     * Calculates expected number of LLM tokens needed for the specified agent.
     *
     * @param {string} agent_id
     * @param {ElevenLabs.conversationalAi.agents.LlmUsageCalculatorRequestModel} request
     * @param {LlmUsageClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.agents.llmUsage.calculate("agent_id")
     */
    calculate(agent_id: string, request?: ElevenLabs.conversationalAi.agents.LlmUsageCalculatorRequestModel, requestOptions?: LlmUsageClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.LlmUsageCalculatorResponseModel>;
    private __calculate;
}
