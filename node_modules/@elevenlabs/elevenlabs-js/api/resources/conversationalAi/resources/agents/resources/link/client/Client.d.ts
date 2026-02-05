import type { BaseClientOptions, BaseRequestOptions } from "../../../../../../../../BaseClient";
import { type NormalizedClientOptions } from "../../../../../../../../BaseClient";
import * as core from "../../../../../../../../core";
import * as ElevenLabs from "../../../../../../../index";
export declare namespace LinkClient {
    type Options = BaseClientOptions;
    interface RequestOptions extends BaseRequestOptions {
    }
}
export declare class LinkClient {
    protected readonly _options: NormalizedClientOptions<LinkClient.Options>;
    constructor(options?: LinkClient.Options);
    /**
     * Get the current link used to share the agent with others
     *
     * @param {string} agent_id - The id of an agent. This is returned on agent creation.
     * @param {LinkClient.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link ElevenLabs.UnprocessableEntityError}
     *
     * @example
     *     await client.conversationalAi.agents.link.get("agent_3701k3ttaq12ewp8b7qv5rfyszkz")
     */
    get(agent_id: string, requestOptions?: LinkClient.RequestOptions): core.HttpResponsePromise<ElevenLabs.GetAgentLinkResponseModel>;
    private __get;
}
