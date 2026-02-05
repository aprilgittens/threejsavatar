import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace KnowledgeBaseClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class KnowledgeBaseClient {
    protected readonly _options: NormalizedClientOptions<KnowledgeBaseClient.Options>;
    constructor(options?: KnowledgeBaseClient.Options);
    /**
     * Returns the number of pages in the agent's knowledge base.
     *
     * @param {string} agent_id
     * @param {KnowledgeBaseClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.agents.knowledgeBase.size("agent_id")
     */
    size(agent_id: string, requestOptions?: KnowledgeBaseClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetAgentKnowledgebaseSizeResponseModel>;
    private __size;
}
